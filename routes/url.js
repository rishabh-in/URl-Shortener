import express from 'express';
import { handleShortUrlAnalytics, handleShortUrlId, handleUrlList, handleUrlShortener } from '../controller/url.js';

const router = express.Router();

router.get("/list/urls", handleUrlList)
router.post("/url", handleUrlShortener);
router.get("/:shortId", handleShortUrlId);
router.get("/analytics/:shortId", handleShortUrlAnalytics);


export default router;