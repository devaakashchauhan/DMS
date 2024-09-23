import dotenv from "dotenv";
import { app } from "./app.js";

import logger from "./logger.js";
import morgan from "morgan";
import connectDB from "./db/index.js";

dotenv.config({});

// veriables
const port = process.env.PORT;
const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    Console.log("MongoDB connection error ", err);
  });
