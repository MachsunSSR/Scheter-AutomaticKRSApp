import express from "express"
import db from "./config/database.js"
import matkulRoutes from "./routes/matkulRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import mahasiswaRoutes from "./routes/mahasiswaRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import cors from "cors"

const app = express()

try {
    await db.authenticate()
    console.log('Database Connected...')
} catch (error) {
    console.error('Connection Failed : ', error)
}

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/admin/matkul', matkulRoutes)
app.use('/admin', adminRoutes)
app.use('/mahasiswa', mahasiswaRoutes)
app.use('/login', authRoutes)

app.listen(5000, () => console.log("Port running on 5000"))