import Mahasiswa from "./mahasiswaModel.js";
import Jadwal from "./jadwalModel.js";
import Matkul from "./matkulModel.js";
import Admin from "./adminModel.js";

//Relationshit
Mahasiswa.hasMany(Jadwal, {as:"jadwal_favorit", foreignKey:"nim"})
Jadwal.belongsTo(Mahasiswa, {as:"jadwal_favorit", foreignKey: "nim"})
Jadwal.belongsToMany(Matkul, {foreignKey: "id_jadwal",through: "jadwal_matkul"})
Matkul.belongsToMany(Jadwal, {foreignKey:"id_matkul",through: "jadwal_matkul"})
Matkul.belongsToMany(Mahasiswa, {as:"jadwal_utama", foreignKey:"id_matkul",through: "mahasiswa_matkul"})
Mahasiswa.belongsToMany(Matkul, {as:"jadwal_utama", foreignKey:"nim",through: "mahasiswa_matkul"})

const model = {}

model.Jadwal = Jadwal
model.Mahasiswa = Mahasiswa
model.Matkul = Matkul
model.Admin = Admin

export default model