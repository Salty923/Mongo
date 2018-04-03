var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = require('../models');


//mongo db config
var databaseUrl = "Meetup_db";
var collections = ["MeetUps"];
// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error);
});


// Route for getting all Articles from the db
router.get("/", function (req, res) {
    // Grab every document in the Articles collection
    db.MeetUps.find({}, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            var hbsObject = {
                meetup: data
            }
            console.log(hbsObject);
            res.render('index', hbsObject)
        }
    })
});

module.exports = router;