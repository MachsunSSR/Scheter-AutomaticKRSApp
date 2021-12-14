import express from "express";
import { getAllJadwal, getJadwalById, createJadwal, updateJadwal, deleteJadwal } from "../controllers/Jadwal.js";

const router = express.Router()

//Jadwal
router.get("/", getAllJadwal)
router.get("/:id", getJadwalById)
router.post("/", createJadwal)
router.patch("/:id", updateJadwal)
router.delete("/:id", deleteJadwal)

export default router