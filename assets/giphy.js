

//Initial array of names
var names = ["Brian", "Erik", "Baggio", "James"];

//displayGIFinfo function re-renders the HTML to display the appropriate content
function displayGIFinfo() {
    var name = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search" + name + "api_key=38B0q6Q4JZ3mp3YqyHQMFz3PBAADF2NV&limit=10";
}

//Creating an AJAX call for the specific GIF button being clicked
$.ajax({
    url: queryURL,
    method: "GET"
 }).then(function(response){


})

