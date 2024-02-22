import express from 'express';
import connectDB from './config/connectDb.js';
import UrlRouter from './routes/url.js'

const app = express();
app.use(express.json());

connectDB();

app.use("/", UrlRouter)


app.listen(8001, () => {
  console.log("Server is running");
})