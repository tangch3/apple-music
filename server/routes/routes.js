import express from 'express';
import { getAppleMusicData, getSavedSongs, saveSong  } from '../controllers/controllers.js';

const router = express.Router()

router.get("/home/:searchTerm", getAppleMusicData)
router.get("/saved", getSavedSongs)
router.post("/saved", saveSong)


export default router