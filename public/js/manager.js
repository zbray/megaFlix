$(document).ready(function() {
  var dbTable = $("#db-table");
  var addMovieForm = $("#add-movie-form");
  
  // Call dbPull function to populate manager table from db
  dbPull();

  // Function to pull movies from db
  function dbPull() {
    $.get("/api/movies/", function(dbData) {
      return dbData;
    }).then(function(response) {
      var dbMovies = response;
      console.log("Testing db pull", dbMovies);
      for (let k = 0; k < dbMovies.length; k++) {
        var movieID = dbMovies[k].id;
        var movieTitle = dbMovies[k].title;
        var movieYear = dbMovies[k].year;
        var movieGenre = dbMovies[k].genre;
        var moviePrice = dbMovies[k].price;
        var movieFormat = dbMovies[k].format;
        var movieReserved = dbMovies[k].isReserved;
        
        // Create checkbox columns in table depending on isReserved status from db
        if (movieReserved) {
          var reserved = "<td><span class='custom-checkbox'><input type='checkbox' id='reserved' movie-id='" + movieID + "' name='options[]' value='1' checked><label for='reserved'></label></span></td>";
          var checkIn = "<td><span class='custom-checkbox'><input type='checkbox' id='checkIn' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkIn'></label></span></td>";
          var checkOut = "<td><span class='custom-checkbox'><input type='checkbox' id='checkOut' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkOut'></label></span></td>";
          var reservedCols = reserved + checkIn + checkOut;
        } else {
          var reserved = "<td><span class='custom-checkbox'><input type='checkbox' id='reserved' movie-id='" + movieID + "' name='options[]' value='1'><label for='reserved'></label></span></td>";
          var checkIn = "<td><span class='custom-checkbox'><input type='checkbox' id='checkIn' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkIn'></label></span></td>";
          var checkOut = "<td><span class='custom-checkbox'><input type='checkbox' id='checkOut' movie-id='" + movieID + "' name='options[]' value='1'><label for='checkOut'></label></span></td>";
          var reservedCols = reserved + checkIn + checkOut;
        }

        // Create html for new table rows
        var idCol = "<td>" + movieID + "</td>";
        var titleCol = "<td>" + movieTitle + "</td>";
        var yearCol = "<td>" + movieYear + "</td>";
        var genreCol = "<td>" + movieGenre + "</td>";
        var priceCol = "<td>" + moviePrice + "</td>";
        var formatCol = "<td>" + movieFormat + "</td>";
        var modalCols = "<td><a href='#editMovieModal' class='edit' movie-id='" + movieID + "' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='edit'>&#xE254;</i></a><a href='#deleteMovieModal' class='delete' movie-id='" + movieID + "' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='delete'>&#xE872;</i></a></td>";
        var rowData = "<tr>" + idCol + titleCol + yearCol + genreCol + priceCol + formatCol + reservedCols + modalCols + "</tr>";
        
        // Append new row (comprised of data from db) to table
        dbTable.append(rowData);
      }
    });
  }

  // Filter table rows based on searched term
  $("#search").on("keyup", function() {
    var term = $(this)
      .val()
      .toLowerCase();
    $("table tbody tr").each(function() {
      $row = $(this);
      var name = $row
        .find("td:nth-child(2)")
        .text()
        .toLowerCase();
      console.log(name);
      if (name.search(term) < 0) {
        $row.hide();
      } else {
        $row.show();
      }
    });
  });

  // Add Movie Modal functionality
  // When user clicks "Add" button, new movie details are posted to db
  $("#add-movie-form").on("submit", function(event) {
    event.preventDefault();
    var newTitle = $(".new-title").val().trim();
    var newYear = $(".new-year").val().trim();
    var newGenre = $(".new-genre").val().trim();
    var newPrice = $(".new-price").val().trim();
    var newFormat = $(".new-format").val().trim();
    $.ajax({
      method: "POST",
      url: "/api/movies/",
      data: {
        formTitle: newTitle,
        formYear: newYear,
        formGenre: newGenre,
        formPrice: newPrice,
        formFormat: newFormat,
        formReserved: false
      }
    }).then(function(response) {
      console.log("Testing response: ", response);
      $(".new-title").empty();
      $(".new-year").empty();
      $(".new-genre").empty();
      $(".new-price").empty();
      $(".new-format").empty();
      window.location.href = "/manager";
    });
  });

  // Edit Movie Modal functionality
  // When user submits the "Edit Movie" form, that movie will be updated in db
  $(".edit").on("click", function() {
    var editID = $(this).attr("movie-id");
    $("#edit-movie-form").on("submit", function(event) {
      event.preventDefault();
      console.log("Testing movie-id grab", editID);
      var editTitle = $(".edit-title").val().trim();
      var editYear = $(".edit-year").val().trim();
      var editGenre = $(".edit-genre").val().trim();
      var editPrice = $(".edit-price").val().trim();
      var editFormat = $(".edit-format").val().trim();
      $.ajax({
        method: "PUT",
        url: "/api/movies/",
        data: {
          frontendid: editID,
          formTitle: editTitle,
          formYear: editYear,
          formGenre: editGenre,
          formPrice: editPrice,
          formFormat: editFormat,
          formReserved: false
        }
      }).then(function(response) {
        console.log("Testing response: ", response);
        $(".new-title").empty();
        $(".new-year").empty();
        $(".new-genre").empty();
        $(".new-price").empty();
        $(".new-format").empty();
        window.location.href = "/manager";
      });
    });
  })
  
});