// Require database models to configure API routes.
var db = require("../models");

// ==============================
//       BUILDING ROUTES
// ==============================

module.exports = function(app) {
  // GET route to retrieve all movies of a specific genre from db for user homepage
  // and 'See All' page for each genre (e.g. See All Action movies).
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
  app.get("/api/title/:movie", function(req, res) {
    db.Film.findAll({
      where: {
        title: {
          $like: "%" + req.params.movie + "%"
        }
      }
    }).then(function(movieResult) {
      res.json(movieResult);
    });
  });
  
  // GET route to retrieve specific movies from db based on user search.
  app.get("/api/id/:movieid", function(req, res) {
    db.Film.findAll({
      where: {
        id: req.params.movieid
      }
    }).then(function(movieResult) {
      res.json(movieResult);
    });
  });

  // GET route to retrieve all movies from db. This will be used on
  // manager page to see entire inventory.
  app.get("/api/movies", function(req, res) {
    db.Film.findAll({}).then(function(allMovies) {
      res.json(allMovies);
    });
  });

  // POST route for manager to add new movie to db.
  app.post("/api/movies", function(req, res) {
    db.Film.create({
      title: req.body.title,
      year: req.body.year,
      genre: req.body.genre,
      price: req.body.price,
      format: req.body.format,
      isReserved: req.body.isReserved
    }).then(function(newMovie) {
      res.json(newMovie);
    });
  });

  // DELETE route for manager to delete a movie from db by movie id.
  app.delete("/api/movies/:id", function(req, res) {
    db.Film.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  // PUT route for manager to update a movie in db by movie id.
  app.put("/api/movies/", function(req, res) {
    console.log(req.body);
    db.Film.update(
      req.body,
      // {
      //   isReserved: req.body.isReserved
      // },
      {
        where: {
          id: req.body.frontendid
        }
      }
    ).then(function(updatedMovie) {
      res.json(updatedMovie);
    });
  });
};
