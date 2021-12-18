import model from "../models/index.js"

export const login = async (req, res) => {

    try {
        //Cek Mahasiswa
        const mahasiswa = await model.Mahasiswa.findAll({
            where: {
                nim: req.body.nim,
                password: req.body.password
            }
        })
        if(mahasiswa[0] !== undefined){
            res.json({role: "Mahasiswa", data:mahasiswa[0]})
            return
        }

        //Cek Admin
        const admin = await model.Admin.findAll({
            where: {
                nim: req.body.nim,
                password: req.body.password
            }
        })
        if(admin[0] !== undefined){
            res.json({role: "Admin", data:admin[0]})
            return
        }
        
        //Tidak ditemukan
        res.json({message: "nim atau password salah"})

    } catch (error) {
        res.json({message: error.message})
    }
}