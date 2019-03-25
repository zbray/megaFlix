//Search API
console.log("hello!");

$("#omdb-search-btn").on("click", function() {
  event.preventDefault();
  var searchTerm = $("#omdb-title-search");
  console.log("/7 searchTerm: " + searchTerm.val());
  var queryURL =
    "http://www.omdbapi.com/?t=" + searchTerm.val() + "&apikey=7144e1fa";
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log("/39 response: " + response.data);
    // var results = (response = response.data);
  });
});

// $("#db-search-btn").on("click", function () {
//   event.preventDefault();
//   console.log("clicked!");
//   var dbSearch = $("#db-search-btn")
//     .val()
//     .trim();
//   console.log("searched title: " + dbSearch);
//   // searchedTitle = searchedTitle.replace(/\s+/g, "").toLowerCase();

//   $.get("/api/" + dbSearch, function (data) {
//     console.log("/13 searchedTitle: " + dbSearch);
//     // log the data to our console
//     console.log("/15 data: " + data);
//     $("#well-section").empty();
//     if (!data) {
//       $("#well-section").append(
//         "<h2> Nothing was found with your search. Try again. </h2>"
//       );
//     } else {
//       $("#well-section").append("<h2>" + data.title + "</h2>");
//       $("#well-section").append("<h3>Year of Release: " + data.year + "</h3>");
//       $("#well-section").append("<h3>Genre: " + data.genre + "</h3>");
//       $("#well-section").append("<h3>Price: " + data.price + "</h3>");
//       $("#well-section").append("<h3>Format: " + data.format + "</h3>");
//     }
//   });
// });
