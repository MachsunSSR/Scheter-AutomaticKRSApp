import express from "express";
import {createJadwal, updateJadwal, deleteJadwal} from "../controllers/Jadwal.js";

const router = express.Router()

//Jadwal
router.post("/", createJadwal)
router.patch("/", updateJadwal)
router.delete("/", deleteJadwal)

export default router