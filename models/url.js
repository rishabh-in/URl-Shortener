import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  shortUrl: {
    type: String,
    unique: true,
    required: true
  },
  redirectUrl: {
    type: String,
    required: true
  },
  visitHistory: [{
    timestamp: {
      type: Number
    }
  }]
}, {timestamps: true});

const UrlModel = mongoose.model("Url", urlSchema);
export default UrlModel;