import express from "express";
import { login } from "../controllers/Auth.js";

const router = express.Router()

//Jadwal
router.post("/", login)

export default router