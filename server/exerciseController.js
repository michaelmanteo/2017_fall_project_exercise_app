// Controller

const express = require('express');
const tracker = require('./exerciseModel');
const router = express.Router();

router
    .get("/player/todo", (req, res) => res.send(tracker.player.todo) )
    .get("/player/done", (req, res) => res.send(tracker.player.done) )

router.post("/player/done",(req, res) => {
        tracker.player.done.push(req.body);
        //find a way to delete entry from JSON object
        res.status(201).send(tracker.player.done);
});

router.post("/player", (req, res) => {
    if(req.body.password == "password"){
        tracker.player.name = req.body.name;  
        tracker.users.push(tracker.player.name);
        res.status(201).send(tracker.player);
    }else{
        res.status(403).send("Invalid Password");
    }
});

module.exports.router = router;