import express from "express";

import { getAllMatkul, getMatkulById, createMatkul, updateMatkul, deleteMatkul } from "../controllers/Matkul.js";

const router = express.Router()

//Matkul
router.get("/", getAllMatkul)
router.get("/:id", getMatkulById)
router.post("/", createMatkul)
router.patch("/:id", updateMatkul)
router.delete("/:id", deleteMatkul)

export default router