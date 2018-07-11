//npm install express ejs requset --s

var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("search");
});

app.get("/translate", function(req, res) {
    var original = req.query.text;
    var lang = req.query.lang;
    var url = "http://api.funtranslations.com/translate/" + lang + ".json?text=" + original;
    request(url, function(error, response, body) {
       var result = JSON.parse(body);
       console.log(body);
       res.render("translate", {phrase:result});
    });
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("MOVIE APP HAS STARTED...");
});