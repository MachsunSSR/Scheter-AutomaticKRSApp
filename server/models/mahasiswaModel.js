import { Sequelize } from "sequelize";
import db from "../config/database.js"
import Jadwal from "./jadwalModel.js";

const {DataTypes} = Sequelize

const Mahasiswa = db.define('mahasiswa', {
    nim: {
        primaryKey: true,
        type: DataTypes.STRING
    },
    nama: {
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false,
})


export default Mahasiswa