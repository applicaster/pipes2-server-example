const _ = require("lodash");

const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);

const totalShows = 30;
const totalMovies = 30;
const totalSeasons = 4;
const episodesPerSeason = 12;

const showPrefix = "show";
const moviePrefix = "movie";
const seasonPrefix = "season";
const episodePrefix = "episode";
const genres = [
  "genre-1",
  "genre-2",
  "genre-3",
  "genre-4",
  "genre-5",
  "genre-6",
  "genre-7",
  "genre-8",
  "genre-9",
  "genre-10",
];
const channels = ["channel-1", "channel-2", "channel-3", "channel-4"];
const sampleHls =
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

const shows = _.times(totalShows).map((index) => {
  const counter = index + 1;
  return {
    id: `${showPrefix}-${counter}`,
    title: `Show ${counter} Title`,
    genre: genres[index % genres.length],
    channel: channels[index % channels.length],
    summary: `This is the summary of show ${counter}. Here will be a short description of the show. You can configure the number of shown lines in the cell style.`,
    type: "show",
  };
});

const movies = _.times(totalMovies).map((index) => {
  const counter = index + 1;
  return {
    id: `${moviePrefix}-${counter}`,
    title: `Movie ${counter} Title`,
    genre: genres[index % genres.length],
    type: "movie",
    summary: `This is the summary of movie ${counter}. Here will be a short description of the show. You can configure the number of shown lines in the cell style.`,
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

const seasons = shows.reduce((acc, show) => {
  return [...acc, ...createShowSeasons(show)];
}, []);

const createSeasonsEpisodes = (season) =>
  _.times(episodesPerSeason).map((index) => {
    const counter = index + 1;
    const SeasonShow = shows.find((item) => item.id === season.showId);

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

const weekHours = 7 * 24 * 2; // 2 is to make sure we have enough future day from current day
const programs = _.times(weekHours * channels.length).map((index) => {
  const channel = channels[index % channels.length];
  counter = index + 1;
  const hoursFromStartOfTheWeek = Math.floor(counter / 4 - 0.1);

  return {
    ..._.shuffle(episodes.filter((episode) => episode.channel === channel))[0],
    airTime: {
      days: Math.floor(hoursFromStartOfTheWeek / 24),
      hours: hoursFromStartOfTheWeek % 24,
    },
  };
});

db.defaults({
  media: _.concat(
    shows,
    movies,
    comingSoonShow,
    seasons,
    episodes,
    channels.map((channelId) => ({ id: channelId, type: "channel" }))
  ),
  programs,
}).write();
