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
    const page = req.query.page ? Number(req.query.page) : 0;
    res.json({
      id: "/empty-feed",
      title: "Empty Feed",
      route: absoluteReqBasePath(req),
      entry: [],
    });
  });
};
