import dotenv from "dotenv"
dotenv.config();

export const dbConfig = {
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || 5432,
    dbUser: process.env.DB_USER || 'macos',
    dbPWD: process.env.DB_PWD || undefined, 
    dbName: process.env.DB_NAME || 'ts-30'
}