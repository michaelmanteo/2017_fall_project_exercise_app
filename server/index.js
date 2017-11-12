// Server

const express = require("express");
const exerciseController = require("./exerciseController");
const calorieController = require("./calorieController");
const loginController = require("./loginController");
const signupController = require("./signupController")
const exerciseModel = require("./exerciseModel");
const bodyParser = require("body-parser");
const server = express();


server.use(bodyParser.urlencoded());
server.use(bodyParser.json());


server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server
    .use("/", express.static("./jquery-mockup"))
    .use("/login", loginController.router)
    .use("/signup", signupController.router)
    .use("/calories", calorieController.router)
    .use("/exercise", exerciseController.router)
    .listen(3001, function(){
        console.log("http://localhost:3001");
    });

