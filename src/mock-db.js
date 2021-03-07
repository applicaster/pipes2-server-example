const low = require("lowdb");
const Fuse = require("fuse.js");
const FileSync = require("lowdb/adapters/FileSync");
const _ = require("lodash");
const adapter = new FileSync("db.json");
const db = low(adapter);
const maxResults = 100;
const { DateTime } = require("luxon");

const calcTimestamp = (input, timeZoneOffset) => {
  if (Number(input)) return Number(input);
  const now = DateTime.local();
  if (input === "now") return now;
  if (input === "tonight")
    return now.setZone(timeZoneOffset).startOf("day").plus({ hours: 20 });
  if (input === "endOfToday")
    return now.setZone(timeZoneOffset).startOf("day").plus({ hours: 24 });
};

const epgUtils = (programs, epgFilters, timeZoneOffset) => {
  const now = DateTime.local();
  // add isLive property to all items that are currently running
  const modifiedPrograms = programs.map((program) => {
    if (
      program.airTimestamp <= now &&
      now <= program.airTimestamp.plus({ seconds: program.durationInSeconds })
    ) {
      program.isLive = true;
    }
    return program;
  });

  if (epgFilters.from && epgFilters.to) {
    const from = calcTimestamp(epgFilters.from, timeZoneOffset);
    const to = calcTimestamp(epgFilters.to);
    return modifiedPrograms.filter((program) => {
      return from <= program.airTimestamp && to >= program.airTimestamp;
    });
  }

  if (epgFilters.isLive) {
    return modifiedPrograms.filter((program) => program.isLive);
  }

  if (epgFilters.upNext) {
    return modifiedPrograms.filter((program) => now <= program.airTimestamp);
  }

  if (epgFilters.justEnded) {
    return modifiedPrograms
      .filter(
        (program) =>
          program.airTimestamp <= now &&
          now >=
            program.airTimestamp.plus({ seconds: program.durationInSeconds })
      )
      .reverse();
  }

  if (epgFilters.forDay) {
    return modifiedPrograms.filter((program) => {
      return (
        program.airTimestamp.ordinal ==
        DateTime.fromMillis(Number(epgFilters.forDay)).ordinal
      );
    });
  }

  if (epgFilters.futureForDay) {
    return modifiedPrograms.filter((program) => {
      return (
        program.airTimestamp.ordinal ==
          DateTime.fromMillis(Number(epgFilters.futureForDay)).ordinal &&
        program.airTimestamp.toMillis() >= DateTime.local().toMillis()
      );
    });
  }

  if (epgFilters.nowAndOnwardsForToday) {
    return modifiedPrograms.filter((program) => {
      return (
        program.airTimestamp.ordinal == DateTime.local().ordinal &&
        program.airTimestamp.toMillis() + program.durationInSeconds * 1000 >=
          DateTime.local().toMillis()
      );
    });
  }

  return modifiedPrograms;
};

db._.mixin({
  epgUtils,
  fuse: (items, searchString) => {
    if (searchString) {
      const fuse = new Fuse(items, {
        keys: ["id", "title", "summary"],
      });
      const result = fuse.search(searchString).map(({ item }) => item);
      return result.filter((item) => item.type !== "season");
    }
    return items;
  },
});

const calculateLimit = (limit) =>
  limit && Number(limit) < maxResults ? Number(limit) : maxResults;

const now = DateTime.local();
const startOfWeek = (zone = "UTC") => now.setZone(zone).startOf("week");

const calculateSorts = (sorts) => {
  return sorts.reduce(
    (acc, item) => {
      acc.keys.push(item.split(":")[0]);
      if (_.endsWith(item, ":desc")) {
        acc.order.push("desc");
      } else {
        acc.order.push("asc");
      }
      return acc;
    },
    {
      keys: [],

      order: [],
    }
  );
};

const getNextPage = ({ total, maxPage, perPage, page }) => {
  if (maxPage > page && total > page * perPage) {
    return Number(page) + 1;
  }
  return undefined;
};

module.exports.getMediaItems = ({
  filters,
  sorts,
  maxPage,
  perPage,
  page,
  q,
}) => {
  const { keys, order } = calculateSorts(sorts);

  const baseQuery = db
    .get("media")
    .filter(filters)
    .fuse(q)
    .orderBy(keys, order);

  const total = baseQuery.size().value();
  const currentPage = _.defaultTo(page, 1);
  currentPerPage = _.defaultTo(perPage, 20);
  currentMaxPage = _.defaultTo(maxPage, 100);
  if (currentPage > currentMaxPage) return { items: [] };

  const nextPage = getNextPage({
    total,
    maxPage: currentMaxPage,
    perPage: currentPerPage,
    page: currentPage,
  });
  return {
    nextPage,
    items: baseQuery
      .map((item) => {
        if (item.startsOn) {
          item.startsOnTimestamp = startOfWeek().plus(item.startsOn);
        }
        return item;
      })
      .drop((currentPage - 1) * currentPerPage)
      .take(currentPerPage)
      .value(),
  };
};

module.exports.getPrograms = ({
  timeZoneOffset,
  filters,
  epgFilters,
  maxPage,
  perPage,
  page,
}) => {
  const baseQuery = db
    .get("programs")
    .filter(filters)
    .map((program) => {
      program.airTimestamp = startOfWeek(timeZoneOffset).plus(program.airTime);
      return program;
    })
    .epgUtils(epgFilters, timeZoneOffset);

  const total = baseQuery.size().value();
  const currentPage = _.defaultTo(page, 1);
  currentPerPage = _.defaultTo(perPage, 20);
  currentMaxPage = _.defaultTo(maxPage, 100);
  if (currentPage > currentMaxPage) return { items: [] };

  const nextPage = getNextPage({
    total,
    maxPage: currentMaxPage,
    perPage: currentPerPage,
    page: currentPage,
  });
  return {
    nextPage,
    items: baseQuery
      .drop((currentPage - 1) * currentPerPage)
      .take(currentPerPage)
      .value(),
  };
};

module.exports.getCollectionByName = ({ name }) => {
  if (name === "genres") {
    return {
      items: [
        { id: "genre-1", title: "Genre 1", type: "genre" },
        { id: "genre-2", title: "Genre 2", type: "genre" },
        { id: "genre-3", title: "Genre 3", type: "genre" },
        { id: "genre-4", title: "Genre 4", type: "genre" },
        { id: "genre-5", title: "Genre 5", type: "genre" },
        { id: "genre-6", title: "Genre 6", type: "genre" },
        { id: "genre-7", title: "Genre 7", type: "genre" },
        { id: "genre-8", title: "Genre 8", type: "genre" },
        { id: "genre-9", title: "Genre 9", type: "genre" },
        { id: "genre-10", title: "Genre 10", type: "genre" },
      ],
    };
  }

  if (name === "channels") {
    return {
      items: [
        { id: "channel-1", title: "Channel 1", type: "channel" },
        { id: "channel-2", title: "Channel 2", type: "channel" },
        { id: "channel-3", title: "Channel 3", type: "channel" },
        { id: "channel-4", title: "Channel 4", type: "channel" },
      ],
    };
  }
  const collections = {
    homeFeatured: {
      items: db
        .get("media")
        .filter((item) => item.type === "show")
        .map((item) => {
          item.cta = "Start Watching";
          item.label = "Featured";
          return item;
        })
        .shuffle()
        .take(1),
    },

    featuredGenre1: {
      id: 'genre-1',
      type: 'example-genre',
      items: db
        .get("media")
        .filter((item) => item.type === "show" && item.genre === "genre-1")
        .shuffle()
        .take(6),
    },

    featuredGenre2: {
      id: 'genre-2',
      type: 'example-genre',
      items: db
        .get("media")
        .filter((item) => item.type === "show" && item.genre === "genre-2")
        .shuffle()
        .take(6),
    },

    popularMovies: {
      type: 'feed',
      items: db
        .get("media")
        .filter((item) => item.type === "movie")
        .shuffle()
        .take(6),
    },

    featuredMovies: {
      type: 'feed',
      items: db
        .get("media")
        .filter((item) => item.type === "movie")
        .shuffle()
        .take(6),
    },

    popularShows: {
      type: 'feed',
      items: db
        .get("media")
        .filter((item) => item.type === "show")
        .shuffle()
        .take(6),
    },
  };
  return {
    items: collections[name].items.value(),
    type: collections[name].type,
    id: collections[name].id
  };
};

module.exports.getUserCollectionByName = ({ name, userToken }) => {
  const getUserIdByToken = (token) => {
    // On a real server you would query your db to find the user
    return "userId1";
  };

  const usersMock = {
    userId1: {
      // randomly pick 4 episodes
      myFavorites: db
        .get("media")
        .filter((item) => item.type === "episode")
        .shuffle()
        .take(4)
        .map(({ id }) => ({ id }))
        .value(),
    },
  };

  const userId = getUserIdByToken(userToken);
  const collections = {
    myFavorites: {
      items: db
        .get("media")
        .intersectionBy(usersMock[userId].myFavorites, "id"),
    },
  };

  return { items: collections[name].items.value() };
};
