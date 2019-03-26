var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/:movie", function(req, res) {
    var movieSearch = req.params.movie;
    db.Film.findAll({
      where: {
        title: movieSearch
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(result) {
      res.json(result);
    });
  });

  // Delete an example by id - don't need this
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(result) {
  //     res.json(result);
  //   });
  // });
};
