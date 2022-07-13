const path = require("path");
const fs = require("fs");
const R = require("ramda");
const md5 = require("md5");

const toTitleCase = R.replace(/(^.|(?<=\s).)/g, R.toUpper);
const channelFolder = path.resolve(__dirname, "../../public/images/channels");
const images = fs.readdirSync(channelFolder);

const channelsData = [
  {
    title: "ABC",
    img: "images/channels/abc-us.png",
    genre: "General",
    description: "This is ABC",
    featured: false
  },
  {
    title: "Arte",
    img: "images/channels/arte-de.png",
    genre: "Documentary",
    description: "Franco-German documentary channel",
    feature: false
  },
  {
    title: "BBC 1",
    img: "images/channels/bbc-one-uk.png",
    genre: "News",
    description: "BRITAANIAAAAA",
    featured: false
  },
  {
    title: "C-Span",
    img: "images/channels/c-span-1-us.png",
    genre: "official",
    description: "This is C-Span",
    featured: false
  },
  {
    title: "Canal+",
    img: "images/channels/canal-plus-fr.png",
    genre: "General",
    description: "France's first paid TV channel",
    featured: false
  },
  {
    title: "CBN",
    img: "images/channels/cbn-us.png",
    genre: "General",
    description: "This is CBN",
    featured: false
  },
  {
    title: "Channel 4",
    img: "images/channels/channel-4-uk.png",
    genre: "General",
    description: "UK's channel 4",
    featured: false
  },
  {
    title: "Clip My Horse",
    img: "images/channels/clip-my-horse-tv-de.png",
    genre: "Sports",
    description: "Horses",
    featured: false
  },
  {
    title: "Discovery UK",
    img: "images/channels/discovery-channel-uk.png",
    genre: "Documentary",
    description: "This is Discovery Channel UK",
    featured: false
  },
  {
    title: "Discovery US",
    img: "images/channels/discovery-channel-us.png",
    genre: "Documentary",
    description: "This is Discovery Channel US",
    featured: false
  },
  {
    title: "Disney Channel DE",
    img: "images/channels/disney-channel-de.png",
    genre: "Kids",
    description: "This is Disney Channel DE",
    featured: false
  },
  {
    title: "Disney Channel US",
    img: "images/channels/disney-channel-us.png",
    genre: "Kids",
    description: "This is Disney Channel US",
    featured: false
  }
];

const getChannelGenre = (img) =>
  R.find(R.propEq("img", `images/channels/${img}`), channelsData);

const channels = images.map((img) => {
  const channelParts = R.compose(R.split("-"), R.replace(".png", ""))(img);
  const country = R.compose(R.toUpper, R.last)(channelParts);
  const channel = R.compose(toTitleCase, R.join(" "), R.init)(channelParts);

  return {
    id: md5(channel),
    title: channel,
    img: `images/channels/${img}`,
    description: `This is ${channel} ${country}`,
    featured: false,
    genre: getChannelGenre(img)?.genre || "General"
  };
});

const CHANNEL_COUNT = 10;

function channelEntry(props) {
  const {
    type = "epg-channel",
    title,
    img,
    imageKey = "image_base",
    scheme,
    host,
    description,
    featured,
    genre,
    id
  } = props;

  return {
    id,
    type: {
      value: type
    },
    title,
    summary: description,
    media_group: [
      {
        type: "image",
        media_item: [
          {
            src: `${scheme}://${host}/${img}`,
            key: imageKey
          }
        ]
      }
    ],
    extensions: {
      genre,
      featured,
      channel_id: id
    }
  };
}

function channelFeed(channels, options) {
  const type = options?.type || "epg-channels";
  return {
    id: "channels",
    type: {
      value: type
    },
    entry: channels
  };
}

module.exports = { channels, channelFeed, channelEntry, CHANNEL_COUNT };
