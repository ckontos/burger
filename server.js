var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");


var port = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//handlebars initializer and main page setup
app.engine("handlebars", exphbs({ defaultLayout: "main", }));
app.set("view engine", "handlebars");

var routes = require("./controllers/sushi_controller.js");
app.use('/', routes);

app.listen(port, function() {
    console.log('Server listening on port ' + port);
});
