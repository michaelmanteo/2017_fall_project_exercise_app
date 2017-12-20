// Controller
const express = require('express');
const tracker = require('./exerciseModel');
const router = express.Router();
const room = require('./groupModel');

router
  .get("/users", (req, res) => res.send(room.users))
  .get("/player/todo", (req, res) => res.send(tracker.player.todo))
  .get("/player/done", (req, res) => res.send(tracker.player.done))
  .get("/room", (req, res) => res.send(room))

router
  .post("/player", (req, res) => {
    if (req.body.password == "password") {
      let player = {
        name: req.body.name,
        id: room.users.length,
        todoList: tracker.defaultExercise.todo,
        doneList: tracker.defaultExercise.done
      };
      room.users.push(player);
      
      
      res.status(201).send(player);
    } else {
      res.status(403).send("Invalid Password");
    }
  })

  .post("/finish", (req, res)=> {
     //console.log(req.body.workout.text);
      let finishedWorkout = { text: req.body.workout.text, name: req.body.user.name }
      room.workouts.push( finishedWorkout );
      
      //let user = room[req.body.user.id];
      //console.log( finishedWorkout );

      res.status(201);
  })


module.exports.router = router;
