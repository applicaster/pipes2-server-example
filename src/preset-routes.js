const absoluteReqBasePath = process.env.BASE_URL || "http://localhost:3000/";

module.exports.setup = (app) => {
  app.get("/preset-videos", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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

  app.get("/movies-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      
        "entry": [
    {
      "content": {
        "src": "https://cdn.jwplayer.com/manifests/OlxxnbPS.m3u8",
        "type": "video/hls"
      },
      "extensions": {
        "cta": "Watch Now",
        "meta": "2023, Documentry, 1 25h",
        "preview_playback": "https://cdn.jwplayer.com/manifests/irUUQk6r.m3u8",
        "trailer_feed_url": "https://assets-production.applicaster.com/zapp/assets/accounts/617fe94bd22a630012a76496/static_feeds/feed-be21c659-072e-415d-819c-dc6d45f1de1c.json"
      },
      "id": "8a7a561a-46c8-4422-b191-4583f2eb8538",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/25839406382/DJ_16_9.png"
            },
            {
              "key": "thumb_2",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/419050399152/echo-unleashed-logo.png"
            },
            {
              "key": "2x3",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/198199790272/Screenshot2024-05-30at9.20.53.png"
            },
            {
              "key": "thumb_1",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/687137140365/ScreenShot2024-03-04at10.56.31.png"
            }
          ],
          "type": "image"
        }
      ],
      "summary": "A gripping documentary. Chronicles the DJ's relentless rehearsals leading to his monumental concerts, where beats, passion, and resilience collide.",
      "title": "Echo Unleashed",
      "type": {
        "value": "video"
      }
    },
    {
      "content": {
        "src": "https://cdn.jwplayer.com/manifests/FB721H0y.m3u8",
        "type": "video/hls"
      },
      "extensions": {
        "cta": "Watch Now",
        "meta": "2023, Sci-Fi, 2 23h",
        "preview_playback": "https://cdn.jwplayer.com/manifests/vBr1LaW6.m3u8",
        "trailer_feed_url": "https://assets-production.applicaster.com/zapp/assets/accounts/617fe94bd22a630012a76496/static_feeds/feed-be21c659-072e-415d-819c-dc6d45f1de1c.json"
      },
      "id": "174fc0d0-d45e-4f5c-8735-b5d445740f1e",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/713531357910/Mars_16_9.png"
            },
            {
              "key": "thumb_2",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/277569792960/desert-horizons-logo.png"
            },
            {
              "key": "thumb_1",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/571911012067/ScreenShot2024-03-04at10.58.14.png"
            },
            {
              "key": "2x3",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/306266826341/nars2_3.png"
            }
          ],
          "type": "image"
        }
      ],
      "summary": "A space mission veers off course, stranding astronauts in a shifting desert-like dimension. As they confront bizarre challenges and unearth long-buried secrets, the crew must find a way to escape the relentless grasp of the enigmatic desert planet.",
      "title": "Deserted Horizons",
      "type": {
        "value": "video"
      }
    },
    {
      "content": {
        "src": "https://cdn.jwplayer.com/manifests/JbeW2HcE.m3u8",
        "type": "video/hls"
      },
      "extensions": {
        "cta": "Watch Now",
        "meta": "1999, Action, 1 25h",
        "preview_playback": "https://cdn.jwplayer.com/manifests/BMSHEjT6.m3u8"
      },
      "id": "5f5917c2-851d-4387-819a-d68a04852c07",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/526241143176/Chase_16_9.png"
            },
            {
              "key": "thumb_2",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/716753203518/brothers-in-blue-logo.png"
            },
            {
              "key": "2x3",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/459866612537/Chase_9_16.png"
            },
            {
              "key": "thumb_1",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/521263089470/ScreenShot2024-03-04at10.55.21.png"
            }
          ],
          "type": "image"
        }
      ],
      "summary": "In gritty 1970s New York, Detectives Jack Malone and Mike Turner, once inseparable, face off in a high-stakes battle that tests loyalty, justice, and the thin blue line",
      "title": "Brothers In Blue",
      "type": {
        "value": "video"
      }
    },
    {
      "content": {
        "src": "https://cdn.jwplayer.com/manifests/AZGsj45U.m3u8",
        "type": "video/hls"
      },
      "extensions": {
        "cta": "Watch Now",
        "meta": "2023, Drama, 1 25h",
        "preview_playback": "https://cdn.jwplayer.com/manifests/UfAY13hg.m3u8"
      },
      "id": "ee084397-6cdf-4cc0-9f51-df25f3ec2ae0",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/440846831104/Trip_16_9.png"
            },
            {
              "key": "thumb_2",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/270248686405/threads-of-time-logo.png"
            },
            {
              "key": "2x3",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/379589361580/trip2_3.png"
            },
            {
              "key": "thumb_1",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/464935691600/ScreenShot2024-03-04at10.50.20.png"
            }
          ],
          "type": "image"
        }
      ],
      "summary": "A poignant drama tracing the evolving lives and enduring bonds of three friends over three transformative decades.",
      "title": "Threads of Time",
      "type": {
        "value": "video"
      }
    },
    {
      "content": {
        "src": "https://cdn.jwplayer.com/manifests/oNdJl9QJ.m3u8",
        "type": "video/hls"
      },
      "extensions": {
        "cta": "Watch Now",
        "meta": "2023, Drama, 1 15h",
        "preview_playback": "https://cdn.jwplayer.com/manifests/o0FuVb6H.m3u8",
        "trailer_feed_url": "https://assets-production.applicaster.com/zapp/assets/accounts/617fe94bd22a630012a76496/static_feeds/feed-be21c659-072e-415d-819c-dc6d45f1de1c.json"
      },
      "id": "099fbc1f-8aba-40af-a087-c87fe4ee79c8",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/126258133287/Underwater_16_9.png"
            },
            {
              "key": "thumb_2",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/284470411311/ephemeral-embrace-logo.png"
            },
            {
              "key": "2x3",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/938039073676/underwater2_3.png"
            },
            {
              "key": "thumb_1",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/766363513268/ScreenShot2024-03-04at10.58.51.png"
            }
          ],
          "type": "image"
        }
      ],
      "summary": "In a poetic dance between reality and fantasy, \"Ephemeral Embrace\" explores the bittersweet love of two souls destined to be together, yet forever kept apart.",
      "title": "Ephemeral Embrace",
      "type": {
        "value": "video"
      }
    }
  ],
  "extensions": {
    
  },
  "id": "4fe70406-62d3-4220-bae3-875dc0f16e4b",
  "title": "Movies Presets (origin) ",
  "type": {
    "value": "feed",
      },
    });
  });

  app.get("/search-filters-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      
        "entry": [
    {
      "extensions": {
        "filterTag": "all"
      },
      "id": "460c5cd5-d205-41b0-a2dd-ca94a6194f11",
      "title": "All",
      "type": {
        "value": "filter-search"
      }
    },
    {
      "extensions": {
        "filterTag": "video"
      },
      "id": "44bb8ad2-5936-4e43-9ea1-06d7421e17f5",
      "title": "Videos",
      "type": {
        "value": "filter-search"
      }
    },
    {
      "extensions": {
        "filterTag": "episodes"
      },
      "id": "eb8033f2-6b39-4a32-accc-f30c31c42e2b",
      "title": "Episodes",
      "type": {
        "value": "filter-search"
      }
    }
  ],
  "extensions": {
    
  },
  "id": "814ee4a7-e893-47eb-9612-8c10b1375a98",
  "title": "Search Filters (Preset)",
  "type": {
    "value": "feed",
      },
    });
  });

  app.get("/404-error", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      "entry": [
        {
          "extensions": {
            
          },
          "id": "a16469fa-e6f5-4a28-b72a-bd163827306d",
          "title": "Back To Home",
          "type": {
            "value": "home"
          }
        }
      ],
      "extensions": {
        
      },
      "id": "7f9197c7-4ec7-4377-a248-0a341d2dc1ae",
      "title": "404 Back to home",
      "type": {
        "value": "feed",
      },
    });
  });

  app.get("/preference-selector-1", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      "entry": [
        {
          "extensions": {
            
          },
          "id": "f406c674-83a3-45ae-91ca-8d4375f02d08",
          "summary": "Select your favorite genres from the list below",
          "title": "Choose A Genre",
          "type": {
            "value": "video"
          }
        },
        {
          "extensions": {
            "tag": "comedy"
          },
          "id": "4f2069e3-449a-4385-b04c-372a53c8beca",
          "media_group": [
            {
              "media_item": [
                {
                  "key": "image_base",
                  "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/39455933103/Rectangle3.png"
                },
                {
                  "key": "thumb_1",
                  "src": null
                },
                {
                  "key": "thumb_2",
                  "src": null
                },
                {
                  "key": "thumb_3",
                  "src": null
                }
              ],
              "type": "image"
            }
          ],
          "title": "Comedy",
          "type": {
            "value": "action"
          }
        },
        {
          "extensions": {
            "tag": "horror"
          },
          "id": "05193c74-197b-4bad-b4ac-619fc34a10b8",
          "media_group": [
            {
              "media_item": [
                {
                  "key": "image_base",
                  "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/341562002376/Rectangle3.png"
                },
                {
                  "key": "thumb_1",
                  "src": null
                },
                {
                  "key": "thumb_2",
                  "src": null
                },
                {
                  "key": "thumb_3",
                  "src": null
                }
              ],
              "type": "image"
            }
          ],
          "title": "Horror",
          "type": {
            "value": "action"
          }
        },
        {
          "extensions": {
            "tag": "action"
          },
          "id": "43b3eb9e-9c1b-4e7a-99b1-aecba22fed58",
          "media_group": [
            {
              "media_item": [
                {
                  "key": "image_base",
                  "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/160776073233/Rectangle3.png"
                },
                {
                  "key": "thumb_1",
                  "src": null
                },
                {
                  "key": "thumb_2",
                  "src": null
                },
                {
                  "key": "thumb_3",
                  "src": null
                }
              ],
              "type": "image"
            }
          ],
          "title": "Action",
          "type": {
            "value": "action"
          }
        },
        {
          "extensions": {
            "tag": "drama"
          },
          "id": "0ba2b5bd-f86f-412d-a1ee-455865025c65",
          "media_group": [
            {
              "media_item": [
                {
                  "key": "image_base",
                  "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/967792217433/Rectangle3.png"
                },
                {
                  "key": "thumb_1",
                  "src": null
                },
                {
                  "key": "thumb_2",
                  "src": null
                },
                {
                  "key": "thumb_3",
                  "src": null
                }
              ],
              "type": "image"
            }
          ],
          "title": "Drama",
          "type": {
            "value": "action"
          }
        }
      ],
      "extensions": {
        "behavior": {
          "current_selection": "@{ctx/user_preferences.genre}",
          "select_mode": "multi"
        },
        "preference_editor_options": {
          "key": "user_preferences.genre"
        },
        "role": "preference_editor"
      },
      "id": "e43262df-ece0-4ede-8e27-603dd35f11a0",
      "title": "Preference Selector - Choose a Genre ",
      "type": {
        "value": "feed",
      },
    });
  });

  app.get("/preference-selector-2", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      "entry": [
        {
          "extensions": {
            
          },
          "id": "cd2a8967-1477-47b5-b6c3-0e524c2c8d85",
          "summary": "Select your zone for relevant news updates",
          "title": "News That Matters to You",
          "type": {
            "value": "video"
          }
        },
        {
          "extensions": {
            "tag": "us"
          },
          "id": "a7537941-ba3c-43f4-afc3-bcb7566b13b0",
          "title": "US",
          "type": {
            "value": "action"
          }
        },
        {
          "extensions": {
            "tag": "asia"
          },
          "id": "add66255-9eaa-49af-90a9-148152bb80bf",
          "title": "Asia",
          "type": {
            "value": "action"
          }
        },
        {
          "extensions": {
            "tag": "eu"
          },
          "id": "82709fee-1187-439a-8524-6f290d41a1a3",
          "title": "Europe",
          "type": {
            "value": "action"
          }
        },
        {
          "extensions": {
            "tag": "au"
          },
          "id": "4bd92b7e-3834-4d80-85b9-9e3a3cfdd4ef",
          "title": "Australia",
          "type": {
            "value": "action"
          }
        }
      ],
      "extensions": {
        "behavior": {
          "current_selection": "@{ctx/user_preferences.region}",
          "select_mode": "multi"
        },
        "preference_editor_options": {
          "key": "user_preferences.region"
        },
        "role": "preference_editor"
      },
      "id": "4cce74b5-3839-40cb-bc5e-47470a4bd6c4",
      "title": "Preference Selector - Region ",
      "type": {
        "value": "feed",
      },
    });
  });

  app.get("/mobile-top-component-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      
        "entry": [
          {
            "content": {
              "src": "https://cdn.jwplayer.com/manifests/FB721H0y.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              "cta": "Start Watching",
              "genre": "Action",
              "meta": "2023, Sci-Fi, 2 23h",
              "preview_playback": "https://cdn.jwplayer.com/manifests/vBr1LaW6.m3u8",
              "trailer_feed_url": "https://assets-production.applicaster.com/zapp/assets/accounts/617fe94bd22a630012a76496/static_feeds/feed-be21c659-072e-415d-819c-dc6d45f1de1c.json"
            },
            "id": "0e8c23bf-76eb-4f21-8cae-d59bf44495a5",
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/66526082841/Mars_16_9.png"
                  },
                  {
                    "key": "thumb_2",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/668730228878/desert-horizons-logo.png"
                  },
                  {
                    "key": "thumb_1",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "A space mission veers off course, stranding astronauts in a shifting desert-like dimension. ",
            "title": "Deserted Horizons",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://cdn.jwplayer.com/manifests/FB721H0y.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              "bg-color": "rgba(254,20,72,1)",
              "bg-color-focus": "rgba(190,14,43,1)"
            },
            "id": "638711a0-db6f-47d3-b156-70ccb33363ca",
            "title": "Play",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://cdn.jwplayer.com/manifests/vBr1LaW6.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              "bg-color": "rgba(46,46,46,1)",
              "bg-color-focus": "rgba(30,30,30,1)"
            },
            "id": "a29390f9-45e8-40c7-8986-96e69a3fba95",
            "title": "Watch Trailer",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "0a0651f6-dc8e-4726-85eb-158193c64317",
        "title": "Mobile Top Component Preset",
        "type": {
          "value": "feed",
      },
    });
  });

  app.get("/preset-audio", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
    {
      "content": {
        "src": "https://onlinetestcase.com/wp-content/uploads/2023/06/500-KB-MP3.mp3",
        "type": "audio"
      },
      "extensions": {
        "artist": "Artist"
      },
      "id": "91cd86fb-70eb-4021-a693-a4114915b8ab",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/518666839512/unnamed.png"
            },
            {
              "key": "thumb_1",
              "src": null
            },
            {
              "key": "thumb_2",
              "src": null
            },
            {
              "key": "thumb_3",
              "src": null
            }
          ],
          "type": "image"
        }
      ],
      "summary": "Here will be a short description of the movie. You can configure the number of displayed lines in the cell style.",
      "title": "Song 1",
      "type": {
        "value": "audio"
      }
    },
    {
      "content": {
        "src": "https://onlinetestcase.com/wp-content/uploads/2023/06/500-KB-MP3.mp3",
        "type": "audio"
      },
      "extensions": {
        "artist": "Artist"
      },
      "id": "fa1bbc81-1634-498a-8ecf-62425071eaab",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/145963896924/unnamed.png"
            },
            {
              "key": "thumb_1",
              "src": null
            },
            {
              "key": "thumb_2",
              "src": null
            },
            {
              "key": "thumb_3",
              "src": null
            }
          ],
          "type": "image"
        }
      ],
      "summary": "Here will be a short description of the movie. You can configure the number of displayed lines in the cell style.",
      "title": "Song 2",
      "type": {
        "value": "audio"
      }
    },
    {
      "content": {
        "src": "https://onlinetestcase.com/wp-content/uploads/2023/06/500-KB-MP3.mp3",
        "type": "audio"
      },
      "extensions": {
        "artist": "Artist"
      },
      "id": "262082e9-4a49-4853-8750-ae403d8f6c0a",
      "media_group": [
        {
          "media_item": [
            {
              "key": "image_base",
              "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/306499473715/unnamed.png"
            },
            {
              "key": "thumb_1",
              "src": null
            },
            {
              "key": "thumb_2",
              "src": null
            },
            {
              "key": "thumb_3",
              "src": null
            }
          ],
          "type": "image"
        }
      ],
      "summary": "Here will be a short description of the movie. You can configure the number of displayed lines in the cell style.",
      "title": "Song 3",
      "type": {
        "value": "audio"
      }
    }
  ],
  "extensions": {
    "artist": "Artist"
  },
  "id": "b4dd77e7-f413-4721-bfe4-2c1b7e9cc435",
  "title": "Title Header",
  "type": {
    "value": "feed",
      },
    });
  });

  app.get("/preset-gallery-1", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "1e707bb4-1d1e-42c4-9f95-cc2cc2b8d4f1",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 1",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },

        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "0ae1c2dd-bd34-4899-b839-e95ac3aeb420",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 2",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },

        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "ac20535f-1391-4d48-823a-188487d2ef17",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 3",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "28f043d2-fae0-4206-8366-5563d82f2b4a",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 4",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "a33ebe73-753c-4034-9146-546e44a7ee6c",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 5",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "654a2782-ae74-4e7c-90f2-cb8d587266a4",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 6",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "4f346cca-f474-426d-b84c-80f05598bc60",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 7",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "76449f52-1580-4db5-ae94-074bbe49dd3a",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 8",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "bdbc8860-7a3d-48b6-85e2-c526bb7eb19b",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 9",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "d559ac03-a6a9-45fb-bc94-1d31fe908a9b",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Movie 10",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "818efd49-1650-4ae5-9dce-ee7d1af0a958",
      title: "Gallery Preset 1",
      type: {
        value: "feed",
      },
    });
  });

  app.get("/preset-gallery-2", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "1e707bb4-1d1e-42c4-9f95-cc2cc2b8d4f1",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 1",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "0ae1c2dd-bd34-4899-b839-e95ac3aeb420",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 2",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "ac20535f-1391-4d48-823a-188487d2ef17",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 3",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "28f043d2-fae0-4206-8366-5563d82f2b4a",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 4",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "a33ebe73-753c-4034-9146-546e44a7ee6c",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 5",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "654a2782-ae74-4e7c-90f2-cb8d587266a4",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 6",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "4f346cca-f474-426d-b84c-80f05598bc60",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 7",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "76449f52-1580-4db5-ae94-074bbe49dd3a",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 8",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Action & Adventure  ·  2023",
          },
          id: "bdbc8860-7a3d-48b6-85e2-c526bb7eb19b",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 9",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            meta: "Comedy  ·  2023",
          },
          id: "d559ac03-a6a9-45fb-bc94-1d31fe908a9b",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          title: "Name of the Show 10",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "818efd49-1650-4ae5-9dce-ee7d1af0a958",
      title: "Gallery Preset 2",
      type: {
        value: "feed",
      },
    });
  });

  app.get("/preset-gallery-3", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "c52ed67a-acff-41bb-ab9a-94fe2ee0bf3c",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S3 E2: Episode Title",
          title: "Name of the Show 1",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "767b8935-50f3-4366-9846-bba073e0f84b",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S1 E4: Episode Title",
          title: "Name of the Show 2",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "47737b39-7179-4072-ba1d-dc1950ba7d71",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S3 E2: Episode Title",
          title: "Name of the Show 3",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "d002e85d-500d-4ea3-a55d-0ec98f616ac3",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S1 E4: Episode Title",
          title: "Name of the Show 4",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "af87f996-8e27-4b42-ae50-39960c473364",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S3 E2: Episode Title",
          title: "Name of the Show 5",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "5345f7de-a3ba-4946-bedb-f8985b0a6c79",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S1 E4: Episode Title",
          title: "Name of the Show 6",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "58fd9ea8-1cac-4aad-a0f2-6eaf7f421adc",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S3 E2: Episode Title",
          title: "Name of the Show 7",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "1887ceb2-d9cf-42c0-8ffa-a91213d262e3",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S1 E4: Episode Title",
          title: "Name of the Show 8",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },
        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "a764dff2-c48d-44a1-9070-ec8e9b9fc3f5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S3 E2: Episode Title",
          title: "Name of the Show 9",
          type: {
            value: "video",
          },
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
        },

        {
          extensions: {
            synopsis:
              "Here will be a short description of the show. You can configure the number of displayed lines in the cell style.",
          },
          id: "46313553-7e03-4737-b9bb-05705e6a3492",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: `${absoluteReqBasePath}images/full-16x9.png`,
                },
                {
                  key: "thumb_1",
                  src: `${absoluteReqBasePath}images/gallery-image.png`,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary: "S1 E4: Episode Title",
          title: "Name of the Show 10",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "4016d243-b281-46ca-931b-3ae3fe0325e5",
      title: "Gallery Preset 3",
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
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            href: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
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
            "Here will be a short description of the item. You can control the number of shown lines.",
          title: "Content Title",
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

  app.get("/preset-movie-hero-roku", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
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
            hqme: "true",
            label: "Featured",
            meta: "Action & Adventure · 2021 · PG-13 · 2h 43m",
            "short-summary":
              "Here will be a description of the movie or the show. You can configure the font family, font size and color.",
          },
          id: "8d2fb09d-6895-4ebd-891a-37e57b22f102",
          summary:
            "Here will be a description of the movie or the show. You can configure the font family, font size and color.",
          title: "Name of the Movie",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "bd633cd6-8bdd-40ce-8cbe-bcc5ad385d9b",
      title: "Movie Screen Preset - Hero",
      type: {
        value: "feed",
      },
    });
  });

  app.get("/preset-show-hero-roku", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
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
            hqme: "true",
            label: "Featured",
            meta: "Action & Adventure · 2021 · PG-13 · 2h 43m",
            "short-summary":
              "Here will be a description of the movie or the show. You can configure the font family, font size and color.",
          },
          id: "8d2fb09d-6895-4ebd-891a-37e57b22f102",
          summary:
            "Here will be a description of the movie or the show. You can configure the font family, font size and color.",
          title: "Name of the Show",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "bd633cd6-8bdd-40ce-8cbe-bcc5ad385d9b",
      title: "Show Screen Preset - Hero",
      type: {
        value: "feed",
      },
    });
  });

  app.get("/movie-details-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {
            genre: "Action",
            meta: "15 · 2h 50m · 2023",
          },
          id: "918384eb-7dc0-4fef-a69c-b9d7d74c2750",
          link: {
            href: "",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/488820213153/2x3.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the movie. You can configure the number of displayed lines in the cell style. ",
          title: "The Name of the Movie",
          type: {
            value: "video",
          },
        },
        {
          extensions: {
            "bg-color": "rgba(254,20,72,1)",
            "bg-color-focus": "rgba(190,14,43,1)",
          },
          id: "e212e588-1313-4af1-bf2f-28bb5d8ccc91",
          title: "Play",
          type: {
            value: "video",
          },
        },
        {
          extensions: {
            "bg-color": "rgba(46,46,46,1)",
            "bg-color-focus": "rgba(30,30,30,1)",
          },
          id: "8c19595d-288f-4ebe-8b9f-2a913699850c",
          title: "Watch Trailer",
          type: {
            value: "video",
          },
        },
        {
          extensions: {},
          id: "a7c4c2a4-8c9f-42e4-85e4-dc24239b54f3",
          summary:
            "Here will be a overview of the movie. You can configure the number of displayed lines in the cell style. Ensure your text remains intact.",
          title: "Overview",
          type: {
            value: "video",
          },
        },
        {
          extensions: {
            cast: "Cast: John McClane, Katniss Everdeen, Tony Stark, Ellen Ripley, Buffy Sammers, Jack Ryan, Jessica Rabbit,John Wick.",
            director: "Director: Sarah Connor.",
            writer: "Writers: Hermione Granger, Scarlett O'Hara.",
          },
          id: "13fae94f-2fd0-4584-a4c8-442b7d8d58c6",
          title: "Credits",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "f8644455-74ff-4fa8-b88f-2ff11a1685a5",
      title: "Movie details preset (origin)",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-hero", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {
            genre: "Action",
            trailer: "Trailer",
          },
          id: "0bfac603-eb56-4c82-8bb8-8050a17c2f74",
          link: {
            href: "",
            type: "link",
          },
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/188449410282/16X9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the show. You can configure the number of displayed lines in the cell style. ",
          title: "The Name of the Show ",
          type: {
            value: "video",
          },
        },
        {
          extensions: {
            meta: "15 · 2 Seasons · 2023",
          },
          id: "d0968397-2365-4841-b8f6-dcb0ed42c491",
          summary:
            "Here will be a overview of the movie. You can configure the number of displayed lines in the cell style. Ensure your text remains intact.",
          title: "meta",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "2a91028c-7e6b-4815-98f3-cf824b8ea9cb",
      title: "Show Screen Preset  - Hero (origin) ",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-tabs", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          extensions: {},
          id: "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
          title: "Season 1 ",
          type: {
            value: "season",
          },
        },
        {
          extensions: {},
          id: "7f4ef666-03a8-40ba-97f3-bcdad0a549ca",
          title: "Season 2 ",
          type: {
            value: "season",
          },
        },
        {
          extensions: {},
          id: "f40ef17a-1487-43f5-9e38-b40b1165058b",
          title: "Details ",
          type: {
            value: "details",
          },
        },
      ],
      extensions: {},
      id: "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
      title: "Show Preset - Tabs (origin) ",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-1", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "Season 1",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-2", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "Season 2",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-3", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "Season 3",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-4", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "Season 4",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-5", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "Season 5",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-6", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "Season 6",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-7", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "Season 7",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-season-all-episodes", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "41355cfe-309a-4cd5-aca3-b10733d70f21",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/24727110720/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 1. You can configure the number of shown lines in the cell style.",
          title: "Episode 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "42cf4294-6bdb-4505-bcd0-04f9ba902954",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/958884040152/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 2. You can configure the number of shown lines in the cell style.",
          title: "Episode 2 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "374eb004-c23b-467b-8199-947951661e75",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/989746219620/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 3. You can configure the number of shown lines in the cell style.",
          title: "Episode 3 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "604bf7ed-4123-449c-8027-7e58a77b9fe5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/217087059999/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 4. You can configure the number of shown lines in the cell style.",
          title: "Episode 4",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "31863e89-70f6-4e23-989c-9ab943eb8aa6",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/30791974194/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 5. You can configure the number of shown lines in the cell style.",
          title: "Episode 5",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d68c26a-ad44-489e-9253-a801c54e27c9",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/914079291026/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 6. You can configure the number of shown lines in the cell style.",
          title: "Episode 6",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "0739f53d-c66f-46db-9f4f-238c12465680",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/968332779602/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 7. You can configure the number of shown lines in the cell style.",
          title: "Episode 7",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "ee102940-f32e-4448-9b0b-d7c63a35bb12",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/612521827766/episode_16_9.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of episode 8. You can configure the number of shown lines in the cell style.",
          title: "Episode 8",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "6da02cc9-80cf-4c6f-b396-599a62ac45d6",
      title: "All Episodes",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/show-screen-preset-tv-tabs", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          extensions: {},
          id: "ca1ccb81-9177-4d83-bdfe-9001832dc846",
          title: "Season 1 ",
          type: {
            value: "season",
          },
        },
        {
          extensions: {},
          id: "adbb957c-fd8a-4974-8337-e4e92a3380b9",
          title: "Season 2",
          type: {
            value: "season",
          },
        },
        {
          extensions: {},
          id: "ddc7a9e3-5ee3-481b-a7a3-2297b0bf8c62",
          title: "season 3",
          type: {
            value: "season",
          },
        },
        {
          extensions: {},
          id: "6aa46789-d1d3-4eac-9789-67407abaa7ee",
          title: "Season 4",
          type: {
            value: "season",
          },
        },
      ],
      extensions: {},
      id: "f5454c9e-9844-445d-81ad-df959f06d25f",
      title: "Show Screen Preset TV - tabs (origin)\t",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/search-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          extensions: {},
          id: "76f06448-e0ad-4f17-80df-e48c94bacd29",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/447417739557/search-icon.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          title: "Find something to watch",
          type: {
            value: "search",
          },
        },
      ],
      extensions: {},
      id: "79586ff8-8771-4cac-a987-824c55c77bf5",
      title: "search box (origin)",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/settings-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "6d67dc1d-3b85-45ba-8456-70651b66b8c1",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/545217491161/Shape1-Selected.png",
                },
                {
                  key: "",
                  src: "",
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          title: "Setting Item 1 ",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "b6aa61a3-92ff-46db-b366-29f4075e63a5",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/735361224653/Shape2-Selected.png",
                },
                {
                  key: "thumb_1",
                  src: "",
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          title: "Setting Item 2",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "55b97df1-b888-4225-a774-cefcdfe9808c",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/128542791695/Shape3-Selected.png",
                },
                {
                  key: "thumb_1",
                  src: "",
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          title: "Setting Item 3",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {},
          id: "3e7f85a2-0677-4ff7-8241-f6ea83aa8761",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/475934493119/Shape4-Selected.png",
                },
                {
                  key: "icon",
                  src: "",
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          title: "Setting Item 4",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "f826a6a7-6279-46ee-9743-c81a139f9312",
      title: "Settings",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/movie-hero-buttons", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          content: {
            src: "",
            type: "application/octet",
          },
          extensions: {
            genre: "Action",
            meta: "15 · 2h 50m · 2023",
          },
          id: "6d3425f2-6245-4992-bbfc-6f0b9b0abf3b",
          media_group: [
            {
              media_item: [
                {
                  key: "image_base",
                  src: "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/617718210299/screen_preset_2_3.png",
                },
                {
                  key: "thumb_1",
                  src: null,
                },
                {
                  key: "thumb_2",
                  src: null,
                },
                {
                  key: "thumb_3",
                  src: null,
                },
              ],
              type: "image",
            },
          ],
          summary:
            "Here will be a short description of the movie. You can configure the number of displayed lines in the cell style. ",
          title: "The Name of the Movie",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
            type: "video/hls",
          },
          extensions: {
            "bg-color": "rgba(254,20,72,1)",
            "bg-color-focus": "rgba(190,14,43,1)",
          },
          id: "0a15e20a-648f-4984-b97d-bc593d87d217",
          title: "Play",
          type: {
            value: "video",
          },
        },
        {
          content: {
            src: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_5MB.mp4",
            type: "video/mp4",
          },
          extensions: {
            "bg-color": "rgba(46,46,46,1)",
            "bg-color-focus": "rgba(30,30,30,1)",
          },
          id: "90675003-6120-41ea-b858-f0702ba05bcd",
          link: {
            href: "",
            type: "link",
          },
          title: "Watch Trailer",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "e2855347-e93b-4b65-81ac-adc114e92e19",
      title: "Movie hero + buttons",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/metadata-component", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      entry: [
        {
          extensions: {},
          id: "96db18a1-6401-42a3-8fbc-ba3cb02e14f1",
          summary:
            "Here will be a overview of the movie. You can configure the number of displayed lines in the cell style. Ensure your text remains intact.",
          title: "Overview",
          type: {
            value: "video",
          },
        },
        {
          extensions: {
            cast: "Cast: John McClane, Katniss Everdeen, Tony Stark, Ellen Ripley, Buffy Sammers, Jack Ryan, Jessica Rabbit,John Wick.",
            director: "Director: Sarah Connor.",
            writer: "Writers: Hermione Granger, Scarlett O'Hara.",
          },
          id: "60310156-982d-4344-9a5a-2c73b12115b6",
          title: "Credits",
          type: {
            value: "video",
          },
        },
      ],
      extensions: {},
      id: "5d9a53f5-1cd0-4d9e-a707-c46df7be932d",
      title: "Metadata Component (origin)",
      type: {
        value: "feed",
      },
    });
  });
  app.get("/preset-epg-channel", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json({
      id: "channels",
      type: {
        value: "epg-channels",
      },
      entry: [
        {
          id: "bf32e99730193e2a09b0d00a027c7783",
          type: {
            value: "epg-channel",
          },
          title: "Channel 1",
          summary: "This is Channel 1",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/channels/Channel-1.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "General",
            featured: false,
            channel_id: "bf32e99730193e2a09b0d00a027c7783",
          },
        },
        {
          id: "5d28e77a3fd5b45497c807424e7b410c",
          type: {
            value: "epg-channel",
          },
          title: "Channel 2",
          summary: "This is Channel 2",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/channels/Channel-2.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "Documentary",
            featured: false,
            channel_id: "5d28e77a3fd5b45497c807424e7b410c",
          },
        },
        {
          id: "cb44d1ec41eb8738212152082c590923",
          type: {
            value: "epg-channel",
          },
          title: "Channel 3",
          summary: "This is Channel 3",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/channels/Channel-3.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "News",
            featured: false,
            channel_id: "cb44d1ec41eb8738212152082c590923",
          },
        },
        {
          id: "ca93eb3ebdc5424f7a92d38f558ed098",
          type: {
            value: "epg-channel",
          },
          title: "Channel 4",
          summary: "This is Channel 4",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/channels/Channel-4.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "official",
            featured: false,
            channel_id: "ca93eb3ebdc5424f7a92d38f558ed098",
          },
        },
        {
          id: "b0f31b2e4a771d622a9b7b138c83e312",
          type: {
            value: "epg-channel",
          },
          title: "Channel 5",
          summary: "This is Channel 5",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/Channel-5.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "General",
            featured: false,
            channel_id: "b0f31b2e4a771d622a9b7b138c83e312",
          },
        },
        {
          id: "2c5578c1eb2f204e5d000211ecfa53cc",
          type: {
            value: "epg-channel",
          },
          title: "Channel 6",
          summary: "This is Channel 6",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/Channel-6.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "General",
            featured: false,
            channel_id: "2c5578c1eb2f204e5d000211ecfa53cc",
          },
        },
        {
          id: "4f4a5af9d9f8e823fb41d8bbb2d4e1e5",
          type: {
            value: "epg-channel",
          },
          title: "Channel 7",
          summary: "This is Channel 7",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/Channel-7.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "General",
            featured: false,
            channel_id: "4f4a5af9d9f8e823fb41d8bbb2d4e1e5",
          },
        },
        {
          id: "e241ce101eb9a6c6118c7852c0bbef19",
          type: {
            value: "epg-channel",
          },
          title: "Channel 8",
          summary: "This is Channel 8",
          media_group: [
            {
              type: "image",
              media_item: [
                {
                  src: "https://pipes2-server-example.herokuapp.com/images/Channel-8.png",
                  key: "image_base",
                },
              ],
            },
          ],
          extensions: {
            genre: "Sports",
            featured: false,
            channel_id: "e241ce101eb9a6c6118c7852c0bbef19",
          },
        },
      ],
    });
  });
};
