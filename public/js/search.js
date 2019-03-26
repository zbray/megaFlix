//Search API
console.log("hello!");

var posterURL;

function OMDBSearch(queryTerm) {
  var queryURL = "http://www.omdbapi.com/?t=" + queryTerm + "&apikey=7144e1fa";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    posterURL = response.Poster;
    console.log("/39 response: " + posterURL);
    $("#well-section").append("<img src='" + posterURL + "'>");
    // var results = (response = response.data);
  });
};


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

$("#db-search-btn").on("click", function () {
  event.preventDefault();
  console.log("clicked!");
  var dbSearch = $("#db-title-search")
    .val()
    .trim();
  console.log("searched title: " + dbSearch);
  // searchedTitle = searchedTitle.replace(/\s+/g, "").toLowerCase();

  $.get("/api/" + dbSearch, function (data) {
    console.log("/13 searchedTitle: " + dbSearch);
    // log the data to our console
    console.log("/15 data: " + data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").append(
        "<h2> Nothing was found with your search. Try again. </h2>"
      );
    } else {
      OMDBSearch(dbSearch);
      $("#well-section").append("<h2>" + data[0].title + "</h2>");
      $("#well-section").append("<h3>Year of Release: " + data[0].year + "</h3>");
      $("#well-section").append("<h3>Genre: " + data[0].genre + "</h3>");
      $("#well-section").append("<h3>Price: " + data[0].price + "</h3>");
      $("#well-section").append("<h3>Format: " + data[0].format + "</h3>");
      // $("#well-section").append("<img src='" + posterURL + "'>");
    }
  });
});
