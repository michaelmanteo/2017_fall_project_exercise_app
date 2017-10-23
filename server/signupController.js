// Controller

const express = require('express');
const tracker = require('./trackerModel');
const router = express.Router();
var path = require('path');
var html_dir = './jquery-mockup/';

router.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '../jquery-mockup', 'signup.html'));
});


module.exports.router = router;

