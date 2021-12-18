import { Sequelize } from "sequelize";
import db from "../config/database.js"
import Jadwal from "./jadwalModel.js";

const {DataTypes} = Sequelize

const Matkul = db.define('matkul', {
    id_matkul: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: DataTypes.STRING
    },
    kelas: {
        type: DataTypes.STRING
    },
    kode: {
        type: DataTypes.STRING
    },
    sks: {
        type: DataTypes.INTEGER
    },
    kuota: {
        type: DataTypes.INTEGER
    },
    hari: {
      type: DataTypes.STRING
    },
    jam: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
})

export default Matkul