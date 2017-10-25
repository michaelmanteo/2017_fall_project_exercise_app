// Controller

const express = require('express');
const tracker = require('./exerciseModel');
const router = express.Router();
var path = require('path');
var html_dir = './jquery-mockup/';

router
    .get("/todo", (req, res) => res.send(tracker.todo) )
    .get("/done", (req, res) => res.send(tracker.done) )

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '../jquery-mockup', 'exercise.html') );
});

/*
router.post("/", function(req, res){
    console.log(req.body.newExercise);
    tracker.routine = req.body.newExercise;

}); */


module.exports.router = router;

