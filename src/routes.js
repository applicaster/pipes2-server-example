const {
  absoluteReqPath,
  renderDummyMediaGroup,
  renderChannelMediaGroupById,
} = require("./utils");
const _ = require("lodash");
const base64url = require("base64url");
const { DateTime } = require("luxon");
const URI = require("urijs");

const mockDb = require("./mock-db");

const SCREEN_TYPES = {
  EXAMPLE_EPISODE: "example-episode",
  EXAMPLE_SHOW: "example-show",
  EXAMPLE_COMING_SOON_show: "example-coming-soon-show",
  EXAMPLE_CHANNEL: "example-channel",
  EXAMPLE_GENRE: "example-genre",
  EXAMPLE_SEASON: "example-season",
  EXAMPLE_MOVIE: "example-movie",
};

const getFiltersFromRequestQuery = (query) => {
  return _.reduce(
    query,
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
};

const entryRenderers = {
  movie: (movie) => {
    const { title, id, summary, genre } = movie;
    return {
      id,
      title,
      type: {
        value: SCREEN_TYPES.EXAMPLE_MOVIE,
      },
      summary,
      extensions: {
        genre,
      },
      ...renderDummyMediaGroup,
    };
  },
  episode: (episode, timeZoneOffset = "UTC") => {
    const {
      id,
      title,
      genre,
      durationInSeconds,
      streamURL,
      showId,
      channel,
      summary,
      seasonNumber,
      episodeNumber,
      airTimestamp,
      isLive,
      cta,
      label,
    } = episode;

    const fromHour = DateTime.fromMillis(Number(airTimestamp))
      .setZone(timeZoneOffset)
      .toFormat("HH:mm");
    const toHour = DateTime.fromMillis(Number(airTimestamp))
      .plus({ seconds: durationInSeconds })
      .setZone(timeZoneOffset)
      .toFormat("HH:mm");
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
        cta,
        label,
        genre,
        duration: durationInSeconds,
        showId,
        channel,
        seasonNumber,
        episodeNumber,
        relativeBroadcastDate:
          airTimestamp &&
          DateTime.fromMillis(Number(airTimestamp)).toRelative(),
        broadcastDate: DateTime.fromMillis(Number(airTimestamp))
          .setZone(timeZoneOffset)
          .toFormat("LLL dd, h:mma"),
        broadcastTimeSlot: `${fromHour}-${toHour}`,
        isLive,
        analyticsCustomProperties: {
          showId,
          genre,
          channel,
          seasonNumber,
          episodeNumber,
        },
      },
      ...renderDummyMediaGroup,
    };
  },

  show: (show) => {
    const {
      id,
      title,
      genre,
      channel,
      summary,
      startsOnTimestamp,
      cta,
      label,
    } = show;
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
          ? SCREEN_TYPES.EXAMPLE_COMING_SOON_show
          : SCREEN_TYPES.EXAMPLE_SHOW,
      },
      extensions: {
        cta,
        label,
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
    const { id, cta, label } = channel;
    return {
      id,
      title: id,
      type: {
        value: SCREEN_TYPES.EXAMPLE_CHANNEL,
      },
      extensions: {
        cta,
        label,
      },
      ...renderChannelMediaGroupById(id),
    };
  },
  genre: (genre) => {
    const { id, cta, label } = genre;
    return {
      id,
      title: id,
      type: {
        value: SCREEN_TYPES.EXAMPLE_GENRE,
      },
      extensions: {
        cta,
        label,
      },
    };
  },
  season: (season) => {
    const { id, cta, label } = season;
    return {
      id,
      title: id,
      type: {
        value: SCREEN_TYPES.EXAMPLE_SEASON,
      },
      extensions: {
        cta,
        label,
      },
    };
  },
};

const parseContext = (ctx, logError = true) => {
  try {
    return JSON.parse(base64url.decode(ctx));
  } catch (error) {
    // Choose if you want to log ctx errors
    if (logError) {
      console.log(error);
    }
    return {};
  }
};

module.exports.setup = (app) => {
  /**
   * @swagger
   * /media:
   *   get:
   *     description: |
   *        Search for media items
   *
   *        Examples:
   *
   *          - Get all show: [/media?byType=show](/media?byType=show)
   *          - Get show by Id: [/media?byType=show&byId=show-1](/media?byType=show&byId=show-1)
   *          - Get all show with genre-1: [/media?byType=show&byGenre=genre-1](/media?byType=show&byGenre=genre-1)
   *          - Get all episodes of show-1 & season number 3 on descending order: [/media?byType=episode&byshowId=show-1&bySeasonNumber=3&sortBy=episodeNumber:desc](/media?byType=episode&byshowId=show-1&bySeasonNumber=3&sortBy=episodeNumber:desc)
   *          - Search for episodes that contain the text `E2S1`: [/media?byType=episode&q=E2S1](/media?byType=episode&q=E2S1)
   *
   *
   *     parameters:
   *       - in: query
   *         name: byId
   *         description: Get an item by its id (the result will be an array with single item)
   *         schema:
   *           type: string
   *
   *       - in: query
   *         name: byType
   *         schema:
   *           type: string
   *           enum: [show, season, episode, channel]
   *
   *       - in: query
   *         name: bySeasonNumber
   *         description: For episodes  - find episodes with the given season number.
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: byEpisodeNumber
   *         description: For episodes  - find episodes with the given episode number.
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: byChannel
   *         description: Find items by a for a specific channel.
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: byGenre
   *         description:  Find items by a for a specific genre.
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: sortBy
   *         description: |
   *           Sort by one parameter or more (comma separated).
   *
   *           You can suffix the paramter with `:decs` to reverse its order
   *         schema:
   *           type: string
   *           enum: [episodeNumber, seasonNumber, channel, genre, episodeNumber:decs, seasonNumber:decs, channel:decs, genre:decs]
   *
   *       - in: query
   *         name: q
   *         description: Free text search.
   *         schema:
   *           type: string
   *
   *       - in: query
   *         name: page
   *         description: Page number - (defaults to 20)
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: perPage
   *         description: Items per page - starts from 1 (defaults to 1)
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: maxPage
   *         description: Max page number - if you want to remove pagination set the max page to the current page number
   *         schema:
   *           type: number
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/media", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const filters = getFiltersFromRequestQuery(req.query);
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

  /**
   * @swagger
   * /epg/days:
   *   get:
   *     description: |
   *        List of the current week days to populate the EPG tabs
   *
   *
   *     parameters:
   *
   *       - in: query
   *         name: startToday
   *         description: If set to true - start the week today and if left out starts at the beginning of the week (Monday)
   *         schema:
   *           type: boolean
   *
   *       - in: query
   *         name: ctx
   *         description: Supports timeZoneOffset context key according to https://docs.applicaster.com/integrations/available-context-keys
   *         schema:
   *           type: string
   *
   *       - in: query
   *         name: feedTitle
   *         description: Override the feed title
   *         schema:
   *           type: string
   *
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/epg/days", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { timeZoneOffset } = parseContext(req.query.ctx, false);
    res.json({
      id: absoluteReqPath(req),
      title: req.query.feedTitle || "EPG",
      entry: _.times(7).map((index) => {
        const day = DateTime.local()
          .setZone(timeZoneOffset || "UTC")
          .startOf(req.query.startToday === "true" ? "day" : "week")
          .plus({ days: index });

        let title = day.toFormat("cccc");
        if (req.query.startToday === "true" && index === 0) {
          title = "Today";
        }

        if (req.query.startToday === "true" && index === 1) {
          title = "Tomorrow";
        }

        return {
          id: day.toMillis(),
          title,
          type: {
            value: index === 0 ? "epg-today" : "epg-day",
          },
          extensions: {
            channel: req.query.channelId,
          },
        };
      }),
    });
  });

  /**
   * @swagger
   * /epg:
   *   get:
   *     description: |
   *       Get programs on the EPG according to given query params
   *
   *       Examples:
   *
   *        - Get all up next programs [/epg?upNext=true](/epg?upNext=true)
   *        - Get all just ended programs [/epg?justEnded=true](/epg?justEnded=true)
   *        - Get all programs for a given day  [/epg?forDay=<REPLACE_WITH_TIMESTAMP>](/epg?forDay=<REPLACE_WITH_TIMESTAMP>)
   *        - Get all future programs for a given day  [/epg?futureForDay=<REPLACE_WITH_TIMESTAMP>](/epg?futureForDay=<REPLACE_WITH_TIMESTAMP>)
   *
   *
   *     parameters:
   *       - in: query
   *         name: feedTitle
   *         description: Override the feed title
   *         schema:
   *           type: string
   * 
   *       - in: query
   *         name: ctx
   *         description: Supports timeZoneOffset context key according to https://docs.applicaster.com/integrations/available-context-keys 
   *         schema:
   *           type: string
   *
   *       - in: query
   *         name: byId
   *         description: Get an item by its id (the result will be an array with single item)
   *         schema:
   *           type: string
   *
   *       - in: query
   *         name: byType
   *         schema:
   *           type: string
   *           enum: [show, season, episode, channel]
   *
   *       - in: query
   *         name: bySeasonNumber
   *         description: For episodes  - find episodes with the given season number.
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: byEpisodeNumber
   *         description: For episodes  - find episodes with the given episode number.
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: byChannel
   *         description: Find items by a for a specific channel.
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: byGenre
   *         description:  Find items by a for a specific genre.
   *         schema:
   *           type: number

   *       - in: query
   *         name: from
   *         description: from timestamp or reserved words (`now`, `tonight`, `endOfToday`)
   *         schema:
   *           type: string
   * 
   *       - in: query
   *         name: to
   *         description: to timestamp or reserved words  (`now`, `tonight`, `endOfToday`)
   *         schema:
   *           type: string
   *
   *       - in: query
   *         name: isLive
   *         description: All currently running programs
   *         schema:
   *           type: boolean
   *
   *       - in: query
   *         name: upNext
   *         description: All up next programs
   *         schema:
   *           type: boolean
   *
   *       - in: query
   *         name: justEnded
   *         description: The last episodes that were just ended 
   *         schema:
   *           type: boolean
   *
   *       - in: query
   *         name: forDay
   *         description: given a timestamp in millis
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: futureForDay
   *         description: given a timestamp in millis
   *         schema:
   *           type: number
   * 
   *       - in: query
   *         name: nowAndOnwardsForToday
   *         description: like `futureForDay` but for today
   *         schema:
   *           type: boolean
   *
   *    
   *       - in: query
   *         name: page
   *         description: Page number - (defaults to 1)
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: perPage
   *         description: Items per page (defaults to 2o)
   *         schema:
   *           type: number
   *
   *       - in: query
   *         name: maxPage
   *         description: Max page number - if you want to remove pagination set the max page to the current page number
   *         schema:
   *           type: number
   *
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/epg", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { timeZoneOffset } = parseContext(req.query.ctx, false);
    const filters = getFiltersFromRequestQuery(req.query);

    const epgFilters = {
      from: req.query.from,
      to: req.query.to,
      isLive: req.query.isLive,
      upNext: req.query.upNext,
      justEnded: req.query.justEnded,
      forDay: req.query.forDay,
      futureForDay: req.query.futureForDay,
      nowAndOnwardsForToday: req.query.nowAndOnwardsForToday,
    };

    const { items, nextPage } = mockDb.getPrograms({
      timeZoneOffset: timeZoneOffset || "UTC",
      filters,
      epgFilters,
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
      id: req.query.byChannel ? req.query.byChannel : absoluteReqPath(req),
      title: req.query.feedTitle,
      type: {
        value: "example-channel",
      },
      next: next && next.toString(),
      entry: items.map((item) => {
        return entryRenderers[item.type](item, timeZoneOffset || "UTC");
      }),
    });
  });

  /**
   * @swagger
   * /collections/{collectionName}:
   *   get:
   *     description: |
   *        Get collection by name
   *
   *     parameters:
   *       - in: query
   *         name: feedTitle
   *         description: Override the feed title
   *         schema:
   *           type: string
   *       - in: path
   *         name: collectionName
   *         description: Predefined collection name
   *         schema:
   *           type: string
   *           enum: [homeFeatured, featuredGenre1, featuredGenre2, genres]
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/collections/:collectionName", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { items } = mockDb.getCollectionByName({
      name: req.params.collectionName,
    });

    res.json({
      id: absoluteReqPath(req),
      title: req.query.feedTitle || req.params.collectionName,
      type: {
        value: "feed",
      },
      entry: items.map((item) => {
        return entryRenderers[item.type](item);
      }),
    });
  });

  /**
   * @swagger
   * /user/collections/{collectionName}:
   *   get:
   *     description: |
   *        User collection (user info from ctx)
   *
   *     parameters:
   *       - in: query
   *         name: feedTitle
   *         description: Override the feed title
   *         schema:
   *           type: string
   *       - in: path
   *         name: collectionName
   *         description: Predefined collection name
   *         schema:
   *           type: string
   *           enum: [myFavorites]
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/user/collections/:collectionName", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const context = parseContext(req.query.ctx, false);

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
