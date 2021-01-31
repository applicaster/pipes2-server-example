const base64url = require("base64url");
const { renderDummyMediaGroup } = require("./utils");

const sampleHls =
  "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8";

module.exports.setup = (app) => {
  /**
   * @swagger
   * /empty-feed:
   *   get:
   *     tags: [Edge-Cases]
   *     description: Example that simulates an empty feed - empty items can be ignored when using in groups
   *     responses:
   *       200:
   *         description: Success
   */
  app.get("/empty-feed", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      id: "/empty-feed",
      title: "Empty Feed",
      entry: [],
    });
  });

  app.get("/with-context/by-platform", (req, res) => {
    /**
   * @swagger
   * /empty-feed:
   *   get:
   *     tags: [Edge-Cases]
   *     description: Example that simulates the use of context keys (platform)
   *     responses:
   *       200:
   *         description: Success
   */

    // To make it work you'll need to declare an endpoint with the `platform` context key.
    const { platform } = JSON.parse(base64url.decode(req.query.ctx));

    const feeds = {
      android: {
        id: "android-item",
        title: "Android Item",
        type: { value: "video" },
        ...renderDummyMediaGroup,
        content: {
          src: sampleHls,
          type: "video/hls",
        },
      },
      iOS: {
        id: "ios-item",
        title: "iOS Item",
        type: { value: "video" },
        ...renderDummyMediaGroup,
        content: {
          src: sampleHls,
          type: "video/hls",
        },
      },
    };

    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      id: "/empty-feed",
      title: "Empty Feed",
      entry: feeds[platform],
    });
  });
};
