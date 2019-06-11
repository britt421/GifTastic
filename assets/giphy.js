
//Initial array of searchnames
var searchnames = ["Brian", "Erik", "Baggio", "James"];

//Function for displaying GIF data
function renderButtons (){
//console.log("IN RB")
//Deleting the GIF buttons prior to adding new GIF buttons
$("#buttons-view").empty();

//Looping through the array of searchsearchnames
for (var i = 0; i < searchnames.length; i++) {
//console.log("IN LOOP")
//Dynamically generating buttons for each name in the array
var a = $("<button>")

//Adding a class
a.addClass("gifname");
//console.log(searchnames[i])
//Adding a data-attribute with a value of the GIF at index i
a.attr("data-name", searchnames[i]);

//Providing the button's text with a value of the GIF at index i
a.text(searchnames[i]);
//console.log(a)
//Addingthe button to the HTML
$("#buttons-view").append(a);
}
}

$("#add-gif").on("click", function(event) {
    event.preventDefault();
    //console.log("HI")
    // This line grabs the input from the textbox
    var gifname = $("#gif-input").val().trim();
//console.log(gifname)
    // Adding movie from the textbox to our array
    searchnames.push(gifname);
//console.log(searchnames)
    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
  });


renderButtons();

    // displayMovieInfo function re-renders the HTML to display the appropriate content
    function displayGif() {

        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=%22" + gif + "%22&api_key=38B0q6Q4JZ3mp3YqyHQMFz3PBAADF2NV&limit=10";
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
//console.log(response);
var searchDiv = $("<div class='search'>");
var results = response.data;
      // var newRow = $("<div class='row'>");
      for (var i = 0; i < results.length; i++) {
       
        var imgURL = results[i].images.fixed_height.url;
        //console.log(imgURL)
        //console.log(results[i].images.fixed_height_still.url)
        var image = $("<img>").attr("src", imgURL);
        ////console.log(image);
        image.attr("data-state", "still");
        image.attr("data-still", results[i].images.fixed_height.url);
        image.attr("data-animate", results[i].images.fixed_height_still.url);
        image.addClass("gif_img col md-5");
        console.log(image)
        searchDiv.append(image); // Appending the image  
        $("#gifs-appear-here").prepend(searchDiv);
      }   
        // var newColumn = $("<div class='col-md-4'>");
        // var newTag = $("<p>");
        //   newTag.text("Rating: " +  results[i].rating);
        //   newColumn.prepend(newTag);
        //   newColumn.prepend(image);
        //   newRow.append(newColumn);
        
          // Creating a div to hold the movie
        //   var movieDiv = $("<div class='movie'>");


        //   // Retrieving the URL for the image
        //   var imgURL = response.Poster;

        //   // Creating an element to hold the image
        //   var image = $("<img>").attr("src", imgURL);

        //   // Appending the image
        //   movieDiv.append(image);

        //   // Putting the entire movie above the previous movies
        //   $("#movies-view").prepend(movieDiv);
    
    })
      }
      $(document).on("click", ".gifname", displayGif);

// //displayGIFinfo function re-renders the HTML to display the appropriate content
// function displayGIFinfo() {
//     var name = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/search" + name + "api_key=38B0q6Q4JZ3mp3YqyHQMFz3PBAADF2NV&limit=10";
// }

// //Creating an AJAX call for the specific GIF button being clicked
// $.ajax({
//     url: queryURL,
//     method: "GET"
//  }).then(function(response){

// //Creating a div to hold the GIFs
// var  

// })

