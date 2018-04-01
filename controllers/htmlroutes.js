var express = require("express");
var router = express.Router();


router.get("/", function (req, res) {
    // Make a request call to grab the HTML body from the site of your choice
   

    res.render("index");
});


module.exports = router;