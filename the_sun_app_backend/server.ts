import express from "express"
import logger from "morgan";
import connectToMongoDB from "./src/DB/connectToMongo.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(
    PORT,
    () => {
        connectToMongoDB()
        console.log(`Server running on port ${PORT}`)
    }
)