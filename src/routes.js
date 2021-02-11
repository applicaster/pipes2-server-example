const { absoluteReqPath, renderDummyMediaGroup } = require("./utils");
const _ = require("lodash");
const base64url = require("base64url");
const { DateTime } = require("luxon");
const URI = require("urijs");

const mockDb = require("./mock-db");

const SCREEN_TYPES = {
  EXAMPLE_EPISODE: "example-episode",
  EXAMPLE_SERIES: "example-series",
  EXAMPLE_COMING_SOON_SERIES: "example-coming-soon-series",
  EXAMPLE_CHANNEL: "example-channel",
};

const entryRenderers = {
  episode: (episode) => {
    const {
      id,
      title,
      genre,
      durationInSeconds,
      streamURL,
      seriesId,
      channel,
      summary,
      seasonNumber,
      episodeNumber,
    } = episode;
    return {
      id,
      title,
      summary,
      type: {
        value: SCREEN_TYPES.EXAMPLE_EPISODE,
      },
      content: {
        src: streamURL,
        type: "video/hls",
      },
      extensions: {
        genre,
        duration: durationInSeconds,
        seriesId,
        channel,
        seasonNumber,
        episodeNumber,
        analyticsCustomProperties: {
          seriesId,
          genre,
          channel,
          seasonNumber,
          episodeNumber,
        },
      },
      ...renderDummyMediaGroup,
    };
  },

  series: (series) => {
    const { id, title, genre, channel, summary, startsOnTimestamp } = series;
    const startsOn =
      startsOnTimestamp &&
      `Starts On ${DateTime.fromMillis(Number(startsOnTimestamp)).toFormat(
        "LLL dd, h:mma"
      )}`;
    return {
      id,
      title,
      summary,
      type: {
        value: startsOn
          ? SCREEN_TYPES.EXAMPLE_COMING_SOON_SERIES
          : SCREEN_TYPES.EXAMPLE_SERIES,
      },
      extensions: {
        genre,
        channel,
        startsOn,
        analyticsCustomProperties: {
          channel,
          genre,
        },
      },
      ...renderDummyMediaGroup,
    };
  },
  channel: (channel) => {
    const { id } = channel;
    return {
      id,
      title: id,
      type: {
        value: SCREEN_TYPES.EXAMPLE_CHANNEL,
      },
    };
  },
  season: (season) => {
    const { id } = season;
    return {
      id,
      title: id,
      type: {
        value: SCREEN_TYPES.SEASON_CHANNEL,
      },
    };
  },
};

module.exports.setup = (app) => {
  app.get("/media", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    const filters = _.reduce(
      req.query,
      function (result, value, key) {
        if (key.startsWith("by")) {
          let castedValue = value;
          if (value === "true") {
            castedValue = true;
          }
          if (_.includes(["bySeasonNumber", "byEpisodeNumber"], key)) {
            castedValue = Number(value);
          }

          result[_.camelCase(key.substring(2))] = castedValue;
        }
        return result;
      },
      {}
    );

    const sorts = req.query.sortBy ? req.query.sortBy.split(",") : [];

    const { items, nextPage } = mockDb.getMediaItems({
      q: req.query.q,
      filters,
      sorts,
      maxPage: req.query.maxPage,
      perPage: req.query.perPage,
      page: req.query.page,
    });

    let next;
    if (nextPage) {
      next = new URI(absoluteReqPath(req));
      console.log({ nextPage });
      next.setQuery("page", nextPage);
    }

    res.json({
      id: absoluteReqPath(req),
      title: req.query.feedTitle,
      type: {
        value: "feed",
      },
      next: next && next.toString(),
      entry: items.map((item) => {
        return entryRenderers[item.type](item);
      }),
    });
  });

  app.get("/epg", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    const filters = _.reduce(
      req.query,
      function (result, value, key) {
        if (key.startsWith("by")) {
          result[_.camelCase(key.substring(2))] =
            value === "true" ? true : value;
        }
        return result;
      },
      {}
    );

    const epgFilters = {
      now: req.query.now,
      upNext: req.query.upNext,
      justEnded: req.query.justEnded,
      forDay: req.query.forDay,
    };

    const { items } = mockDb.getPrograms({
      filters,
      epgFilters,
      limit: req.query.limit,
    });

    res.json({
      id: absoluteReqPath(req),
      title: req.query.feedTitle,
      type: {
        value: "feed",
      },
      entry: items,
    });
  });

  app.get("/collections/:collectionName", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");

    const { items } = mockDb.getCollectionByName({
      name: req.params.collectionName,
    });

    res.json({
      id: absoluteReqPath(req),
      title: req.query.feedTitle,
      type: {
        value: "feed",
      },
      entry: items,
    });
  });

  app.get("/user/collections/:collectionName", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    let context = {};
    try {
      context = JSON.parse(base64url.decode(req.query.ctx));
    } catch (error) {
      // This is for mocking purposes - as the example app is not holding user tokens
    }

    const { items } = mockDb.getUserCollectionByName({
      name: req.params.collectionName,
      userToken: context.userToken,
    });

    res.json({
      id: absoluteReqPath(req),
      title: req.query.feedTitle,
      type: {
        value: "feed",
      },
      entry: items,
    });
  });
};
