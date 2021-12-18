import express from "express";
import {getMahasiswaById} from "../controllers/Mahasiswa.js";
// import {getAllMahasiswa, updateMahasiswa, createMahasiswa, deleteMahasiswa} from "../controllers/Mahasiswa.js";


const router = express.Router()

//Mahasiswa
// router.get("/", getAllMahasiswa)
// router.post("/", createMahasiswa)
// router.patch("/", updateMahasiswa)
// router.delete("/", deleteMahasiswa)

router.post("/detail", getMahasiswaById)

export default router