const screenData = {
  data: {
    type: "zapp_screen",
    id: "1",
    attributes: {
      screen_id: "1",
      overrides: {},
      ui_components: [
        {
          component_id: "3f558234-ad14-452c-91b0-b0363731c535",
          overrides: {
            position: 0,
            styles: {
              group_background_color: "rgba(125,125,124,0.5)"
            }
          }
        },
        {
          component_id: "33137c97-6564-4958-b6b1-62120d22fc7c",
          overrides: {
            styles: {
              group_margin_top: "50",
              group_background_color: "red"
            },
            position: 1
          }
        },
        {
          component_id: "358497f7-6e98-4293-8a29-18d797dccf9d",
          overrides: {
            position: 2,
            styles: {
              group_background_color: "green"
            }
          }
        },
        {
          component_id: "8dac0499-598f-4ea7-a320-3e31bdb9ab85",
          overrides: {
            localizations: {
              en: {
                title_override: "YAY !"
              }
            }
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
