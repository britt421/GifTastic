

//Initial array of names
var names = ["Brian", "Erik", "Baggio", "James"];

//Function for displaying GIF data
function renderButtons (){

//Deleting the GIF buttons prior to adding new GIF buttons
$("buttons-view").empty();

//Looping through the array of names
for (var i = 0; i < movies.length; i++) {

//Dynamically generating buttons for each name in the array
var a = $("<button>")

//Adding a class
a.addClass("name");

//Adding a data-attribute with a value of the GIF at index i
a.attr("data-name", names[i]);

//Providing the button's text with a value of the GIF at index i
a.text(names[i]);

//Addingthe button to the HTML
$("#buttons-view").append(a);

}
}



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

