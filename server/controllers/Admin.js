// import Admin from "../models/adminModel.js"

// export const getAllAdmin = async (req, res) => {
//     try {
//         const admin = await Admin.findAll()
//         res.json(admin)
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// export const getAdminById = async (req, res) => {
//     try {
//         const admin = await Admin.findAll({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json(admin[0])
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// export const createAdmin = async (req, res) => {
//     try {
//         await Admin.create(req.body)
//         res.json({
//             "message": "Berhasil membuat Admin",
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// export const updateAdmin = async (req, res) => {
//     try {
//         await Admin.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({
//             "message": "Berhasil mengupdate Admin",
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }

// export const deleteAdmin = async (req, res) => {
//     try {
//         await Admin.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.json({
//             "message": "Berhasil menghapus Admin",
//         })
//     } catch (error) {
//         res.json({message: error.message})
//     }
// }