import { Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Matkul = db.define('matkul', {
    idMatkul: {
        type: DataTypes.INTEGER
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
        type: DataTypes.STRING
    },
    hari: {
        type: DataTypes.STRING
    }
}, {
    freezeTableName: true,
    timestamps: false,
})

export default Matkul