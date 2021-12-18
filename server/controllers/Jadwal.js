import model from "../models/index.js"
import { Op } from "sequelize"

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
    
    try {
        
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


export const tambahJadwalUtama = async (req, res) => {
    try {
        //ubah id matkul menjadi array
        const list_id_matkul = req.body.listIdMatkul.split(",")

        //ambil semua matkul
        const matkuls = await model.Matkul.findAll({
            where: {
                id_matkul:{
                    [Op.or]: list_id_matkul
                }
            }
        })

        //ambil mahasiswa
        const mahasiswa = await model.Mahasiswa.findOne({
            where:{
                nim: req.body.nim
            }
        })

        //tambahkan matkul
        
        mahasiswa.setJadwal_utama(matkuls)

        res.json({
            message: "Berhasil mengubah jadwal utama"
        })

    } catch (error) {
        res.json({message: error.message})
    }
}

export const hapusJadwalUtama = async (req, res) => {
    try {
        //ambil mahasiswa
        const mahasiswa = await model.Mahasiswa.findOne({
            where:{
                nim: req.body.nim
            }
        })

        //hapus matkul
        mahasiswa.setJadwal_utama(null)

        res.json({
            message: "Berhasil menghapus jadwal utama"
        })

    } catch (error) {
        res.json({message: error.message})
    }
}