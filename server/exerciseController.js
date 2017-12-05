// Controller

const express = require('express');
const tracker = require('./exerciseModel');
const router = express.Router();

router
    .get("/todo", (req, res) => res.send(tracker.todo) )
    .get("/done", (req, res) => res.send(tracker.done) )

router.post("/done",(req, res) => {
        console.log(req.body);
        tracker.done.push(req.body);
        //tracker.todo.find(req.body); find a way to delete entry from JSON object
        res.status(201).send(tracker.done);
});


module.exports.router = router;

