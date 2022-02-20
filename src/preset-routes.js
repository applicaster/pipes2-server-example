const absoluteReqBasePath = process.env.BASE_URL || "http://localhost:3000/";

module.exports.setup = (app) => {
  app.get("/preset-videos", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 3600,
              "genre": "genre-1",
              "label": "Featured",
            },
            "id": "0c46a14e-64bc-4718-b9f1-e25185305e2c",
            "link": {
              "href": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured",
            },
            "id": "165eb159-02ff-4431-83ec-9b32041fab49",
            "link": {
              "href": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured"
            },
            "id": "4c77303f-7d65-43c6-b320-2dbd2ef21aa5",
            "link": {
              "href": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured"
            },
            "id": "6da52985-57dd-40d3-970c-cec268e068ad",
            "link": {
              "href": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured"
            },
            "id": "0869f6bb-cc9b-430b-b61b-98c3887a4f74",
            "link": {
              "href": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {},
        "id": "94de82db-2c7a-4fd9-b6ac-c99202270d59",
        "title": "Header",
        "type": {
          "value": "feed"
        }
      }
    );
  });

  app.get("/preset-hero", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "extensions": {
              "button": "Start Watching",
              "channel": "channel-1",
              "cta": "Start Watching",
              "detailButton": "Watch Now",
              "duration": 2754,
              "genre": "Action & Adventure",
              "label": "Featured",
              "meta": "Action & Adventure · 2021 · PG-13 · 2h 43m",
              "short-summary": "Here will be a short description of the item. You can configure the number of shown lines in the cell style"
            },
            "id": "cb0355d4-1642-4892-a170-16ef41d6cc45",
            "link": {
              "href": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/third-1x1.png`
                  },
                ],
                "type": "image"
              }
            ],
            "summary": "Here will be a short description of the item. You can configure the number of shown lines in the cell style",
            "title": "Hero Title",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {},
        "id": "ae7cb4b8-150e-44cd-ae95-322424cbd748",
        "title": "Home Generic Hero",
        "type": {
          "value": "feed"
        }
      }
    )
  })
}
