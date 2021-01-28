const _ = require("lodash");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const totalSeries = 20;
const totalSeasons = 8;
const episodesPerSeason = 12;

const seriesPrefix = "series";
const seasonPrefix = "season";
const episodePrefix = "episode";
const categories = ["Drama", "Comedy", "Action"];

const series = _.times(totalSeries).map((index) => {
  const counter = index + 1;
  return {
    id: `${seriesPrefix}-${counter}`,
    title: `Series ${counter}`,
    category: categories[index % categories.length],
  };
});

const createSeriesSeasons = (series) =>
  _.times(totalSeasons).map((index) => {
    const seriesId = series.id;
    const counter = index + 1;

    return {
      id: `${seriesId}--${seasonPrefix}-${counter}`,
      title: `Season ${counter} (Series ${seriesId})`,
      seasonNumber: counter,
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
    let extras = {};
    // create 3 types of episodes - (live now, coming soon, already broadcasted - VODs )
    if (season.seasonNumber == totalSeasons && counter === episodesPerSeason) {
      extras = {
        streamURL: "",
        nowLive: true,
        secondsFromBroadcast: 2 * 60,
      };
    } else if (
      season.seasonNumber == totalSeasons &&
      counter > episodesPerSeason - 3
    ) {
      extras = {
        comingSoon: true,
        secondsToBroadcast: 24 * 60 * 60,
      };
    } else {
      extras = {
        streamURL: "",
        secondsFromBroadcast: 24 * 60 * 60,
      };
    }

    return {
      id: `${season.seriesId}--${season.id}--${episodePrefix}-${counter}`,
      title: `E${counter}S${season.seasonNumber} (Series ${season.seriesId})`,
      summary: `E${counter}S${season.seasonNumber} Summary`,
      duration: 60 * 30,
      seasonNumber: season.seasonNumber,
      episodeNumber: counter,
      seriesId: season.seriesId,
      category: SeasonSeries.category,
      extras,
    };
  });

const episodes = seasons.reduce((acc, season) => {
  return [...acc, ...createSeasonsEpisodes(season)];
}, []);

db.defaults({ series, seasons, episodes }).write();
