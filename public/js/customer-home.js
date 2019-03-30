$(document).ready(function() {
  // References to HTML elements where movies will be populated
  var actionRow = $(".action-row");
  var comedyRow = $(".comedy-row");
  var dramaRow = $(".drama-row");
  var musicalRow = $(".musical-row");
  var animatedRow = $(".animated-row");

  // References to various elements of modal
  var modalTitle = $(".modal-title");
  var modalPoster = $("#modal-image");
  var modalInfo = $("#modal-info");
  var modalPlot = $("#modal-plot");
  var modalReserved = $("#modal-reserved");
  
  var posterURL;
  // If this works, replicate for each genre-row

  // Call function to dynamically render movies on customer homepage
  actionPull(); 
  comedyPull();
  dramaPull();
  musicalPull();
  animatedPull();

  // ============================
  // DEFINE FUNCTIONS
  // ============================

  // Function to dynamically generate 4 action movies from db and OMDB
  function actionPull() {
    $.get("/api/movies/action", function(genreData) {
      return genreData;
    }).then(function(response) {
      var genreMovies = response;
      for (let i = 0; i < 4; i++) {
        var queryURL = "http://www.omdbapi.com/?t=" + genreMovies[i].title + "&y=" + genreMovies[i].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("movie-id", genreMovies[i].id);
          // newCard.attr("id", genreMovies[i].title + "&y=" + genreMovies[i].year);
          var newPoster = $("<img>");
          newPoster.attr("class", "card-img-top");
          newPoster.attr("alt", genreMovies[i].title);
          newPoster.attr("src", posterURL);
          var newCardBody = $("<div></div>");
          newCardBody.attr("class", "card-body");
          var newCardText = $("<p></p>").text(genreMovies[i].title);
          newCardText.attr("class", "card-text text-center")
          newCardBody.append(newCardText);
          newCard.append(newPoster, newCardBody);
          newCol.append(newCard);
          actionRow.append(newCol);
        });
      }
    });
  }

  // Function to dynamically generate 4 comedy movies from db and OMDB
  function comedyPull() {
    $.get("/api/movies/comedy", function(genreData) {
      return genreData;
    }).then(function(response) {
      var genreMovies = response;
      for (let i = 0; i < 4; i++) {
        var queryURL = "http://www.omdbapi.com/?t=" + genreMovies[i].title + "&y=" + genreMovies[i].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("id", genreMovies[i].title + "&y=" + genreMovies[i].year);
          var newPoster = $("<img>");
          newPoster.attr("class", "card-img-top");
          newPoster.attr("alt", genreMovies[i].title);
          newPoster.attr("src", posterURL);
          var newCardBody = $("<div></div>");
          newCardBody.attr("class", "card-body");
          var newCardText = $("<p></p>").text(genreMovies[i].title);
          newCardText.attr("class", "card-text text-center")
          newCardBody.append(newCardText);
          newCard.append(newPoster, newCardBody);
          newCol.append(newCard);
          comedyRow.append(newCol);
        });
      }
    });
  }

  // Function to dynamically generate 4 drama movies from db and OMDB
  function dramaPull() {
    $.get("/api/movies/drama", function(genreData) {
      return genreData;
    }).then(function(response) {
      var genreMovies = response;
      for (let i = 0; i < 4; i++) {
        var queryURL = "http://www.omdbapi.com/?t=" + genreMovies[i].title + "&y=" + genreMovies[i].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("id", genreMovies[i].title + "&y=" + genreMovies[i].year);
          var newPoster = $("<img>");
          newPoster.attr("class", "card-img-top");
          newPoster.attr("alt", genreMovies[i].title);
          newPoster.attr("src", posterURL);
          var newCardBody = $("<div></div>");
          newCardBody.attr("class", "card-body");
          var newCardText = $("<p></p>").text(genreMovies[i].title);
          newCardText.attr("class", "card-text text-center")
          newCardBody.append(newCardText);
          newCard.append(newPoster, newCardBody);
          newCol.append(newCard);
          dramaRow.append(newCol);
        });
      }
    });
  }

  // Function to dynamically generate 4 musicals from db and OMDB
  function musicalPull() {
    $.get("/api/movies/musical", function(genreData) {
      return genreData;
    }).then(function(response) {
      var genreMovies = response;
      for (let i = 0; i < 4; i++) {
        var queryURL = "http://www.omdbapi.com/?t=" + genreMovies[i].title + "&y=" + genreMovies[i].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("id", genreMovies[i].title + "&y=" + genreMovies[i].year);
          var newPoster = $("<img>");
          newPoster.attr("class", "card-img-top");
          newPoster.attr("alt", genreMovies[i].title);
          newPoster.attr("src", posterURL);
          var newCardBody = $("<div></div>");
          newCardBody.attr("class", "card-body");
          var newCardText = $("<p></p>").text(genreMovies[i].title);
          newCardText.attr("class", "card-text text-center")
          newCardBody.append(newCardText);
          newCard.append(newPoster, newCardBody);
          newCol.append(newCard);
          musicalRow.append(newCol);
        });
      }
    });
  }

  // Function to dynamically generate 4 musicals from db and OMDB
  function animatedPull() {
    $.get("/api/movies/animation", function(genreData) {
      return genreData;
    }).then(function(response) {
      var genreMovies = response;
      for (let i = 0; i < 4; i++) {
        var queryURL = "http://www.omdbapi.com/?t=" + genreMovies[i].title + "&y=" + genreMovies[i].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("id", genreMovies[i].title + "&y=" + genreMovies[i].year);
          var newPoster = $("<img>");
          newPoster.attr("class", "card-img-top");
          newPoster.attr("alt", genreMovies[i].title);
          newPoster.attr("src", posterURL);
          var newCardBody = $("<div></div>");
          newCardBody.attr("class", "card-body");
          var newCardText = $("<p></p>").text(genreMovies[i].title);
          newCardText.attr("class", "card-text text-center")
          newCardBody.append(newCardText);
          newCard.append(newPoster, newCardBody);
          newCol.append(newCard);
          animatedRow.append(newCol);
        });
      }
    });
  }

  $(document).on("click", ".card", function () {
    var chosenMovie = $(this).attr("movie-id");
    $.get("/api/" + chosenMovie, function(movieData) {
      return movieData;
    }).then(function(response) {
      var movieInfo = response;
      var modalURL = "http://www.omdbapi.com/?t=" + movieInfo[0].title + "&y=" + movieInfo[0].year + "&apikey=7144e1fa";
      $.ajax({
        url: modalURL,
        method: "GET"
      }).then(function(modalOMDB) {
        modalTitle.text(movieInfo[0].title);
        modalPoster.attr("src", modalOMDB.Poster);
        modalInfo.text("Year of Release: " + modalOMDB.Year + "; Runtime: " + modalOMDB.Runtime + "; Director: " + modalOMDB.Director);
        modalPlot.text(modalOMDB.Plot);
        if (movieInfo[0].isReserved) {
          modalReserved.empty();
          var reservedText = $("<p>Oh no! This movie is currently unavailable. Please check again later</p>");
          modalReserved.html(reservedText);
        } else {
          modalReserved.empty();
          var reserveButton = $("<button></button>");
          reserveButton.attr("class", "btn btn-success reserve-btn");
          reserveButton.attr("movieID", movieInfo[0].id);
          reserveButton.text("Reserve Film");
          modalReserved.html(reserveButton);
        }
        $("#chosen-movie-modal").modal('toggle');
      });
    });
  });

  // Need to figure out how to set up and use the update route
  $(document).on("click", ".reserve-btn", function () {
    var reservedMovie = $(this).attr("movieID");
    console.log(reservedMovie);
    $.ajax({
      method: "PUT",
      url: "/api/movies/",
      data: {
        isReserved: 1
      }
    }).then(function(response) {
      console.log("Testing response: ", response);
      // return response;
    });
  });
});
