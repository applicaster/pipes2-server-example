const screenData = {
  data: {
    type: "zapp_screen",
    id: "1",
    attributes: {
      screen_id: "1",
      overrides: {},
      ui_components: [
        {
          component_id: "3c3bc898-c7a7-4734-a2a4-cf3871f396ae",
          overrides: {
            position: 1,
            styles: {
              group_background_color: "rgba(125,125,124,0.5)"
            }
          }
        },
        {
          component_id: "80c58125-2ff5-4475-9346-4ca9161a6578",
          overrides: {
            styles: {
              group_margin_top: "50",
              group_background_color: "red"
            },
            position: 2
          }
        },
        {
          component_id: "c29aade1-135f-4ad4-baef-5ee5802c8d51",
          overrides: {
            position: 3,
            styles: {
              group_background_color: "green"
            }
          }
        },
        {
          component_id: "94b71fbc-63cb-48ce-9bda-d0270ec3cc27",
          overrides: {
            localizations: {
              fr: {
                title_override: "YAY !"
              },
              en: {
                title_override: "YAY !"
              }
            }
          }
        },
        {
          component_id: "428a889f-9880-47a4-9ea7-d8023495548b",
          overrides: {
            position: 0
          }
        }
      ]
    }
  }
};

module.exports.setup = (app) => {
  app.get("/screen", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    // res.setHeader("Cache-Control", "public, max-age=300");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(screenData);
  });
};
