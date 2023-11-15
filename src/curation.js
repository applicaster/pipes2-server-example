const { absoluteReqBasePath } = require("./utils");

module.exports.setup = (app) => {
  app.get("/curation-simple", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          preset_name: "curation-simple-1",
          feed_url: `${absoluteReqBasePath}media?byType=show`,
        },
        {
          preset_name: "curation-simple-2",
          feed_url: `${absoluteReqBasePath}media?byType=show`,
        },
      ],
    });
  });
};
