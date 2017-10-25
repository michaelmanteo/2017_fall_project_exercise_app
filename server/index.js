// Server

const express = require("express");
const handler = require("./httpHandler");
const exerciseController = require("./exerciseController");
const calorieController = require("./calorieController");
const loginController = require("./loginController");
const signupController = require("./signupController")
const exerciseModel = require("./exerciseModel");
const server = express();

server
    .use("/", express.static("./jquery-mockup"))
    .use("/old", handler.main)
    .use("/login", loginController.router)
    .use("/signup", signupController.router)
    .use("/calories", calorieController.router)
    .use("/exercise", exerciseController.router)
    .listen(3001, function(){
        console.log("http://localhost:3001");
    });

