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

const presetsDataSource = () => ({
  entry: [
    {
      content: {
        src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        type: "video/hls",
      },
      extensions: {
        button: "Start Watching",
        channel: "channel-1",
        cta: "Start Watching",
        detailButton: "Watch Now",
        duration: 2754,
        genre: "Action & Adventure",
        label: "Featured",
        meta: "Action & Adventure · 2021 · PG-13 · 2h 43m",
        "short-summary":
          "Here will be a short description of the item. You can control the number of shown lines.",
      },
      id: "b8d71b1e-6c23-44de-9c58-db9dea48cfc6",
      link: { href: "", type: "link" },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/102901409101/Placeholder.png",
            },
            {
              key: "2x3",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/448903777968/half-2x3.png",
            },
            {
              key: "1x1_small",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/440783898408/channel-1.png",
            },
            { key: "1x1_big", src: null },
          ],
          type: "image",
        },
      ],
      summary:
        "Here will be a short description of the item. You can control the number of shown lines.",
      title: "Content Title ",
      type: { value: "video" },
    },
    {
      content: {
        src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        type: "video/hls",
      },
      extensions: {
        button: "Start Watching",
        channel: "channel-2",
        cta: "Start Watching",
        detailButton: "Watch Now",
        duration: 1000,
        genre: "Comedy",
        label: "LIVE",
        meta: "Comedy · 2022 · 1h 43m",
        "short-summary":
          "Here will be a short description of the item. You can control the number of shown lines.",
      },
      id: "21229c92-ac9c-41c6-a2ec-a294eb1377f3",
      link: { href: "", type: "link" },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/428578865645/Placeholder.png",
            },
            {
              key: "2x3",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/873467592235/half-2x3.png",
            },
            {
              key: "1x1_small",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/763346227490/channel-1.png",
            },
            { key: "1x1_big", src: null },
          ],
          type: "image",
        },
      ],
      summary:
        "Here will be a short description of the item. You can control the number of shown lines.",
      title: "Content Title ",
      type: { value: "video" },
    },
    {
      content: {
        src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        type: "video/hls",
      },
      extensions: {
        button: "Start Watching",
        channel: "channel-1",
        cta: "Start Watching",
        detailButton: "Watch Now",
        duration: 5739,
        genre: "Horror",
        label: "Featured",
        meta: "Horror · 2021 · PG-13 · 1h 28m",
        "short-summary":
          "Here will be a short description of the item. You can control the number of shown lines.",
      },
      id: "8a6afe73-500a-4078-9b33-9f6490e8db8e",
      link: { href: "", type: "link" },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/350334838352/Placeholder.png",
            },
            {
              key: "2x3",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/739269220960/half-2x3.png",
            },
            {
              key: "1x1_small",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/350504311148/channel-1.png",
            },
            { key: "1x1_big", src: null },
          ],
          type: "image",
        },
      ],
      summary:
        "Here will be a short description of the item. You can control the number of shown lines.",
      title: "Content Title ",
      type: { value: "video" },
    },
    {
      content: {
        src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        type: "video/hls",
      },
      extensions: {
        button: "Start Watching",
        channel: "channel-1",
        cta: "Start Watching",
        detailButton: "Watch Now",
        duration: 304,
        genre: "Action & Adventure",
        label: "Featured",
        meta: "Action & Adventure · 2021 · PG-13 · 2h 43m",
        "short-summary":
          "Here will be a short description of the item. You can control the number of shown lines.",
      },
      id: "5dcf0c60-ccdd-45dc-8a74-a10a33dfcc61",
      link: { href: "", type: "link" },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/178752992976/Placeholder.png",
            },
            {
              key: "2x3",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/681638898057/half-2x3.png",
            },
            {
              key: "1x1_small",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/626044605983/channel-1.png",
            },
            { key: "1x1_big", src: null },
          ],
          type: "image",
        },
      ],
      summary:
        "Here will be a short description of the item. You can control the number of shown lines.",
      title: "Content Title ",
      type: { value: "video" },
    },
    {
      content: {
        src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        type: "video/hls",
      },
      extensions: {
        button: "Start Watching",
        channel: "channel-1",
        cta: "Start Watching",
        detailButton: "Watch Now",
        duration: 2754,
        genre: "Action & Adventure",
        label: "Featured",
        meta: "Action & Adventure · 2021 · PG-13 · 2h 43m",
        "short-summary":
          "Here will be a short description of the item. You can control the number of shown lines.",
      },
      id: "f13bcfb7-d189-4677-8f3c-bfcde03f8500",
      link: { href: "", type: "link" },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/831098733201/Placeholder.png",
            },
            {
              key: "2x3",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/911790823172/half-2x3.png",
            },
            {
              key: "1x1_small",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/767577145587/channel-1.png",
            },
            { key: "1x1_big", src: null },
          ],
          type: "image",
        },
      ],
      summary:
        "Here will be a short description of the item. You can control the number of shown lines.",
      title: "Content Title ",
      type: { value: "video" },
    },
    {
      content: {
        src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
        type: "video/hls",
      },
      extensions: {
        button: "Start Watching",
        channel: "channel-1",
        cta: "Start Watching",
        detailButton: "Watch Now",
        duration: 2754,
        genre: "Action & Adventure",
        label: "Featured",
        meta: "Action & Adventure · 2021 · PG-13 · 2h 43m",
        "short-summary":
          "Here will be a short description of the item. You can control the number of shown lines.",
      },
      id: "b28f7e51-b5c4-4f6c-a752-e0ff92395227",
      link: { href: "", type: "link" },
      media_group: [
        {
          media_item: [
            {
              key: "image_base",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/189252903142/Placeholder.png",
            },
            {
              key: "2x3",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/780981990425/half-2x3.png",
            },
            {
              key: "1x1_small",
              src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/897177496264/channel-1.png",
            },
            { key: "1x1_big", src: null },
          ],
          type: "image",
        },
      ],
      summary:
        "Here will be a short description of the item. You can control the number of shown lines.",
      title: "Content Title ",
      type: { value: "video" },
    },
  ],
  extensions: {},
  id: "72157fb5-a508-46bb-ab93-91c5865e3b69",
  title: "Preset Manual ",
  type: { value: "feed" },
});

module.exports.miscFeeds = {
  helpAndSupport,
  searchMessage,
  searchBoxFeed,
  browseBy,
};
