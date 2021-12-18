import express from "express";
import {tambahJadwalUtama, hapusJadwalUtama} from "../controllers/Jadwal.js";

const router = express.Router()

//Jadwal
router.post("/", tambahJadwalUtama)
router.delete("/", hapusJadwalUtama)

export default router