import "dotenv/config";
import express from "express";
import logger from "morgan";
import connectToMongoDB from "./src/DB/connectToMongo.js";
import cors from "cors";
import { PORT } from "./src/constants/env.js";
import articleRouter from "./src/routes/article.routes.js";

const app = express();

const HOST = `http://localhost:${PORT}`;
const METHODS = ["GET", "POST"];

//middlewares
app.use(express.json());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: HOST,
    methods: METHODS,
  })
);
//router
app.use("api/v1", articleRouter);

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
