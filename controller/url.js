import { nanoid } from "nanoid";
import UrlModel from "../models/url.js";

export const handleUrlShortener = async(req, res) => {
  try {
    let {url} = req.body;
    if(!url) {
      res.status(400).json({error: "url is missing"});
    }
    const shortUrl = nanoid(8);
    await UrlModel.create({
      shortUrl,
      redirectUrl: url,
      visitHistory: []
    })
    res.status(200).json(shortUrl);
  } catch (error) {
    console.log(error);
  }
}

export const handleShortUrlId = async(req, res) => {
  try {
    let {shortId} = req.params;
    if(!shortId) {
      res.status(400).json({error: "Id is required"});
    }

    // update visit count
    await UrlModel.findOneAndUpdate({shortUrl: shortId}, {$push: {visitHistory: {timestamp: Date.now()}}});

    let urlData = await UrlModel.findOne({shortUrl});
    // res.status(200).json({urlData})
    res.redirect(urlData.redirectUrl)

  } catch (error) {
    console.log(error);
  }
}

export const handleShortUrlAnalytics = async(req, res) => {
  try {
    const {shortId} = req.params;
    if(!shortId) {
      res.status(400).json({error: "Id is required"});
    }

    let analytics = await UrlModel.findOne({shortUrl: shortId});
    res.status(200).json({totalClicks: analytics.visitHistory.length})
  } catch (error) {
    console.log(error);
  }
}