const uuid = require("uuid");
const R = require("ramda");
const { DateTime } = require("luxon");
const axios = require("axios");

const { channels: channelData } = require("./channels");
const { getFromCache, addToCache } = require("./programCache");

const defaultProgramImageUrl = "https://via.placeholder.com/640x360";

async function getProgramImage() {
  try {
    const { request } = await axios.get("https://picsum.photos/640/360", {
      timeout: 1000
    });

    return request.res.responseUrl;
  } catch (e) {
    console.warn(e.message);
    return defaultProgramImageUrl;
  }
}

async function randomPrograms({ date } = {}) {
  console.log("building random programs", { date });
  const baseProgramUnitDuration = 30; // minutes

  const startOfDay = date.startOf("hour");
  const endOfDay = startOfDay.plus({ hours: 24 });

  let currentTime = startOfDay;

  const programs = [];

  while (currentTime < endOfDay) {
    const timeLeftInTheDay = endOfDay
      .diff(currentTime, ["minutes"])
      .as("minutes");

    const programSize = Math.floor(Math.random() * 4) + 1;

    const programDuration =
      timeLeftInTheDay < baseProgramUnitDuration * 4
        ? timeLeftInTheDay
        : baseProgramUnitDuration * programSize;

    const img = await getProgramImage();

    const endTime = currentTime.plus({ minutes: programDuration });
    const program = {
      start_time: currentTime,
      end_time: endTime,
      img
    };

    programs.push(program);
    currentTime = endTime;
  }

  return programs;
}

const toReadableDate = (date, timezone) =>
  date.setZone(timezone).toFormat("fff");

async function createProgramData({
  timezone,
  imageKey = "image_base",
  channelId,
  startTime: date
}) {
  const cachedPrograms = getFromCache({ channelId, date });
  const programs = cachedPrograms || (await randomPrograms({ timezone, date }));

  if (!cachedPrograms) {
    addToCache({ channelId, date, programs });
  }

  const channel = R.find(R.propEq("id", channelId), channelData);

  return programs.map(({ start_time, end_time, img }) => {
    return {
      id: uuid.v4(),
      title: "Program Title",
      summary: `This is a program for ${channel.title} from ${toReadableDate(
        start_time,
        timezone
      )} to ${toReadableDate(end_time, timezone)}`,
      type: { value: "epg-program" },
      media_group: [
        {
          type: "image",
          media_item: [
            {
              src: img,
              key: imageKey
            }
          ]
        }
      ],
      extensions: {
        start_time: start_time.setZone(timezone).toISO(),
        end_time: end_time.setZone(timezone).toISO()
      }
    };
  });
}

function programFeed(programs, options) {
  const { channel } = options;

  return {
    id: uuid.v4(),
    title: `Programs for ${channel}`,
    summary: `This is a list of programs for ${channel}`,
    type: { value: "epg-channel-programs" },
    entry: programs
  };
}

module.exports = { createProgramData, programFeed };
