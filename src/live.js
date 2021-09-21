const { renderDummyMediaGroup, createIdFactory } = require("./utils");

const createId = createIdFactory();

const createLiveEntry = ({ title, summary, src, liveFlag, type = "video" }) => {
  const id = createId(title);

  return {
    id,
    summary,
    type: { value: type },
    media_group: renderDummyMediaGroup({ id, title, summary, src }),
    content: { src },
    extensions: liveFlag ? { live: true } : {},
  };
};

const getLiveFeed = (options) => {
  const { liveFlag, type } = options || {};

  return {
    id: "live-streams-1",
    title: "live",
    summary: "These are test live streams",
    type: { value: "feed" },
    entry: [
      createLiveEntry({
        title: "Live 1",
        summary: "Live stream with cinema aspect ration",
        src: "https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8",
        liveFlag,
        type,
      }),
      createLiveEntry({
        title: "Live 2",
        summary: "16:9 aspect ratio live stream",
        src: "https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8",
        liveFlag,
        type,
      }),
    ],
  };
};

module.exports = getLiveFeed;
