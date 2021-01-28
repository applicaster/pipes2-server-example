const express = require("express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const routes = require("./routes");
const path = require("path");

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
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: [path.join(__dirname, "routes.js")],
};

const specs = swaggerJsdoc(options);
app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
routes.setup(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
