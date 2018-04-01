var express = require("express");
var cheerio = require('cheerio');
var request = require('request');
var router = express.Router();
var db = require('../models/');

var app = express();



router.get("/scrape", function (req, res) {
    // Make a request call to grab the HTML body from the site of your choice
    request("https://www.meetup.com/cities/us/il/chicago/tech/", function (error, response, html) {

        // Load the HTML into cheerio and save it to a variable
        // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
        var $ = cheerio.load(html);

        // Select each element in the HTML body from which you want information.
        // NOTE: Cheerio selectors function similarly to jQuery's selectors,
        // but be sure to visit the package's npm page to see how it works
        $("a.display-none").each(function (i, element) {
            // An empty array to save the data that we'll scrape
            var results = {};

            results.title = $(this)
             .text();
             result.link = $(this)
             .attr('href');
            
             db.MeetUp.create(result)
             .then(function (dbMeetUp) {
                 console.log(dbMeetUp);
             })
             .catch(function (err) {
                 return res.json(err);
             });
        });
        res.send('scrape worked');
    });
});

// app.get("/articles", function (req, res) {
//     // TODO: Finish the route so it grabs all of the articles
//     db.Article.find()
//         .then(function (data) {
//             res.json(data);
//         })
//         .catch(function (err) {
//             res.json(err);
//         })
// });

// // Route for grabbing a specific Article by id, populate it with it's note
// app.get("/articles/:id", function (req, res) {
//     db.Article.findOne(
//         {
//             _id: req.params.id
//         }
//     )
//         .populate("note")
//         .then(function (data) {
//             res.json(data);
//         })
//         .catch(function (err) {
//             res.json(err);
//         })
// });
