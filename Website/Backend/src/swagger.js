import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "", // by default: '1.0.0'
    title: "", // by default: 'REST API'
    description: "", // by default: ''
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: [],
  consumes: [],
  produces: [],
  tags: [],
  securityDefinitions: {
    apiKeyAuth: {
      type: "apiKey",
      in: "header",
      name: "X-API-KEY",
      description: "any description...",
    },
  },
  definitions: {}, //
};

const outputFile = "./swagger.json";
const routes = ["./app.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen({ openapi: "3.0.0" })(outputFile, routes, doc).then(async () => {
  await import("./app.js");
});
