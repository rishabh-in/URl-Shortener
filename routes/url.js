import express from 'express';
import { handleShortUrlAnalytics, handleShortUrlId, handleUrlShortener } from '../controller/url.js';

const router = express.Router();

router.post("/url", handleUrlShortener);
router.get("/:shortId", handleShortUrlId)
router.get("/analytics/:shortId", handleShortUrlAnalytics)

export default router;