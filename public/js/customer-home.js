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
          var newCol = $("<div class='col-3'>");
          newCol.append("<div class='card' id='" + genreMovies[i].title + "-img'>");
          newCol.append("<img src='" + posterURL + "' class='card-img-top' alt='" + genreMovies[i].title + "'>");
          newCol.append("<div class='card-body'>");
          newCol.append("<p class='card-text text-center'>" + genreMovies[i].title + "</p>");
          newCol.append("</div> </div> </div>");
          actionRow.append(newCol);
        });
      }
    });
  }
});
