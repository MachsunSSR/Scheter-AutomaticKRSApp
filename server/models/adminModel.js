import { Sequelize } from "sequelize";
import db from "../config/database.js"

const {DataTypes} = Sequelize

const Admin = db.define('admin', {
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

export default Admin