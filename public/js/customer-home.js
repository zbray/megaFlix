$(document).ready(function() {
  // References to HTML elements where movies will be populated
  var actionRow = $(".action-row");
  var comedyRow = $(".comedy-row");
  var dramaRow = $(".drama-row");
  var musicalRow = $(".musical-row");
  var animatedRow = $(".animated-row");
  var movieContainer = $(".movie-container");
  var resultsRow = $(".results-row");

  // References to various elements of modal
  var modalTitle = $(".modal-title");
  var modalPoster = $("#modal-image");
  var modalInfo = $("#modal-info");
  var modalRuntime = $("#modal-runtime");
  var modalDirector = $("#modal-director");
  var modalPlot = $("#modal-plot");
  var modalReserved = $("#modal-reserved");
  
  // Defining this variable globally for use across app
  var posterURL;

  // Call functions to dynamically render movies on customer homepage
  moviePull("action");
  moviePull("comedy");
  moviePull("drama");
  moviePull("musical");
  moviePull("animation");

  // ============================
  // DEFINE FUNCTIONS
  // ============================

  // All-in-one movie loading for customer-homepage
  function moviePull(genre) {
    var movieGenre = genre.toString();
    $.get("/api/movies/" + movieGenre, function(genreData) {
      return genreData;
    }).then(function(response) {
      var displayMovies = response;
      for (let i = 0; i < 4; i++) {
        var queryURL = "https://www.omdbapi.com/?t=" + displayMovies[i].title + "&y=" + displayMovies[i].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3 mt-2");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("movie-id", displayMovies[i].id);
          var newPoster = $("<img>");
          newPoster.attr("class", "card-img-top");
          newPoster.attr("alt", displayMovies[i].title);
          newPoster.attr("src", posterURL);
          var newCardBody = $("<div></div>");
          newCardBody.attr("class", "card-body");
          var newCardText = $("<p></p>").text(displayMovies[i].title);
          newCardText.attr("class", "card-text text-center")
          newCardBody.append(newCardText);
          newCard.append(newPoster, newCardBody);
          newCol.append(newCard);
          if (movieGenre === "action") {
            actionRow.append(newCol);
          } else if (movieGenre === "comedy") {
            comedyRow.append(newCol);
          } else if (movieGenre === "drama") {
            dramaRow.append(newCol);
          } else if (movieGenre === "musical") {
            musicalRow.append(newCol);
          } else if (movieGenre === "animation") {
            animatedRow.append(newCol);
          };
        });
      }
    });
  }

  // Function to search db for movie based on user input
  function searchResults(filmTitle) {
    $.get("/api/title/" + filmTitle, function(data) {
      return data
    }).then(function(response) {
      var movieArray = response;
      if (!movieArray[0]) {
        // If there is no match in db, no data found
        movieContainer.empty();
        var newErrorRow = $("<div></div>");
        newErrorRow.attr("class", "row");
        var newRow = $("<div></div>");
        newRow.attr("class", "row error-row");
        var searchHeading = $("<h3></h3>").text("We're sorry! That movie isn't in our inventory yet. Please try another movie.");
        newErrorRow.append(searchHeading);
        movieContainer.append(newErrorRow);
        movieContainer.append(newRow);
      } else {
        console.log("Testing response: ", movieArray);
        movieContainer.empty();
        var newHeadingRow = $("<div></div>");
        newHeadingRow.attr("class", "row");
        var newRow = $("<div></div>");
        newRow.attr("class", "row results-row");
        var searchHeading = $("<h3></h3>").text("Search Results");
        newHeadingRow.append(searchHeading);
        movieContainer.append(newHeadingRow);
        movieContainer.append(newRow);
        for (let i = 0; i < movieArray.length; i++) {
          var queryURL = "https://www.omdbapi.com/?t=" + movieArray[i].title + "&y=" + movieArray[i].year + "&apikey=7144e1fa";
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(OMDBresponse) {
            posterURL = OMDBresponse.Poster;
            var newCol = $("<div></div>");
            newCol.attr("class", "col-3 mt-4 mb-4");
            var newCard = $("<div></div>");
            newCard.attr("class", "card");
            newCard.attr("movie-id", movieArray[i].id);
            var newPoster = $("<img>");
            newPoster.attr("class", "card-img-top");
            newPoster.attr("alt", movieArray[i].title);
            newPoster.attr("src", posterURL);
            var newCardBody = $("<div></div>");
            newCardBody.attr("class", "card-body");
            var newCardText = $("<p></p>").text(movieArray[i].title);
            newCardText.attr("class", "card-text text-center")
            newCardBody.append(newCardText);
            newCard.append(newPoster, newCardBody);
            newCol.append(newCard);
            newRow.append(newCol);
          });
        };
      };
    });
  };

  // Function to search db for movies based on genre
  function allGenre(genre) {
    var genreSearch = genre.toString();
    movieContainer.empty();
    var newHeadingRow = $("<div></div>");
    newHeadingRow.attr("class", "row");
    var genreRow = $("<div></div>");
    genreRow.attr("class", "row results-row");
    var searchHeading = $("<h3></h3>").text("All " + genreSearch + " Movies");
    newHeadingRow.append(searchHeading);
    movieContainer.append(newHeadingRow);
    movieContainer.append(genreRow);
    $.get("/api/movies/" + genreSearch, function(genreData) {
      return genreData;
    }).then(function(response) {
      var genreMovies = response;
      console.log("genreMovies", genreMovies);
      for (let j = 0; j < genreMovies.length; j++) {
        var queryURL = "https://www.omdbapi.com/?t=" + genreMovies[j].title + "&y=" + genreMovies[j].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3 mt-4 mb-4");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("movie-id", genreMovies[j].id);
          var newPoster = $("<img>");
          newPoster.attr("class", "card-img-top");
          newPoster.attr("alt", genreMovies[j].title);
          newPoster.attr("src", posterURL);
          var newCardBody = $("<div></div>");
          newCardBody.attr("class", "card-body");
          var newCardText = $("<p></p>").text(genreMovies[j].title);
          newCardText.attr("class", "card-text text-center")
          newCardBody.append(newCardText);
          newCard.append(newPoster, newCardBody);
          newCol.append(newCard);
          genreRow.append(newCol);
        });
      };
    });
  };

  // ============================
  //    SET UP EVENT LISTENERS
  // ============================

  // When user submits search form, run the searchResults function
  $("form").submit(function(event) {
    event.preventDefault();
    resultsRow.empty();
    var searchTerm = $(".movie-search-bar").val().trim();
    console.log("Testing search term: ", searchTerm);
    searchResults(searchTerm); 
  });

  // When user clicks on a card, toggle modal functionality
  $(document).on("click", ".card", function () {
    var chosenMovie = $(this).attr("movie-id");
    console.log("Movie ID: ", chosenMovie);
    $.get("/api/id/" + chosenMovie, function(movieData) {
      return movieData;
    }).then(function(response) {
      var movieInfo = response;
      console.log("Testing movieInfo: ", movieInfo);
      var modalURL = "https://www.omdbapi.com/?t=" + movieInfo[0].title + "&y=" + movieInfo[0].year + "&apikey=7144e1fa";
      $.ajax({
        url: modalURL,
        method: "GET"
      }).then(function(modalOMDB) {
        modalTitle.text(movieInfo[0].title);
        modalPoster.attr("src", modalOMDB.Poster);
        modalInfo.text("Year of Release: " + modalOMDB.Year);
        modalRuntime.text("Runtime: " + modalOMDB.Runtime);
        console.log("FIND IT "+ JSON.stringify(modalOMDB));
        modalDirector.text("Director: " + modalOMDB.Director);
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

  // When user clicks reserve button, db is updated
  $(document).on("click", ".reserve-btn", function () {
    var reservedMovie = $(this).attr("movieID");
    // console.log(reservedMovie);
    $.ajax({
      method: "PUT",
      url: "/api/movies/",
      data: {
        frontendid: reservedMovie,
        isReserved: 1
      }
    }).then(function(response) {
      console.log("Testing response: ", response);
      modalReserved.empty();
      var reservedConfirmation = $("<p>Your reservation has been processed! Please pick up your movie in the next 3 days.</p>");
      modalReserved.html(reservedConfirmation);
    });
  });

  $(document).on("click", ".action-link", function () {
    allGenre("Action");
  });

  $(document).on("click", ".comedy-link", function () {
    allGenre("Comedy");
  });
  
  $(document).on("click", ".drama-link", function () {
    allGenre("Drama");
  });

  $(document).on("click", ".musical-link", function () {
    allGenre("Musical");
  });

  $(document).on("click", ".animated-link", function () {
    allGenre("Animated");
  });

});