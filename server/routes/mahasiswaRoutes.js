import express from "express";
import { getAllMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa } from "../controllers/Mahasiswa.js";

const router = express.Router()

//Mahasiswa
router.get("/", getAllMahasiswa)
router.get("/:id", getMahasiswaById)
router.post("/", createMahasiswa)
router.patch("/:id", updateMahasiswa)
router.delete("/:id", deleteMahasiswa)

export default router