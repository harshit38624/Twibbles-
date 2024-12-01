import express from 'express';
import dotenv from 'dotenv';

import connectMongoDB from "./db/connectMongoDB.js";
import cookieParser from "cookie-parser";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;
console.log(process.env.MONGODB_URL);
// Middleware to parse JSON
app.use(express.json({limit:"5mb"}));
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// Start
app.listen(8000, () => {
    console.log(`Server running on port ${PORT}`);
    connectMongoDB();
});
