$(document).ready(function() {
  // References to search input
  var filmTitle = $("#db-title-search");
  var posterURL = "";
  var results = [];

  // ============================
  // DEFINE FUNCTIONS
  // ============================

  // Function to search db for specific title
  function movieSearch(filmTitle, cb) {
    $.get("/api/" + filmTitle, function(data) {
      if (!data[0]) {
        // If there is no match in db, no data found
        console.log("No data found!");
      } else {
        // If there are any matches in db, proceed with search functionality
        console.log("Data. Yay!");
        for (var i = 0; i < data.length; i++) {
          results.push(data[i]);
          OMDBPosterSearch(data[i].title);
          console.log("Testing Results array: ", results);
        }
        cb(results);
      }
    });
  }

  // Function to query OMDB API for movie poster
  function OMDBPosterSearch(posterTitle) {
    // for (var m = 0; m < arr.length; m++) {
      var queryURL = "http://www.omdbapi.com/?t=" + posterTitle + "&apikey=7144e1fa";
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        posterURL = response.Poster;
        // results.imageURL = posterURL;
        $("#well-section").append("<img src='" + posterURL + "'>");
      });
    // }
    // for (var k = 0; k < results.length; k++) {
    //   $("#well-section").append("<h2>" + results[k].title + "</h2>");
    //   $("#well-section").append("<h3>Year of Release: " + results[k].year + "</h3>");
    //   $("#well-section").append("<h3>Genre: " + results[k].genre + "</h3>");
    //   $("#well-section").append("<h3>Price: " + results[k].price + "</h3>");
    //   $("#well-section").append("<h3>Format: " + results[k].format + "</h3>");
    //   $("#well-section").append("<img src='" + results[k].imageURL + "'>");
    // }
  }
    
    // var queryURL = "http://www.omdbapi.com/?t=" + posterTitle + "&apikey=7144e1fa";
    // console.log(queryURL);
    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //   posterURL = response.Poster;
    //   for (var j = 0; j < results.length; j++) {
    //     results[j].imageURL = posterURL;
    //   }
    //   renderData(results);
    // });
  // }

  // Function to render data in browser
  function renderData(source) {
    for (var k = 0; k < source.length; k++) {
      $("#well-section").append("<h2>" + source[k].title + "</h2>");
      $("#well-section").append("<h3>Year of Release: " + source[k].year + "</h3>");
      $("#well-section").append("<h3>Genre: " + source[k].genre + "</h3>");
      $("#well-section").append("<h3>Price: " + source[k].price + "</h3>");
      $("#well-section").append("<h3>Format: " + source[k].format + "</h3>");
      // $("#well-section").append("<img src='" + source[k].imageURL + "'>");
    }
  }

  $("#db-search-btn").on("click", function() {
    event.preventDefault();
    movieSearch(filmTitle.val(), renderData);
  });
});

// $("#omdb-search-btn").on("click", function() {
//   event.preventDefault();
//   var searchTerm = $("#omdb-title-search");
//   console.log("/7 searchTerm: " + searchTerm.val());
//   var queryURL =
//     "http://www.omdbapi.com/?t=" + searchTerm.val() + "&apikey=7144e1fa";
//   console.log(queryURL);
//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log("/39 response: " + response.data);
//     // var results = (response = response.data);
//   });
// });

// ============================================
// Old search click event
// ============================================
// $("#db-search-btn").on("click", function () {
//   event.preventDefault();
//   var searchedTitle = $("#db-title-search")
//     .val()
//     .trim();
//   console.log("searched title: " + searchedTitle);
//   // searchedTitle = searchedTitle.replace(/\s+/g, "").toLowerCase();

//   $.get("/api/" + searchedTitle, function (data) {
//     console.log("/13 searchedTitle: " + searchedTitle);
//     // log the data to our console
//     console.log("/15 data: " + data);
//     $("#well-section").empty();
//     if (!data) {
//       $("#well-section").append(
//         "<h2> Nothing was found with your search. Try again. </h2>"
//       );
//     } else {
//       OMDBPosterSearch(searchedTitle);
//       $("#well-section").append("<h2>" + data[0].title + "</h2>");
//       $("#well-section").append("<h3>Year of Release: " + data[0].year + "</h3>");
//       $("#well-section").append("<h3>Genre: " + data[0].genre + "</h3>");
//       $("#well-section").append("<h3>Price: " + data[0].price + "</h3>");
//       $("#well-section").append("<h3>Format: " + data[0].format + "</h3>");
//       $("#well-section").append("<img src='" + posterURL + "'>");
//     }
//   });
// });