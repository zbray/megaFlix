// $(document).ready(function() {
//   // References to HTML elements where movies will be populated
//   var resultsRow = $(".results-row");
//   // var searchTerm = $(".movie-search-bar").val().trim();
//   var posterURL;
  
//   // ============================
//   // DEFINE FUNCTIONS
//   // ============================

//   // Function to search db for movie based on user input
//   function searchResults(filmTitle) {
//     $.get("/api/" + filmTitle, function(data) {
//       if (!data[0]) {
//       // If there is no match in db, no data found
//       console.log("No data found!");
//       } else {
//       // If there are any matches in db, proceed with search functionality
//       // We need to return api to use it in the .then method
//       return data;
//       }
//     }).then(function(response) {
//       var movieArray = response;
//       for (let i = 0; i < movieArray.length; i++) {
//         var queryURL = "http://www.omdbapi.com/?t=" + movieArray[i].title + "&y=" + movieArray[i].year + "&apikey=7144e1fa";
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         }).then(function(OMDBresponse) {
//           posterURL = OMDBresponse.Poster;
//           var newCol = $("<div></div>");
//           newCol.attr("class", "col-3");
//           var newCard = $("<div></div>");
//           newCard.attr("class", "card");
//           newCard.attr("id", movieArray[i].title + "&y=" + movieArray[i].year);
//           var newPoster = $("<img>");
//           newPoster.attr("class", "card-img-top");
//           newPoster.attr("alt", movieArray[i].title);
//           newPoster.attr("src", posterURL);
//           var newCardBody = $("<div></div>");
//           newCardBody.attr("class", "card-body");
//           var newCardText = $("<p></p>").text(movieArray[i].title);
//           newCardText.attr("class", "card-text text-center")
//           newCardBody.append(newCardText);
//           newCard.append(newPoster, newCardBody);
//           newCol.append(newCard);
//           resultsRow.append(newCol);
//         });
//       };
//     });
//   };

//   // ============================
//   // SET UP CLICK EVENT
//   // ============================
  
//   // When user clicks on search button, run the movieSearch function
//   $("form").submit(function(event) {
//     event.preventDefault();
//     resultsRow.empty();
//     var searchTerm = $(".movie-search-bar").val().trim();
//     console.log("Testing search term: ", searchTerm);
//     searchResults(searchTerm); 
//   });

// });
