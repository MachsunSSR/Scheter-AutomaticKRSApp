import model from "../models/index.js"
import { Op } from "sequelize"

export const getAllJadwal = async (req, res) => {
    try {
        const jadwal = await model.Jadwal.findAll()
        res.json(jadwal)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getJadwalById = async (req, res) => {
    try {
        const jadwal = await model.Jadwal.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(jadwal[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createJadwal = async (req, res) => {
    try {
        //ubah list berkoma menjadi list asli 
        const list_matkul = req.body.listIdMatkul.split(",")

        //Ambil matkul dari databse sesuai dengan yang diinputkan user
        const matkuls = await model.Matkul.findAll({
            where: {
                id_matkul:{
                    [Op.or]: list_matkul
                }
            }
        })
        //Buat jadwal
        const jadwal = await model.Jadwal.create(req.body)

        //Masukkan matkul pada jadwal 
        jadwal.setMatkuls(matkuls)

        res.json({
            "message": "Berhasil membuat Jadwal",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateJadwal = async (req, res) => {
    try {
        //ubah list berkoma menjadi list asli 
        const list_matkul = req.body.listIdMatkul.split(",")

        //cari matkul-matkul
        const matkuls = await model.Matkul.findAll({
            where: {
                id_matkul:{
                    [Op.or]: list_matkul
                }
            }
        })

        //cari jadwal
        const jadwal = await model.Jadwal.findOne(req.body, {
            where: {
                id_jadwal: req.params.id_jadwal
            }
        })

        //ubah matkul pada jadwal
        jadwal.setMatkuls(matkuls)

        res.json({
            "message": "Berhasil mengupdate Jadwal",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteJadwal = async (req, res) => {
    console.log("test")
    try {
        console.log(req.body)
        await model.Jadwal.destroy({
            where: {
                id_jadwal: req.body.id_jadwal,
                nim: req.body.nim
            }
        })
        res.json({
            "message": "Berhasil menghapus Jadwal",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}