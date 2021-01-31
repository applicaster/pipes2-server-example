const e = require("express");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const { absoluteReqPath, renderDummyMediaGroup } = require("./utils");

const adapter = new FileSync("db.json");
const db = low(adapter);

const SCREEN_TYPES = {
  LIVE: "program", // program is a reserved word - it will open the live player in full screen
  VOD: "video", // video a reserved word - it will open the VOD player in full screen
  COMING_SOON_EPISODE: "example-coming-soon-episode",
  SERIES: "example-series",
};

const renderSeriesEntry = (req) => (series) => {
  const { id, title, category } = series;
  return {
    id,
    title,
    type: { value: SCREEN_TYPES.SERIES },
    extensions: {
      category,
    },
    ...renderDummyMediaGroup,
  };
};

const renderEpisodeEntry = (req) => (episode) => {
  const { id, title, category, duration, streamURL, type } = episode;
  const common = {
    id,
    title,
    extensions: {
      category,
      duration,
    },
    ...renderDummyMediaGroup,
  };
  switch (type) {
    case "now-live":
      return {
        ...common,
        // Will open the live player in full screen
        type: { value: SCREEN_TYPES.LIVE },
        content: {
          src: streamURL,
          type: "video/hls",
        },
      };
    case "vod":
      return {
        ...common,
        type: { value: SCREEN_TYPES.VOD },
        content: {
          src: streamURL,
          type: "video/hls",
        },
      };
    case "coming-soon":
      return {
        ...common,
        type: { value: SCREEN_TYPES.COMING_SOON_EPISODE },
      };
  }
};

module.exports.setup = (app) => {
  /**
   * @swagger
   * /series:
   *   get:
   *     parameters:
   *       - in: query
   *         name: page
   *         description: page number (starts & defaults to 0)
   *     tags: [Series]
   *     description: A paginated list of all available series. (Its recommended to use pagination if you have more than 50 items).
   *     responses:
   *       200:
   *         description: Success
   */
  app.get("/series", (req, res) => {
    const page = req.query.page ? Number(req.query.page) : 0;
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");

    res.json({
      id: absoluteReqPath(req),
      title: "Series",
      entry: db.get("series").map(renderSeriesEntry(req)).value(),
    });
  });

  /**
   * @swagger
   * /series/{seriesId}/seasons/{seasonNumber}/episodes:
   *   get:
   *     parameters:
   *       - in: path
   *         name: seriesId
   *         example: series-1
   *         description: The Series Id
   *       - in: path
   *         name: seasonNumber
   *         example: 2
   *         description: The Season Number
   *     tags: [Series]
   *     description: List episodes by seriesId and season Number - sort by episode number (descending).
   *     responses:
   *       200:
   *         description: Success
   */
  app.get("/series/:seriesId/seasons/:seasonNumber/episodes", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    const { seriesId, seasonNumber } = req.params;
    const season = db
      .get("seasons")
      .find({ seriesId, seasonNumber: Number(seasonNumber) })
      .value();

    res.json({
      id: absoluteReqPath(req),
      title: season.title,
      entry: db
        .get("episodes")
        .filter({ seriesId, seasonNumber: Number(seasonNumber) })
        .orderBy("episodeNumber", "desc")
        .map(renderEpisodeEntry(req))
        .value(),
    });
  });

  /**
   * @swagger
   * /episodes/{episodeId}:
   *   get:
   *     parameters:
   *       - in: path
   *         name: episodeId
   *         example: series-1--series-1--season-1--episode-1
   *         description: The Series Id
   *
   *     tags: [Series]
   *     description: Get an episode entry
   *     responses:
   *       200:
   *         description: Success
   */
  app.get("/episodes/:episodeId", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    const { episodeId } = req.params;
    const episode = db.get("episodes").find({ id: episodeId }).value();
    const series = db.get("series").find({ id: episode.seriesId }).value();

    res.json({
      id: absoluteReqPath(req),
      title: episode.title,
      type: {
        value: "feed",
      },
      extensions: {
        ...renderSeriesEntry(req)(series),
      },
      entry: [renderEpisodeEntry(req)(episode)],
    });
  });
};
