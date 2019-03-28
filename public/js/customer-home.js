$(document).ready(function() {
  // References to HTML elements where movies will be populated
  var actionRow = $(".action-row");
  var posterURL;
  // If this works, replicate for each genre-row

  // Call function to dynamically render movies on customer homepage
  moviePull(); 

  // ============================
  // DEFINE FUNCTIONS
  // ============================

  // Function to search db for movies with genre of action
  function moviePull() {
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
          newCard.attr("id", genreMovies[i].title + "-img");
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
          console.log("Testing newCol: ", newCol);
          actionRow.append(newCol);
        });
      }
    });
  }
});
