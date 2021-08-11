const {
  absoluteReqPath,
  renderDummyMediaGroup,
  renderChannelMediaGroupById,
  wrapEntryInFeed,
  createEntriesWithoutStream,
  responseForOutcome,
} = require("./utils");
const _ = require("lodash");
const base64url = require("base64url");
const { DateTime } = require("luxon");
const URI = require("urijs");
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const mockDb = require("./mock-db");



const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync("resume-watching.json", { defaultValue: { events: [] }, });
const db = low(adapter)



const SCREEN_TYPES = {
  EXAMPLE_EPISODE: "example-episode",
  EXAMPLE_SHOW: "example-show",
  EXAMPLE_COMING_SOON_show: "example-coming-soon-show",
  EXAMPLE_CHANNEL: "example-channel",
  EXAMPLE_EPG: "example-epg",
  EXAMPLE_GENRE: "example-genre",
  EXAMPLE_SEASON: "example-season",
  EXAMPLE_MOVIE: "example-movie",
  FUTURE_PROGRAM: "example-future-program",
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
      ...renderDummyMediaGroup(movie),
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
        hqme: true, // make item downloadable
        hqmeExpirationDate: DateTime.local().plus({ hours: 1 }).toMillis(),
        analyticsCustomProperties: {
          showId,
          genre,
          channel,
          seasonNumber,
          episodeNumber,
        },
      },
      ...renderDummyMediaGroup(episode),
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
      ...renderDummyMediaGroup(show),
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
   *       - in: query
   *         name: overrideType
   *         description: Allow to override the screen type to all item entries
   *         schema:
   *           type: string
   *
   *       - in: query
   *         name: overrideCta
   *         description: Allow to override the extensions.cta (Call To Action)  to all item entries
   *         schema:
   *           type: string
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
      entry: items
        .map((item) => {
          return entryRenderers[item.type](item);
        })
        .map((item) => {
          //Overrides
          // Override Type
          if (req.query.overrideType) {
            item.type.value = req.query.overrideType;
          }
          // Override Call To Action
          if (req.query.overrideCta) {
            item.extensions.cta = req.query.overrideCta;
          }
          return item;
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
        value: SCREEN_TYPES.EXAMPLE_EPG,
      },
      next: next && next.toString(),
      entry: items.map((item) => {
        const entryItem = entryRenderers[item.type](
          item,
          timeZoneOffset || "UTC"
        );
        const isLive = entryItem.extensions.isLive;

        if (!isLive) {
          // Remove video from future items and change type to FUTURE_PROGRAM
          entryItem.type = { value: SCREEN_TYPES.FUTURE_PROGRAM };
          delete entryItem.content;
        }
        return entryItem;
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
    const { items, type, id } = mockDb.getCollectionByName({
      name: req.params.collectionName,
    });

    res.json({
      id: id || absoluteReqPath(req),
      title: req.query.feedTitle || req.params.collectionName,
      type: {
        value: type,
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

  // Test Context Keys endpoints
  app.get("/context-keys-test", (req, res) => {
    const { ctx, ...other } = req.query;
    const headers = req.headers;
    let contextKeys = [];
    if (ctx) {
      const parsedContextKeys = parseContext(ctx);
      contextKeys = [
        ...contextKeys,
        ...Object.keys(parsedContextKeys).map((key) => ({
          key,
          value: parsedContextKeys[key],
          type: "ctx",
        })),
      ];
    }
    if (other) {
      contextKeys = [
        ...contextKeys,
        ...Object.keys(other).map((key) => ({
          key,
          value: other[key],
          type: "query",
        })),
      ];
    }
    if (headers) {
      contextKeys = [
        ...contextKeys,
        ...Object.keys(headers).map((key) => ({
          key,
          value: headers[key],
          type: "header",
        })),
      ];
    }

    res.json({
      id: "context-keys-test-feed",
      title: "Context Keys Feed",
      type: {
        value: "feed",
      },
      entry: contextKeys.map(({ type, key, value }) => {
        return {
          id: `${type}--${key}--${value}`,
          title: `${type}: ${key} - ${value}`,
          type: {
            value: "feed",
          },
        };
      }),
    });
  });

  // This endpoint is meant to provide several test items
  // for the download features. It will return m3u8, mp4, etc...
  // accepts an optional "type" query param to get either
  // mp4 or m3u8 streams
  // i.e. /downloads-test?type=mp4
  // all other values will return all entries
  /**
   * @swagger
   * /downloads-test:
   *   get:
   *     description: |
   *        returns a feed of downloadable items
   *
   *     parameters:
   *       - in: query
   *         name: type
   *         description: (optional) type of the streams returned
   *         schema:
   *           type: "string"
   *           enum: [mp4, m3u8]
   *       - in: query
   *         name: testPreload
   *         description: set to true to return a link.href property and no content.src
   *         schema:
   *           type: boolean
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/downloads-test", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { type, testPreload } = req.query;
    const entries = require("./downloadEntries");

    const feedEntries = entries[type] || entries.all;

    const entry = testPreload
      ? createEntriesWithoutStream(feedEntries)
      : feedEntries;

    res.json({
      id: "download-test-feed",
      title: "Downloadable Items",
      type: { value: "feed" },
      entry,
    });
  });

  // This endpoint will return an entry's stream
  /**
   * @swagger
   * /stream/:entry_id:
   *   get:
   *     description: |
   *        returns an entry with a stream for a given id
   *
   *     parameters:
   *       - in: path
   *         name: entry_id
   *         description: id of the entry to return
   *         schema:
   *           type: "string"
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/stream/:entry_id", (req, res) => {
    const { entry_id } = req.params;
    const entries = require("./downloadEntries");

    const entry = entries.all.find((e) => e.id === entry_id) || {};

    res.json(wrapEntryInFeed(entry));
  });

  // This endpoint will return an entry's stream
  /**
   * @swagger
   * /sign/:entry_id:
   *   get:
   *     description: |
   *        simulates the response from a signing service
   *
   *     parameters:
   *       - in: path
   *         name: entry_id
   *         description: id of the entry to return
   *         schema:
   *           type: "string"
   *       - in: query
   *         name: outcome
   *         description: (optional) will trigger a specific response
   *         scheme:
   *           type: "string"
   *           enum: [success, unauthorized, error, unprocessableEntity]
   *
   *     responses:
   *       200:
   *         description: Success
   *
   */
  app.get("/sign/:entry_id", (req, res) => {
    const { entry_id } = req.params;
    const entries = require("./downloadEntries");

    const { outcome } = req.query;

    const entry = entries.all.find((e) => e.id === entry_id);

    if (!entry) {
      res.status(404);
    }

    const status = responseForOutcome(outcome);

    res.status(status);

    if (status === 200) {
      res.setHeader("content-type", "application/vnd.api+json");
      res.json({
        data: {
          type: "video",
          id: 1,
          attributes: {
            stream_src: entry.content.src,
          },
        },
      });
    }

    res.json({ error: new Error(outcome).message });
  });


  app.post("/cloud-events", jsonParser, async (req, res) => {
    try {
      if (req.body.type === 'com.applicaster.video.stopped.v1') {
        db.read();
        await db.get('events').push(req.body).write()

        res.status(201).end();
      }
    } catch (error) {
      console.log(error);

      res.status(500).end();
    }

  })

  app.get("/cloud-events", async (req, res) => {
    const { userId } = req.query;
    db.read();
    const events = db.get('events')
      .filter((event) => {
        try {
          return event.data.userIdentifier === userId
        } catch (error) {
          return false
        }
      }).orderBy(['time'], ['desc'])
      .uniqBy('data.videoId')
      .take(30);

    res.json({
      entry: events.map(event => ({
        id: event.data.videoId,
        extensions: {
          resumeLastUpdate: event.time,
          resumeTime: event.data.secondsFromStart,
          progress: event.data.progress
        }
      }))
    })
  })
};
