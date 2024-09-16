import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config({});

const app = express();
const apiVersion = process.env.API_VERSION;

// cors middelware
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }));

// common middelware
// info :- express
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// info :- cookies-parser
app.use(cookieParser());

// import routes
import { errorHandler } from "./middlewares/error.middleware.js";
import healthCheckRouter from "./routes/healthcheck.routes.js";

// user
import adminRouter from "./routes/admin.routes.js";

// routes
app.use(errorHandler);

// all user related
app.use(`/${apiVersion}/admin`, adminRouter);

export { app };
