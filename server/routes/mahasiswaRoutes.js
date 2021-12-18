import express from "express";
import { getAllMahasiswa, getMahasiswaById, tambahJadwalUtama, hapusJadwalUtama } from "../controllers/Mahasiswa.js";

import { getAllJadwal, getJadwalById, createJadwal, updateJadwal, deleteJadwal } from "../controllers/Jadwal.js";

const router = express.Router()

//Mahasiswa
router.get("/detail", getAllMahasiswa)
router.post("/detail", getMahasiswaById)
router.post("/jadwalUtama", tambahJadwalUtama)
router.delete("/jadwalUtama", hapusJadwalUtama)
router.delete("/jadwalFavorit", deleteJadwal)
router.post("/jadwalFavorit", createJadwal)
router.patch("/jadwalFavorit", updateJadwal)

export default router