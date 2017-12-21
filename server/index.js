// Server

const express = require("express");
const exerciseController = require("./exerciseController");
const exerciseModel = require("./exerciseModel");
const bodyParser = require("body-parser");

const port = 8081;
const server = express();



// Body Parser Middleware 
server.use(bodyParser.urlencoded());
server.use(bodyParser.json());


server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server
    .use("/exercise", exerciseController.router)
    .listen(port)

console.log(`http://localhost:${port}`);

