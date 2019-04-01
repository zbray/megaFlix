$(document).ready(function() {
  // Activate tooltips
  // $("[data-toggle="tooltip"]").tooltip();

  var dbTable = $("#db-table"); 
  // Function to add rows to table
  // function addRow() {
  //   var movieID 
  // };
  
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
        var moviePrice = Math.trunc(dbMovies[k].price);
        var movieFormat = dbMovies[k].format;
        var movieReserved = dbMovies[k].isReserved;
        if (movieReserved) {
          var reserved = "<td><span class='custom-checkbox'><input type='checkbox' id='reserved' name='options[]' value='1' checked><label for='reserved'></label></span></td>";
          var checkIn = "<td><span class='custom-checkbox'><input type='checkbox' id='checkIn' name='options[]' value='1'><label for='checkIn'></label></span></td>";
          var checkOut = "<td><span class='custom-checkbox'><input type='checkbox' id='checkOut' name='options[]' value='1'><label for='checkOut'></label></span></td>";
          var reservedCols = reserved + checkIn + checkOut;
        } else {
          var reserved = "<td><span class='custom-checkbox'><input type='checkbox' id='reserved' name='options[]' value='1'><label for='reserved'></label></span></td>";
          var checkIn = "<td><span class='custom-checkbox'><input type='checkbox' id='checkIn' name='options[]' value='1'><label for='checkIn'></label></span></td>";
          var checkOut = "<td><span class='custom-checkbox'><input type='checkbox' id='checkOut' name='options[]' value='1'><label for='checkOut'></label></span></td>";
          var reservedCols = reserved + checkIn + checkOut;
        }

        // Create html for new table rows
        var idCol = "<td>" + movieID + "</td>";
        var titleCol = "<td>" + movieTitle + "</td>";
        var yearCol = "<td>" + movieYear + "</td>";
        var genreCol = "<td>" + movieGenre + "</td>";
        var priceCol = "<td>" + moviePrice + "</td>";
        var formatCol = "<td>" + movieFormat + "</td>";
        var modalCols = "<td><a href='#editMovieModal' class='edit' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='edit'>&#xE254;</i></a><a href='#deleteMovieModal' class='delete' data-toggle='modal'><i class='material-icons' data-toggle='tooltip' title='delete'>&#xE872;</i></a></td>";
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
  // // Select/Deselect checkboxes
  // var checkbox = $('table tbody input[type="checkbox"]');
  // $("#selectAll").click(function () {
  //     if (this.checked) {
  //         checkbox.each(function () {
  //             this.checked = true;
  //         });
  //     } else {
  //         checkbox.each(function () {
  //             this.checked = false;
  //         });
  //     }
  // });
  // checkbox.click(function () {
  //     if (!this.checked) {
  //         $("#selectAll").prop("checked", false);
  //     }
  // });
});
