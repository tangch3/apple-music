import express from 'express';
import { deleteSong, getAllAppleMusicData, getAppleMusicData, getSavedSongs, saveSong  } from '../controllers/controllers.js';

const router = express.Router()

router.get("/home/:searchTerm/:kind", getAppleMusicData)
router.get("/home/:searchTerm", getAllAppleMusicData)
router.get("/saved", getSavedSongs)
router.post("/saved", saveSong)
router.delete("/delete/:trackID", deleteSong)


export default router