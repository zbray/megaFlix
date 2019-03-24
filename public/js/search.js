//Search API
console.log("hello!");
$("#submit-btn").on("click", function() {
  event.preventDefault();
  console.log("clicked!");
  var searchedTitle = $("#title-search-button")
    .val()
    .trim();
  console.log("searched title: " + searchedTitle);
  // searchedTitle = searchedTitle.replace(/\s+/g, "").toLowerCase();

  $.get("/api/" + searchedTitle, function(data) {
    console.log("/13 searchedTitle: " + searchedTitle);
    // log the data to our console
    console.log("/15 data: " + data);
    $("#well-section").empty();
    if (!data) {
      $("#well-section").append(
        "<h2> Nothing was found with your search. Try again. </h2>"
      );
    } else {
      $("#well-section").append("<h2>" + data.title + "</h2>");
      $("#well-section").append("<h3>Year of Release: " + data.year + "</h3>");
      $("#well-section").append("<h3>Genre: " + data.genre + "</h3>");
      $("#well-section").append("<h3>Price: " + data.price + "</h3>");
      $("#well-section").append("<h3>Format: " + data.format + "</h3>");
    }
  });
});
