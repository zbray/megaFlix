// Require environment variables, express and database
require("dotenv").config();
var express = require("express");
var db = require("./models");
var passport = require("./config/passport");
var session = require("express-session");

// Config for express app
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware to handle data parsing and establish static directory
// to use static files (e.g. js and css files)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// var exphbs = require("express-handlebars");
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =========================
// =========================
// =========================

// DO WE NEED THIS CODE??

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// =========================
// =========================
// =========================

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(process.env.PORT || 3000, function() {
    console.log(
      "==> 🌎  Listening on port %s. All systems go. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
