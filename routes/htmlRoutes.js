// var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Test route to ensure search functionality is working
  app.get("/search-test", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Route for when customer logs in
  app.get("/customer-home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/customer-home.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
