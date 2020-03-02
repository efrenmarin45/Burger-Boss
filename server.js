// Requiring our dependencies
var express = require("express");

// Setting up port for server
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Requiring handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
