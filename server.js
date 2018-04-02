var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 3000;
//var db = require("./models");


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/apiroutes.js");

app.use(routes);



// var databaseUri = "mongodb://localhost/meetups_db";

//connect to db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoScrape_db";

// if (process.env.MONGODB_URI) {
//     mongoose.connect(process.env.MONGODB_URI);
// }else{
//     mongoose.connect(databaseUri);
// }

var db = mongoose.connection;

db.on('error',function (err) {
    console.log('Mongoose Error: ',err);
});

db.once('open', function(){
    console.log('Mongoose connection successful.');
});

// // If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/meetups_db";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
    // useMongoClient: true
});



//maybe try that 

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



//https://young-sierra-27152.herokuapp.com/

//Created mongolab-angular-84074 as MONGODB_URI
//Use heroku addons: docs mongolab to view documentation