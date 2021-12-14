import express from "express"
import db from "./config/database.js"
import matkulRoutes from "./routes/matkulRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import mahasiswaRoutes from "./routes/mahasiswaRoutes.js"
import jadwalRoutes from "./routes/matkulRoutes.js"
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
app.use('/matkul', matkulRoutes)
app.use('/jadwal', adminRoutes)
app.use('/mahasiswa', mahasiswaRoutes)
app.use('/admin', jadwalRoutes)

app.listen(5000, () => console.log("Port running on 5000"))