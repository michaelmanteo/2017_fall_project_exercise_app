// Server

const express = require("express");
const handler = require("./httpHandler")
const exerciseController = require("./exerciseController");
const server = express();

server.use("/", express.static("./jquery-mockup"));
server.use("/old", handler.main);
server.use("/exercise", exerciseController.router);

    

server.listen(3000);

console.log("http://localhost:3000");