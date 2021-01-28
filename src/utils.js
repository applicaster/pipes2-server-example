const _ = require("lodash");
const url = require("url");
const path = require("path");

const absoluteReqBasePath = process.env.BASE_URL || "http://localhost:3000/";
const absoluteReqPath = (req) => {
  return path.join(absoluteReqBasePath, url.parse(req.url).pathname);
};

const renderDummyMediaGroup = {
  media_group: [
    {
      type: "image",
      media_item: [
        {
          // size 1242x699
          src: path.join(absoluteReqBasePath, "images/full-16x9.png"),
          key: "full-16x9",
        },
        {
          src: path.join(absoluteReqBasePath, "images/half-2x3.png"),
          key: "half-2x3",
        },
        {
          src: path.join(absoluteReqBasePath, "images/third-1x1.png"),
          key: "third-1x1",
        },
      ],
    },
  ],
};

module.exports.absoluteReqPath = absoluteReqPath;
module.exports.absoluteReqBasePath = absoluteReqBasePath;
module.exports.renderDummyMediaGroup = renderDummyMediaGroup;
