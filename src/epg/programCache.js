const md5 = require("md5");

let ProgramCache = {};

function getCacheKey({ channelId, date }) {
  return md5(`${channelId}${date}`);
}

function getCacheDate(date) {
  return date.setZone("utc").startOf("hour").toISO();
}

function addToCache({ channelId, date, programs }) {
  const cacheDate = getCacheDate(date);

  const key = getCacheKey({ channelId, date: cacheDate });

  ProgramCache[key] = {
    channelId,
    date: cacheDate,
    programs
  };
}

function getFromCache({ channelId, date }) {
  const cacheDate = getCacheDate(date);
  const key = getCacheKey({ channelId, date: cacheDate });

  return ProgramCache[key]?.programs;
}

function clearCache() {
  ProgramCache = {};
}

function getAllCache() {
  return ProgramCache;
}

module.exports = { addToCache, getFromCache, clearCache, getAllCache };
