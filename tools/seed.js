const _ = require("lodash");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const totalSeries = 10;
const totalSeasons = 4;
const episodesPerSeason = 12;

const seriesPrefix = "series";
const seasonPrefix = "season";
const episodePrefix = "episode";
const genres = ["genre-1", "genre-2", "genre-3"];
const channels = ["channel-1", "channel-2", "channel-3", "channel-4"];
const sampleHls =
  "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8";

const series = _.times(totalSeries).map((index) => {
  const counter = index + 1;
  return {
    id: `${seriesPrefix}-${counter}`,
    title: `Series ${counter}`,
    genre: genres[index % genres.length],
    channel: channels[index % channels.length],
    type: "series",
  };
});

// A Promoted future series
const comingSoonSeries = [
  {
    id: `${seriesPrefix}-${totalSeries + 1}`,
    title: `Series ${totalSeries + 1}`,
    genre: genres[0],
    channel: channels[0],
    type: "series",
    comingSoon: true,
    startsOn: { days: 8, hours: 20 },
  },
];

const createSeriesSeasons = (series) =>
  _.times(totalSeasons).map((index) => {
    const seriesId = series.id;
    const counter = index + 1;

    return {
      id: `${seriesId}--${seasonPrefix}-${counter}`,
      title: `Season ${counter} (${seriesId})`,
      seasonNumber: counter,
      type: "season",
      seriesId,
    };
  });

const seasons = series.reduce((acc, series) => {
  return [...acc, ...createSeriesSeasons(series)];
}, []);

const createSeasonsEpisodes = (season) =>
  _.times(episodesPerSeason).map((index) => {
    const counter = index + 1;
    const SeasonSeries = series.find((item) => item.id === season.seriesId);

    return {
      id: `${season.seriesId}--${season.id}--${episodePrefix}-${counter}`,
      type: "episode",
      title: `E${counter}S${season.seasonNumber} (${season.seriesId})`,
      summary: `E${counter}S${season.seasonNumber} Summary`,
      durationInSeconds: 60 * 60,
      seasonNumber: season.seasonNumber,
      episodeNumber: counter,
      seriesId: season.seriesId,
      genre: SeasonSeries.genre,
      channel: SeasonSeries.channel,
      streamURL: sampleHls,
    };
  });

const addAirTime = (item, index) => {
  item.airTime = { day: 0, hour: 0, minutes };
  return item;
};

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
    series,
    comingSoonSeries,
    seasons,
    episodes,
    channels.map((channelId) => ({ id: channelId, type: "channel" }))
  ),
  programs,
}).write();
