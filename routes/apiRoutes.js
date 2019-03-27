// Require database to configure API routes
var db = require("../models");

module.exports = function(app) {
  
  // GET route to retrieve all movies from db. This will be used on
  // user homepage and manager page
  app.get("/api/movies", function(req, res) {
    db.Film.findAll({}).then(function(allMovies) {
      res.json(allMovies);
    });
  });

  // GET route to retrieve all movies of a specific genre from db for user homepage
  // and 'See All' page for each genre (e.g. See All Action movies)
  app.get("/api/movies/:genre", function(req, res) {
    db.Film.findAll({
      where: {
        genre: {
          $like: "%" + req.params.genre + "%"
        }
      }
    }).then(function(genreResults) {
      res.json(genreResults);
    });
  });

  // GET route to retrieve specific movies from db based on user search
  app.get("/api/:movie", function(req, res) {
    db.Film.findAll({
      where: {
        title: req.params.movie
      }
    }).then(function(movieResult) {
      res.json(movieResult);
    });
  });

  // POST route to add new movie to db
  app.post("/api/movies", function(req, res) {
    db.Film.create({
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      price: req.body.price,
      format: req.body.format
    }).then(function(newMovie) {
      res.json(newMovie);
    });
  });

  // DELETE route for manager to delete a movie from db by movie id
  app.delete("/api/movies/:id", function(req, res) {
    db.Film.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for manager to update a movie in db by movie id
  app.put("/api/movies/", function(req, res) {
    db.Film.update(
      {
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        price: req.body.price,
        format: req.body.format
      },
      {
        where: {
          id: req.body.id
        }
      }).then(function(updatedMovie) {
      res.json(updatedMovie);
    });
  });
};
