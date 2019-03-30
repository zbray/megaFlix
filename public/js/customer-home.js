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
  var modalPlot = $("#modal-plot");
  
  var posterURL;

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
  };

  // Function to search db for movie based on user input
  function searchResults(filmTitle) {
    $.get("/api/" + filmTitle, function(data) {
      if (!data[0]) {
      // If there is no match in db, no data found
      console.log("No data found!");
      } else {
      // If there are any matches in db, proceed with search functionality
      // We need to return api to use it in the .then method
      return data;
      }
    }).then(function(response) {
      var movieArray = response;
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
        var queryURL = "http://www.omdbapi.com/?t=" + movieArray[i].title + "&y=" + movieArray[i].year + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          var newCol = $("<div></div>");
          newCol.attr("class", "col-3 mt-5");
          var newCard = $("<div></div>");
          newCard.attr("class", "card");
          newCard.attr("id", movieArray[i].title + "&y=" + movieArray[i].year);
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
    var chosenMovie = $(this).attr("id");
    console.log(chosenMovie);
    var modalURL = "http://www.omdbapi.com/?t=" + chosenMovie + "&apikey=7144e1fa";
    $.ajax({
      url: modalURL,
      method: "GET"
    }).then(function(modalOMDB) {
      console.log(modalOMDB);
      modalTitle.text(modalOMDB.Title);
      modalPoster.attr("src", modalOMDB.Poster);
      modalInfo.text("Year of Release: " + modalOMDB.Year + "; Runtime: " + modalOMDB.Runtime + "; Director: " + modalOMDB.Director);
      modalPlot.text(modalOMDB.Plot);
      $("#chosen-movie-modal").modal('toggle');
    });
  });
});
