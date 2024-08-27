import { Sequelize } from "sequelize";
import { dbConfig } from "./constants";

export const sequelize = new Sequelize(dbConfig.dbName, dbConfig.dbUser, dbConfig.dbPWD, {
    host: dbConfig.dbHost,
    port: +dbConfig.dbPort,
    dialect: 'postgres'
})


export const initDb = async () => {
    try {
        await sequelize.authenticate({
            logging: true
        })
        console.log("--- DB server connected successfully ----")
    } catch(exception) {
        console.log(exception)
        console.log("--- Error connecting db ---")
        process.exit(1)
    }
}