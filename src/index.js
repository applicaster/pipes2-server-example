const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const seriesRoutes = require("./series-routes");
const edgeCasesRoutes = require("./edge-cases-routes");
const { absoluteReqBasePath } = require("./utils");

const app = express();
const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Pipes2 Example API",
      version: "0.1.0",
    },
    servers: [
      {
        url: absoluteReqBasePath,
      },
    ],
  },
  apis: [
    path.join(__dirname, "series-routes.js"),
    path.join(__dirname, "edge-cases-routes.js"),
  ],
};

const specs = swaggerJsdoc(options);
app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
seriesRoutes.setup(app);
edgeCasesRoutes.setup(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
