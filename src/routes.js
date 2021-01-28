const _ = require("lodash");
const url = require("url");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const itemsPerPage = 50;
const pageLimit = 4;

const absoluteReqPath = (req) => {
  return url.format({
    protocol: req.protocol,
    host: req.get("x-forwarded-host") || req.get("host"),
    pathname: url.parse(req.url).pathname,
  });
};

const absoluteReqBasePath = (req) => {
  return url.format({
    protocol: req.protocol,
    host: req.get("x-forwarded-host") || req.get("host"),
    pathname: "/",
  });
};


const renderDummyMediaGroup = (req) => {
  return {
    media_group: [
      {
        type: "image",
        media_item: [
          {
            // size 1242x699
            src: absoluteReqBasePath(req) + "images/full-16x9.png",
            key: "full-16x9",
          },
          {
            src: absoluteReqBasePath(req) + "images/half-2x3.png",
            key: "half-2x3",
          },
          {
            src: absoluteReqBasePath(req) + "images/third-1x1.png",
            key: "third-1x1",
          },
        ],
      },
    ],
  };
};

const renderSeriesEntry = (req) => (series) => {
  const { id, title, category } = series;
  return {
    id,
    title,
    type: { value: "series" },
    extensions: {
      category,
    },
    ...renderDummyMediaGroup(req),
  };
};

const renderEpisodeEntry = (req) => (series) => {
  const { id, title, category, duration } = series;
  return {
    id,
    title,
    type: { value: "episode" },
    extensions: {
      category,
      duration,
    },
    ...renderDummyMediaGroup(req),
  };
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
   *     description: List episodes by seriesId and season Number - sort by episode number.
   *     responses:
   *       200:
   *         description: Success
   */
  app.get("/series/:seriesId/seasons/:seasonNumber/episodes", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    const { seriesId, seasonNumber } = req.params;
    const series = db.get("series").find({ id: seriesId }).value();
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
   * /empty-feed:
   *   get:
   *     tags: [Utils]
   *     description: Example that simulates an empty feed - empty items can be ignored when using in groups
   *     responses:
   *       200:
   *         description: Success
   */
  app.get("/empty-feed", (req, res) => {
    const page = req.query.page ? Number(req.query.page) : 0;
    res.json({
      id: "/empty-feed",
      title: "Empty Feed",
      route: absoluteReqBasePath(req),
      entry: [],
    });
  });
};
