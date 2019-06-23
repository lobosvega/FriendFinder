var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.port || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app/public"));

require("../FriendFinder/app/routing/apiRoutes")(app);
require("../FriendFinder/app/routing/htmlRoutes")(app);

app.listen(port, () => console.log("Listening on port %s", port));
