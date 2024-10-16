import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

dotenv.config({});

const app = express();
const apiVersion = process.env.API_VERSION;
const allowedOrigins = process.env.CORS_ORIGIN;

// cors middelware
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg =
        "The CORS policy for this site does not allow access from the specified Origin.";
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
};

app.use(cors(corsOptions));

// common middelware
// info :- express
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// info :- cookies-parser
app.use(cookieParser());

// import routes
import { errorHandler } from "./middlewares/error.middleware.js";
import router from "./routes/index.js";

// routes
app.use(errorHandler);

// all user related
app.use("/api/v1", router);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true }),
);

export { app };
