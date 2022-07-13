const R = require("ramda");
const { DateTime } = require("luxon");

const {
  channels: channelData,
  CHANNEL_COUNT,
  channelFeed,
  channelEntry
} = require("./channels");

const { programFeed, createProgramData } = require("./programs");
const { clearCache, getAllCache } = require("./programCache");

module.exports.setup = (app) => {
  /**
   * @swagger
   * /epg/channels:
   *  get:
   *    description: Get all channels
   *
   *    parameters:
   *     - in: query
   *       name: count
   *       description: Number of channels to return
   *       schema:
   *        type: "number"
   *       required: false
   *       default: 10
   *
   *    responses:
   *      200:
   *       description: A feed of channels
   */
  app.get("/epg/channels", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    const host = req.headers.host;
    const scheme = req.secure ? "https" : "http";

    const { count = CHANNEL_COUNT } = req.query;

    const channels = channelData.slice(0, count).map((channel) => {
      return channelEntry({
        ...channel,
        host,
        scheme
      });
    });

    const feed = channelFeed(channels);

    res.json(feed);
  });

  /**
   * @swagger
   * /epg/programs:
   *  get:
   *    description: Get Programs for a given channel
   *
   *    parameters:
   *     - in: query
   *       name: channel
   *       description: channel id for the program
   *       schema:
   *        type: "string"
   *       required: true
   *
   *     - in: query
   *       name: timezone
   *       description: timezone of the client
   *       schema:
   *        type: timezone offset (utc(+|-)x)
   *       required: false
   *       default: "utc"
   *
   *     - in: query
   *       name: start_time
   *       description: start time of the programs
   *       schema:
   *        type: ISO date string
   *       required: false
   *       default: "now"
   *
   *    responses:
   *      200:
   *        description: A list of programs
   */
  app.get("/epg/programs", async (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { channel: channelId, timezone = "utc", start_time } = req.query;

    const startTime = start_time
      ? DateTime.fromISO(start_time)
      : DateTime.now();

    if (!channelId) {
      res.status(402).send("Missing channel id");
    }

    const channel = R.find(R.propEq("id", channelId), channelData);

    const programs = await createProgramData({
      timezone,
      startTime,
      channelId
    });

    const feed = programFeed(programs, {
      channel: channel?.title || "unknown"
    });

    res.json(feed);
  });

  /**
   * @swagger
   * /epg/clear_cache:
   *  get:
   *    description: Clears the server random programs cache
   *  responses:
   *    200:
   *     description: { success: true }
   */
  app.get("/epg/clear_cache", (req, res) => {
    clearCache();
    res.json({ success: true });
  });

  /**
   * @swagger
   * /epg/cache:
   *  get:
   *    description: returns the random program cache
   *  responses:
   *    200:
   *     description: A list of programs cached per date
   */
  app.get("/epg/cache", (req, res) => {
    const cache = getAllCache();
    res.json(cache);
  });
};
