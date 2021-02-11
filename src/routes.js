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
  /**
   * @swagger
   * /media:
   *   get:
   *     description: |
   *        Search for media items
   *
   *        Examples:
   *
   *          - Get all series: [/media?byType=series](/media?byType=series)
   *          - Get series by Id: [/media?byType=series&byId=series-1](/media?byType=series&byId=series-1)
   *          - Get all series with genre-1: [/media?byType=series&byGenre=genre-1](/media?byType=series&byGenre=genre-1)
   *          - Get all episodes of series-1 & season number 3 on descending order: [/media?byType=episode&bySeriesId=series-1&bySeasonNumber=3&sortBy=episodeNumber:desc](/media?byType=episode&bySeriesId=series-1&bySeasonNumber=3&sortBy=episodeNumber:desc)
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
   *           enum: [series, season, episode, channel]
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

  /**
   * @swagger
   * /epg:
   *   get:
   *     description: |
   *       Get programs on the EPG according to a given query params
   *
   *     parameters:
   *       - in: query
   *         name: feedTitle
   *         description: Override the feed title
   *         schema:
   *           type: string
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
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
