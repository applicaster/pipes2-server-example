const { renderDummyMediaGroup, createIdFactory } = require("./utils");

const createId = createIdFactory();

const createEntry = ({ title, summary, src, hqme = true }) => ({
  id: createId(title),
  title,
  summary,
  type: { value: "video" },
  ...renderDummyMediaGroup({
    id: createId(title),
    title,
    summary,
    src
  }),
  content: {
    src,
    type: "video"
  },
  extensions: {
    hqme
  }
});

const bigBuckBunnyMp4 = createEntry({
  title: "Big Buck Bunny - mp4",
  summary: "This is the big Buck Bunny, mp4 version",
  src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_5MB.mp4"
});

const JellyFishMp4 = createEntry({
  title: "Jelly Fish - mp4",
  summary: "A jelly fish is not a fish. I repeat, a jelly fish is not a fish",
  src: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_5MB.mp4"
});

const SintelMp4 = createEntry({
  title: "Sintel - mp4",
  summary: "A girl has no name, but she has a gargoyle",
  src: "https://test-videos.co.uk/vids/sintel/mp4/av1/1080/Sintel_1080_10s_5MB.mp4"
});

const BigMp4 = createEntry({
  title: "BIG buck bunny mp4",
  summary: "this file is as big as the rabbit",
  src: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_30MB.mp4"
});

const tearsOfSteelM3u8 = createEntry({
  title: "Tears of Steel - m3u8",
  summary: "don't know what this is",
  src: "http://demo.unified-streaming.com/video/tears-of-steel/tears-of-steel.ism/.m3u8"
});

const bigbuckbunnym3u8 = createEntry({
  title: "Big Buck Bunny stream",
  summary: "m3u8 version of big buck bunny - a rabbit goes berserk",
  src: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
});

const sintelm3u8 = createEntry({
  title: "Sintel stream",
  summary: "How much does this cost to Akamai every day ?",
  src: "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
});

const BlipBlopm3u8 = createEntry({
  title: "Blip Blop",
  summary: "Seriously Apple ? is that the best you can provide ?",
  src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/img_bipbop_adv_example_fmp4/master.m3u8"
});

const undownloadableEntry = createEntry({
  hqme: false,
  title: "Can't download",
  summary: "This is a video, but it cannot be downloaded",
  src: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"
});

module.exports = {
  all: [
    bigBuckBunnyMp4,
    JellyFishMp4,
    SintelMp4,
    BigMp4,
    tearsOfSteelM3u8,
    bigbuckbunnym3u8,
    sintelm3u8,
    BlipBlopm3u8,
    undownloadableEntry
  ],
  mp4: [
    bigBuckBunnyMp4,
    JellyFishMp4,
    SintelMp4,
    bigBuckBunnyMp4,
    undownloadableEntry
  ],
  m3u8: [
    tearsOfSteelM3u8,
    bigbuckbunnym3u8,
    sintelm3u8,
    BlipBlopm3u8,
    undownloadableEntry
  ]
};
