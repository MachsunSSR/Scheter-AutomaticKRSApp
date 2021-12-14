import { Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Jadwal = db.define('jadwal', {
    list_matkul: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

export default Jadwal