var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();
var PORT = process.env.PORT || 3000;


var cheerio = require('cheerio');
var request = require('request');

// Make a request call to grab the HTML body from the site of your choice
request("https://www.meetup.com/cities/us/il/chicago/tech/", function (error, response, html) {

    // Load the HTML into cheerio and save it to a variable
    // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

    // An empty array to save the data that we'll scrape
    var results = [];

    // Select each element in the HTML body from which you want information.
    // NOTE: Cheerio selectors function similarly to jQuery's selectors,
    // but be sure to visit the package's npm page to see how it works
    $("a.display-none").each(function (i, element) {

        var link = $(element).attr("href");
        var title = $(element).text();
        //var image = $(element).attr('style');

        // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
            title: title,
            link: link,
            //image: image
        });
    });

    // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);
});


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");

app.use(routes);


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



//https://young-sierra-27152.herokuapp.com/

//Created mongolab-angular-84074 as MONGODB_URI
//Use heroku addons: docs mongolab to view documentation