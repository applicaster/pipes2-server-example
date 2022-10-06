const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const routes = require("./routes");
const edgeCasesRoutes = require("./edge-cases-routes");
const presetRoutes = require("./preset-routes");
const epgRoutes = require("./epg");
const dynamicScreen = require("./dynamic-screen");
const { absoluteReqBasePath } = require("./utils");

const app = express();
app.enable("trust proxy");
app.use(cors());
const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pipes2 Example API",
      version: "0.1.0"
    },
    servers: [
      {
        url: absoluteReqBasePath
      }
    ]
  },
  apis: [
    path.join(__dirname, "routes.js")
    // path.join(__dirname, "edge-cases-routes.js"),
  ]
};

const specs = swaggerJsdoc(options);
app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
edgeCasesRoutes.setup(app);
routes.setup(app);
presetRoutes.setup(app);
epgRoutes.setup(app);
dynamicScreen.setup(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
