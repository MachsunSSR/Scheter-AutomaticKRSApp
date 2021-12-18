import {Sequelize} from "sequelize"

const db = new Sequelize('scheter_db', 'root', '', {
    host: "localhost",
    dialect: "mysql",

     // disable logging; default: console.log
    logging: false
})

export default db