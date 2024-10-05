import "dotenv/config";
import express from "express";
import logger from "morgan";
import connectToMongoDB from "./src/DB/connectToMongo.js";
import cors from "cors";
import { PORT, APP_ORIGIN } from "./src/constants/env.js";
import articleRouter from "./src/routes/article.js";

const app = express();

const ALLOWED_ORIGINS = [
  `http://localhost:${PORT}`,
  `http://localhost:${APP_ORIGIN}`,
];
const METHODS = ["GET", "POST"];

//middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: function (origin, callback) {
      if (
        typeof origin === "string" &&
        (ALLOWED_ORIGINS.indexOf(origin) !== -1 || !origin)
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: METHODS,
  })
);
//router
app.use("/api/v1", articleRouter);

//Healt route
// app.get('/health', (_, res) => {

//     return res.status(OK).json({
//         status:"healthy"
//     })
// });

//listen & connect to db
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
