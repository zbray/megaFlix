$(document).ready(function() {
  // References to search input
  var filmTitle = $("#db-title-search");
  var posterURL = "";

  // ============================
  // DEFINE FUNCTIONS
  // ============================

  // Function to search db for specific title
  function movieSearch(filmTitle, cb) {
    $.get("/api/" + filmTitle, function(api) {
      if (!api[0]) {
        // If there is no match in db, no data found
        console.log("No data found!");
      } else {
        // If there are any matches in db, proceed with search functionality
        // We need to return api to use it in the .then method
        return api;
      }
    }).then(function(response) {
      var movieArray = response;
      for (let i = 0; i < movieArray.length; i++) {
        var queryURL = "http://www.omdbapi.com/?t=" + movieArray[i].title + "&apikey=7144e1fa";
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(OMDBresponse) {
          posterURL = OMDBresponse.Poster;
          $("#well-section").append("<h2>" + movieArray[i].title + "</h2>");
          $("#well-section").append("<h3>Year of Release: " + movieArray[i].year + "</h3>");
          $("#well-section").append("<h3>Genre: " + movieArray[i].genre + "</h3>");
          $("#well-section").append("<h3>Price: " + movieArray[i].price + "</h3>");
          $("#well-section").append("<h3>Format: " + movieArray[i].format + "</h3>");
          $("#well-section").append("<img src='" + posterURL + "'>");
        });
        }
    });
  }

  $("#db-search-btn").on("click", function() {
    event.preventDefault();
    movieSearch(filmTitle.val());
  });
});