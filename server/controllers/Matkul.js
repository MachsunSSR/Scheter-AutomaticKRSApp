import Matkul from "../models/matkulModel.js"

export const getAllMatkul = async (req, res) => {
    try {
        const matkul = await Matkul.findAll()
        res.json(matkul)
    } catch (error) {
        res.json({message: error.message})
    }
}

export const getMatkulById = async (req, res) => {
    try {
        const matkul = await Matkul.findAll({
            where: {
                id: req.params.id
            }
        })
        res.json(matkul[0])
    } catch (error) {
        res.json({message: error.message})
    }
}

export const createMatkul = async (req, res) => {
    try {
        await Matkul.create(req.body)
        res.json({
            "message": "Berhasil membuat matkul",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const updateMatkul = async (req, res) => {
    try {
        await Matkul.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Berhasil mengupdate matkul",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}

export const deleteMatkul = async (req, res) => {
    try {
        await Matkul.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({
            "message": "Berhasil menghapus matkul",
        })
    } catch (error) {
        res.json({message: error.message})
    }
}