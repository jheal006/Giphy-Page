//SETUP variables
//==================================================

// This variable will hold the API key given to us from GIPHY

var APIkey = '83924bd3c22a49f49846ddd69574552e';

// These variables will hold the results we get from the user's search via HTML

var searchTerm = "elmo";
var numResults = 0;

//queryURLBase will begin our API request string. The search will be appended to the appropriate position
// when the user hits the search button

var queryURL = "https://api.giphy.com/v1/gifs/search?" + "api_key=" + APIkey + "&q=" + searchTerm;

//FUNCTIONS
// ============================================

//This runQuery function expects one parameter:
//the the final URL to retrieve the giphys
function runQuery(queryURL) {

  //The AJAX function uses queryURL and GETS the JSON
  // data associated with it.

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response){

    //Log the URL so we have acces to it for troubleshooting
    console.log("----------------------");
    console.log("URL: " + queryURL);
    console.log("----------------------");

    //Log the Response to console, where it will be returned as an object
    console.log(response);
    console.log("-------------------");

  });



}
