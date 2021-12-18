import { Sequelize } from "sequelize";
import db from "../config/database.js"
import Mahasiswa from "./mahasiswaModel.js";
import Matkul from "./matkulModel.js";

const {DataTypes} = Sequelize

const Jadwal = db.define('jadwal', {
    id_jadwal:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nim: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false,
})


export default Jadwal