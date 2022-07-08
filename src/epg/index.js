const R = require("ramda");
const { DateTime } = require("luxon");

const {
  channels: channelData,
  CHANNEL_COUNT,
  channelFeed,
  channelEntry
} = require("./channels");

const { programFeed, createProgramData } = require("./programs");
const { clearCache } = require("./programCache");

module.exports.setup = (app) => {
  app.get("/epg_channels", (req, res) => {
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

  app.get("/epg_programs", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { channel } = req.query;
  });
};
