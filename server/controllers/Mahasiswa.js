// import { Op } from "sequelize"
import model from "../models/index.js"

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

// export const getAllMahasiswa = async (req, res) => {
//     try {
//         const mahasiswa = await model.Mahasiswa.findAll()
//         res.json(mahasiswa)
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }



// export const deleteMahasiswa = async (req, res) => {
//     try {
//         await model.Mahasiswa.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({
//             "message": "Berhasil menghapus Mahasiswa",
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }