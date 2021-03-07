const path = require("path");

const absoluteReqBasePath = process.env.BASE_URL || "http://localhost:3000/";

const absoluteReqPath = (req) => {
  return req.protocol + "://" + req.get("host") + req.originalUrl;
};

const renderDummyMediaGroup = (item) => {
  let channelImages = { media_group: [{ media_item: [] }] };
  if (item.channel) {
    channelImages = renderChannelMediaGroupById(item.channel);
  }
  return {
    media_group: [
      {
        type: "image",
        media_item: [
          {
            // size 1242x699
            src: `${absoluteReqBasePath}images/full-16x9.png`,
            key: "full-16x9",
          },
          {
            src: `${absoluteReqBasePath}images/half-2x3.png"`,
            key: "half-2x3",
          },
          {
            src: `${absoluteReqBasePath}images/third-1x1.png`,
            key: "third-1x1",
          },
          ...channelImages.media_group[0].media_item,
        ],
      },
    ],
  };
};

const renderChannelMediaGroupById = (id) => {
  return {
    media_group: [
      {
        type: "image",
        media_item: [
          {
            src: `${absoluteReqBasePath}images/${id}.png`,
            key: "v1",
          },
          {
            src: `${absoluteReqBasePath}images/${id}-V2.png`,
            key: "v2",
          },
        ],
      },
    ],
  };
};

module.exports.absoluteReqPath = absoluteReqPath;
module.exports.absoluteReqBasePath = absoluteReqBasePath;
module.exports.renderDummyMediaGroup = renderDummyMediaGroup;
module.exports.renderChannelMediaGroupById = renderChannelMediaGroupById;
