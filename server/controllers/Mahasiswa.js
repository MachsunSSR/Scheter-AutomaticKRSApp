import { Op } from "sequelize"
import model from "../models/index.js"

export const login = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll()
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getAllMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await model.Mahasiswa.findAll()
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getMahasiswaById = async (req, res) => {
    try {
        const mahasiswa = await model.Mahasiswa.findOne({
            where: {
                nim: req.body.nim
            },
            include: [
                {model: model.Matkul, as:"jadwal_utama", through: {attributes: []}},
            ]
        })
        const jadwal = await model.Jadwal.findAll({
            where: {
                nim: req.body.nim
            },
            attributes: {
                exclude: ['nim']
            },
            include: [
                {model: model.Matkul, through: {attributes: []}},
            ]
        })
        mahasiswa.dataValues.jadwal_favorit = jadwal
        res.json(mahasiswa)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createMahasiswa = async (req, res) => {
    try {
        await model.Mahasiswa.create(req.body)
        res.json({
            "message": "Berhasil membuat Mahasiswa",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateMahasiswa = async (req, res) => {
    try {
        await model.Mahasiswa.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Berhasil mengupdate Mahasiswa",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteMahasiswa = async (req, res) => {
    try {
        await model.Mahasiswa.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Berhasil menghapus Mahasiswa",
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
        // console.log(mahasiswa)
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