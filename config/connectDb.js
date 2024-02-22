import mongoose from "mongoose";
import colors from "colors"


const connectDB = async() => {
  try {
    mongoose.connect("mongodb://localhost:27017/url")
    console.log("Mongo Connect".bgYellow)
  } catch (error) {
    console.log(error)
  }
}

export default connectDB;