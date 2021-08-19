const { absoluteReqBasePath } = require("./utils");

const helpAndSupport = () => ({
  entry: [
    {
      content: {
        src: `${absoluteReqBasePath}html/privacy-policy.html`,
        type: "link",
      },
      extensions: {},
      id: "5a2e36b5-b771-4838-a5cf-1cc220ce2ca9",
      link: {
        href: `${absoluteReqBasePath}html/privacy-policy.html`,
        type: "link",
      },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/SettingsImage1.png`,
            },
          ],
          type: "image",
        },
      ],
      title: "Privacy Notice",
      type: { value: "link" },
    },
    {
      content: {
        src: `${absoluteReqBasePath}html/tou.html`,
        type: "link",
      },
      extensions: {},
      id: "de3e9ddd-df11-412c-9e74-75bf5c4b1111",
      link: {
        href: `${absoluteReqBasePath}html/tou.html`,
        type: "link",
      },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/SettingsImage2.png`,
            },
          ],
          type: "image",
        },
      ],
      title: "Terms Of Use",
      type: { value: "link" },
    },
    {
      content: {
        src: `${absoluteReqBasePath}html/help.html`,
        type: "link",
      },
      extensions: {},
      id: "d0f1f2cc-2cfc-41fe-9b6e-d1cce4abcd23",
      link: {
        href: `${absoluteReqBasePath}html/help.html`,
        type: "link",
      },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/SettingsImage3.png`,
            },
          ],
          type: "image",
        },
      ],
      title: "Help",
      type: { value: "link" },
    },
    {
      content: { src: "https://google.com", type: "link" },
      extensions: {},
      id: "021aecd8-970a-45f5-98d7-151f77dbbe3a",
      link: { href: "https://google.com", type: "link" },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/SettingsImage4.png`,
            },
          ],
          type: "image",
        },
      ],
      title: "About",
      type: { value: "link" },
    },
  ],
  extensions: {},
  id: "b5497f2b-ea02-4088-bfe6-ab95312af520",
  title: "Help & Support",
  type: { value: "feed" },
});

const searchMessage = () => ({
  entry: [
    {
      extensions: {
        message1: "Try typing ‘episode’ to show search",
        message2: "results screen",
      },
      id: "eb109ee3-9174-428b-9654-ca0721349fb1",
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/Search-fallback-screen-message.png`,
            },
          ],
          type: "image",
        },
      ],
      title: "Search",
    },
  ],
  extensions: {},
  id: "3dc94149-40d8-4130-85fc-5e6ee918b323",
  title: "Search Message",
  type: { value: "feed" },
});

const searchBoxFeed = () => ({
  entry: [
    {
      extensions: {},
      id: "644a5608-e690-4448-bb9c-161dffe67dbd",
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/search-icon.png`,
            },
          ],
          type: "image",
        },
      ],
      title: "Find something to watch",
      type: { value: "search-screen" },
    },
  ],
  extensions: {},
  id: "961cd726-4b7b-410c-b5c6-94c12f1afec9",
  title: "Search Box Feed",
  type: { value: "feed" },
});

const browseBy = () => ({
  entry: [
    {
      extensions: {},
      id: "039cd5d3-8af0-422f-97c5-6d07afc1e48b",
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/browse-by-movies.png`,
            },
          ],
          type: "image",
        },
      ],
      summary: "Movies",
      title: "Movies",
      type: { value: "type-movies" },
    },
    {
      extensions: {},
      id: "5974cc1d-038f-4932-84c8-ad15c736fb4b",
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/browse-by-shows.png`,
            },
          ],
          type: "image",
        },
      ],
      summary: "Shows",
      title: "Shows",
      type: { value: "type-shows" },
    },
    {
      extensions: {},
      id: "c18d2699-cd14-4584-ae8c-98631054e170",
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/browse-by-channels.png`,
            },
          ],
          type: "image",
        },
      ],
      summary: "Channels",
      title: "Channels",
      type: { value: "type-channels" },
    },
    {
      extensions: {},
      id: "56c204f4-1272-4b10-add9-3a06c6ba3aa1",
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: `${absoluteReqBasePath}images/browse-by-new.png`,
            },
          ],
          type: "image",
        },
      ],
      summary: "New",
      title: "New",
      type: { value: "type-new" },
    },
  ],
  extensions: {},
  id: "c98721d6-ca9c-4b2d-8b7c-849f5bd2a992",
  title: "Browse By",
  type: { value: "feed" },
});

module.exports.miscFeeds = {
  helpAndSupport,
  searchMessage,
  searchBoxFeed,
  browseBy,
};
