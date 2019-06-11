$(document).ready(function () {
    // Initial array
    var nameList = ["Brian", "Erik", "Baggio", "James"];

    // Function for rendering the HTML to display the appropriate content
    function displayGifs() {
        var nameSake = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=%22" + nameSake + "%22&api_key=38B0q6Q4JZ3mp3YqyHQMFz3PBAADF2NV&limit=10";
        
        // Creates AJAX call for the specific button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // Looping through each set of data
            for (var i = 0; i < response.data.length; i++) {
                // Creates new variables for newly rendered gifs and ratings
                var gifDiv = $("<div>");
                var newImage = $("<img>");
                // Assigns new attribute to the data-state, so the image can animate when clicked
                newImage.attr("data-state", "animate");
                newImage.attr("data-animate", response.data[i].images.fixed_height.url)
                // Assigns new attirbute to the data-state, so the image can return to an image when clicked again
                newImage.attr("data-state", "still");
                newImage.attr("data-still", response.data[i].images.fixed_height_still.url)
                gifDiv.append(
                    $("<p>").text("Rated: " + response.data[i].rating),
                    newImage.attr("src", response.data[i].images.fixed_height_still.url)
                )
                $("#gif-view").prepend(gifDiv);
            }
            
            
        })
    }
   
    displayGifs();
    
    // Function for displaying buttons
    function renderButtons() {

        // Deleting the name buttons prior to adding new name buttons
        $("#buttons-view").empty();

        // Looping through the array of names and generating buttons for each
        for (var i = 0; i < nameList.length; i++) {
            var a = $("<button>");
            // Adding a class
            a.addClass("new");
            // Adding a data-attribute 
            a.attr("data-name", nameList[i]);
            // Adding the button's text 
            a.text(nameList[i]);
            // Adding the button to the HTML
            $("#buttons-view").append(a);
        }
    }

    // Function for clicking the "submit" button
    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var userText = $("#user-input").val().trim();
        nameList.push(userText);
        renderButtons();
    })
    renderButtons();

    // Function for clicking on any button with the class of new
    $(document).on("click", ".new", displayGifs);
    renderButtons();

    // Function for clicking an image to make it both animate and stop again
    $(document).on("click", "img", function(event) {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            // $(this).attr("src", $(this).attr("data-animate")); 
        } else if (state === "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    })
})