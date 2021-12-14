import { Sequelize } from "sequelize";
import db from "../config/database.js"

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
    matkul: {
        type: DataTypes.STRING
    },
    jadwal_favorit: {
        type: DataTypes.STRING
    },
    jadwal_utama: {
        type: DataTypes.INTEGER
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

export default Mahasiswa