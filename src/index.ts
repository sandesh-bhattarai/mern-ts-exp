// const express = require('express')
import express, {Express} from "express";
import router from "./config/router.config";
import { initDb } from "./config/db.config";

const app: Express = express();
// Initialization of db
initDb()


app.use('/api/v1', router);

const server = app.listen(9001, 'localhost', () => {
    console.log("Server is running on port 9001...")
    // initDb()
})

server.on("error", () => {
    console.log("Error listening to port 9001")
})