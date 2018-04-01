var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 3000;
var db = require("./models");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/apiroutes.js");

app.use(routes);





// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/meetups_db";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    // useMongoClient: true
});

// This makes sure that any errors are logged if mongodb runs into an issue
// db.on("error", function (error) {
//     console.log("Database Error:", error);
// });



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



//https://young-sierra-27152.herokuapp.com/

//Created mongolab-angular-84074 as MONGODB_URI
//Use heroku addons: docs mongolab to view documentation