import express from 'express';
import connectDB from './config/connectDb.js';
import UrlRouter from './routes/url.js';
import StaticRouter from './routes/static.routes.js'
import path from 'path';
import generateLogs from './middleware/logs.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(generateLogs)

app.set("view engine", "ejs")
app.set("views", path.resolve("./views"));

connectDB();

app.use("/api", UrlRouter)
app.use("/", StaticRouter)

app.listen(8001, () => {
  console.log("Server is running");
})