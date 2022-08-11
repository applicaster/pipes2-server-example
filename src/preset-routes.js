const absoluteReqBasePath = process.env.BASE_URL || "http://localhost:3000/";

module.exports.setup = (app) => {
  app.get("/preset-videos", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          extensions: {
            channel: "channel-1",
            cta: "Start Watching",
            duration: 3600,
            genre: "genre-1",
            label: "Featured",
          },
          id: "0c46a14e-64bc-4718-b9f1-e25185305e2c",
          link: {
            href: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images//half-2x3.png`,
                },
                {
                  key: "thumb_2",
                  src: `${absoluteReqBasePath}images/801138132095/third-1x1.png`,
                },
                {
                  key: "v2",
                  src: `${absoluteReqBasePath}images/channel-1.png`,
                },
              ],
              type: "image",
            },
          ],
          summary: "Content Description ",
          title: "Content Title ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          extensions: {
            channel: "channel-1",
            cta: "Start Watching",
            duration: 2754,
            genre: "genre-1",
            label: "Featured",
          },
          id: "165eb159-02ff-4431-83ec-9b32041fab49",
          link: {
            href: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images//half-2x3.png`,
                },
                {
                  key: "thumb_2",
                  src: `${absoluteReqBasePath}images/801138132095/third-1x1.png`,
                },
                {
                  key: "v2",
                  src: `${absoluteReqBasePath}images/channel-1.png`,
                },
              ],
              type: "image",
            },
          ],
          summary: "Content Description ",
          title: "Content Title ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          extensions: {
            channel: "channel-1",
            cta: "Start Watching",
            duration: 2754,
            genre: "genre-1",
            label: "Featured",
          },
          id: "4c77303f-7d65-43c6-b320-2dbd2ef21aa5",
          link: {
            href: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images//half-2x3.png`,
                },
                {
                  key: "thumb_2",
                  src: `${absoluteReqBasePath}images/801138132095/third-1x1.png`,
                },
                {
                  key: "v2",
                  src: `${absoluteReqBasePath}images/channel-1.png`,
                },
              ],
              type: "image",
            },
          ],
          summary: "Content Description ",
          title: "Content Title ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          extensions: {
            channel: "channel-1",
            cta: "Start Watching",
            duration: 2754,
            genre: "genre-1",
            label: "Featured",
          },
          id: "6da52985-57dd-40d3-970c-cec268e068ad",
          link: {
            href: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images//half-2x3.png`,
                },
                {
                  key: "thumb_2",
                  src: `${absoluteReqBasePath}images/801138132095/third-1x1.png`,
                },
                {
                  key: "v2",
                  src: `${absoluteReqBasePath}images/channel-1.png`,
                },
              ],
              type: "image",
            },
          ],
          summary: "Content Description ",
          title: "Content Title ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          extensions: {
            channel: "channel-1",
            cta: "Start Watching",
            duration: 2754,
            genre: "genre-1",
            label: "Featured",
          },
          id: "0869f6bb-cc9b-430b-b61b-98c3887a4f74",
          link: {
            href: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images//half-2x3.png`,
                },
                {
                  key: "thumb_2",
                  src: `${absoluteReqBasePath}images/801138132095/third-1x1.png`,
                },
                {
                  key: "v2",
                  src: `${absoluteReqBasePath}images/channel-1.png`,
                },
              ],
              type: "image",
            },
          ],
          summary: "Content Description ",
          title: "Content Title ",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "94de82db-2c7a-4fd9-b6ac-c99202270d59",
      title: "Header",
      type: {
        value: "feed",
      },
    });
  });

  app.get("/preset-hero", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
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
              "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          },
          id: "cb0355d4-1642-4892-a170-16ef41d6cc45",
          link: {
            href: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/third-1x1.png`,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          title: "Hero Title",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "ae7cb4b8-150e-44cd-ae95-322424cbd748",
      title: "Home Generic Hero",
      type: {
        value: "feed",
      },
    });
  });

  app.get("/preset-dummy-content", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    return res.json({
      entry: [
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
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
              "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
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
                { key: "thumb_1", src: null },
                { key: "thumb_2", src: null },
                { key: "thumb_3", src: null },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          title: "Content Title ",
          type: { value: "video" },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
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
              "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          },
          id: "21229c92-ac9c-41c6-a2ec-a294eb1377f3",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/428578865645/Placeholder.png",
                },
                { key: "thumb_1", src: null },
                { key: "thumb_2", src: null },
                { key: "thumb_3", src: null },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          title: "Content Title ",
          type: { value: "video" },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
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
              "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          },
          id: "8a6afe73-500a-4078-9b33-9f6490e8db8e",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/350334838352/Placeholder.png",
                },
                { key: "thumb_1", src: null },
                { key: "thumb_2", src: null },
                { key: "thumb_3", src: null },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          title: "Content Title ",
          type: { value: "video" },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
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
              "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          },
          id: "5dcf0c60-ccdd-45dc-8a74-a10a33dfcc61",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/178752992976/Placeholder.png",
                },
                { key: "thumb_1", src: null },
                { key: "thumb_2", src: null },
                { key: "thumb_3", src: null },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          title: "Content Title ",
          type: { value: "video" },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
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
              "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          },
          id: "f13bcfb7-d189-4677-8f3c-bfcde03f8500",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/831098733201/Placeholder.png",
                },
                { key: "thumb_1", src: null },
                { key: "thumb_2", src: null },
                { key: "thumb_3", src: null },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          title: "Content Title ",
          type: { value: "video" },
        },
        {
          content: {
            src: "https://devstreaming-cdn.apple.com/videos/streaming/examples/bipbop_16x9/bipbop_16x9_variant.m3u8",
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
              "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
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
                { key: "thumb_1", src: null },
                { key: "thumb_2", src: null },
                { key: "thumb_3", src: null },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
          title: "Content Title ",
          type: { value: "video" },
        },
      ],
      extensions: {},
      id: "72157fb5-a508-46bb-ab93-91c5865e3b69",
      title: "Preset Manual ",
      type: { value: "feed" },
    });
  });
};
