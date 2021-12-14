import Jadwal from "../models/jadwalModel.js"

export const getAllJadwal = async (req, res) => {
    try {
        const jadwal = await Jadwal.findAll()
        res.json(jadwal)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getJadwalById = async (req, res) => {
    try {
        const jadwal = await Jadwal.findAll({
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
        await Jadwal.create(req.body)
        res.json({
            "message": "Berhasil membuat Jadwal",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateJadwal = async (req, res) => {
    try {
        await Jadwal.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Berhasil mengupdate Jadwal",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteJadwal = async (req, res) => {
    try {
        await Jadwal.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Berhasil menghapus Jadwal",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}