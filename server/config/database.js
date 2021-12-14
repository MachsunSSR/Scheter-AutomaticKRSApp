import {Sequelize} from "sequelize"

const db = new Sequelize('scheter_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db