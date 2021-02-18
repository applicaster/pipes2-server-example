const _ = require("lodash");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const totalShows = 10;
const totalSeasons = 4;
const episodesPerSeason = 12;

const showPrefix = "show";
const seasonPrefix = "season";
const episodePrefix = "episode";
const genres = ["genre-1", "genre-2", "genre-3"];
const channels = ["channel-1", "channel-2", "channel-3", "channel-4"];
const sampleHls =
  "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8";

const show = _.times(totalShows).map((index) => {
  const counter = index + 1;
  return {
    id: `${showPrefix}-${counter}`,
    title: `Show ${counter} Title`,
    genre: genres[index % genres.length],
    channel: channels[index % channels.length],
    type: "show",
  };
});

// A Promoted future show
const comingSoonShow = [
  {
    id: `${showPrefix}-${totalShows + 1}`,
    title: `Show ${totalShows + 1}`,
    genre: genres[0],
    channel: channels[0],
    type: "show",
    comingSoon: true,
    startsOn: { days: 8, hours: 20 },
  },
];

const createShowSeasons = (show) =>
  _.times(totalSeasons).map((index) => {
    const showId = show.id;
    const counter = index + 1;

    return {
      id: `${showId}--${seasonPrefix}-${counter}`,
      title: `Season ${counter} (${showId})`,
      seasonNumber: counter,
      type: "season",
      showId,
    };
  });

const seasons = show.reduce((acc, show) => {
  return [...acc, ...createShowSeasons(show)];
}, []);

const createSeasonsEpisodes = (season) =>
  _.times(episodesPerSeason).map((index) => {
    const counter = index + 1;
    const SeasonShow = show.find((item) => item.id === season.showId);

    return {
      id: `${season.id}--${episodePrefix}-${counter}`,
      type: "episode",
      title: `Episode Title`,
      summary: `S${season.seasonNumber}:E${counter} (${season.showId}) Summary`,
      durationInSeconds: 60 * 60,
      seasonNumber: season.seasonNumber,
      episodeNumber: counter,
      showId: season.showId,
      genre: SeasonShow.genre,
      channel: SeasonShow.channel,
      streamURL: sampleHls,
    };
  });

const episodes = seasons.reduce((acc, season) => {
  return [...acc, ...createSeasonsEpisodes(season)];
}, []);

const weekHours = 7 * 24;
const programs = _.times(weekHours * channels.length).map((index) => {
  const channel = channels[index % channels.length];
  counter = index + 1;
  const hoursFromStartOfTheWeek = Math.floor(counter / 4 - 0.1);
  return {
    ...episodes.filter((episode) => episode.channel === channel)[
      (counter % channels.length) % counter
    ],
    airTime: {
      days: Math.floor(hoursFromStartOfTheWeek / 24),
      hours: hoursFromStartOfTheWeek % 24,
    },
  };
});

db.defaults({
  media: _.concat(
    show,
    comingSoonShow,
    seasons,
    episodes,
    channels.map((channelId) => ({ id: channelId, type: "channel" }))
  ),
  programs,
}).write();
