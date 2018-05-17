require("dotenv").config();

var Spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
});

//console.log(spotify)
//var client = new Twitter(keys.twitter);
    
//Return movie information
if (process.argv[2] == "movie-this") {
    //Return Mr. Nobody information when process.argv[3] is blank
    if (process.argv[3] === undefined) {
        var queryUrl2 = "http://www.omdbapi.com/?t=Mr.Nobody&y=&plot=short&apikey=trilogy";
        //Request OMDB request API to return appropriate data
            request(queryUrl2, function(error, response, body) {
                if (!error && response.statusCode === 200) {
                // If the request is successful
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year of Release: " + JSON.parse(body).Year);
                console.log("Rating: " + JSON.parse(body).Rated);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
                console.log("Production country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Performers: " + JSON.parse(body).Actors);                
            }});  
        } 
    //Return inputted movie name
    else {
        var movieName = process.argv[3]
        var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

        //Request OMDB request API to return appropriate data
        request(queryUrl, function(error, response, body) {
            if (!error && response.statusCode === 200) {
            //console.log(JSON.parse(body))
            // If the request is successful
                console.log("Title: " + JSON.parse(body).Title);
                console.log("Year of Release: " + JSON.parse(body).Year);
                console.log("Rating: " + JSON.parse(body).Rated);
                console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value)
                console.log("Production country: " + JSON.parse(body).Country);
                console.log("Language: " + JSON.parse(body).Language);
                console.log("Plot: " + JSON.parse(body).Plot);
                console.log("Performers: " + JSON.parse(body).Actors);
            
        }});  
    }; 
}

//spotify returns song information   
function doSpotify() {
    
    //Spotify Search for the input "spotify-this-song"
    if (process.argv[2] == "spotify-this-song") {
        //User doesn't input a song
        if (process.argv[3] == undefined) {
            spotify.search({
                type: 'track',
                query: 'The Sign',
                limit: '20',
            },
            function(err, body) { 
                if (err) {
                    return console.log("Error occurred: " + err);
                }
                var stringified = JSON.stringify(body.tracks.items[8], null, 2);
                //console.log(stringified)

                console.log('......')
                console.log(JSON.parse(stringified).artists[0].name);
                console.log("The song's name is: " + JSON.parse(stringified).name + ".");
                console.log("The song " + JSON.parse(stringified).name + " is from the album " + '"' + JSON.parse(stringified).album.name + '".');
                console.log("The song can be heard on Spotify here: " + JSON.parse(stringified).artists[0].external_urls.spotify + ".")
                console.log('......')
            });
        }
        //User does input a song
        else  {
            spotify.search({
                type: 'track',
                query: process.argv[3],
                limit: '1'
            },
            function(err, body) { 
                if (err) {
                    return console.log("Error occurred: " + err);
                }
                var stringified = JSON.stringify(body.tracks.items[0], null, 2);
                //console.log(stringified);
                console.log('......')
                //console.log(typeof stringified);
                //console.log(JSON.parse(stringified));
                console.log(JSON.parse(stringified).artists[0].name);
                console.log("The song's name is: " + JSON.parse(stringified).name + ".");
                console.log("The song " + JSON.parse(stringified).name + " is from the album " + '"' + JSON.parse(stringified).album.name + '".');
                console.log("The song can be heard on Spotify here: " + JSON.parse(stringified).artists[0].external_urls.spotify + ".")
                console.log('......')

            });
        }
    }
    //Run Do What it Says
    if (process.argv[2] == "do-what-it-says") {
        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(",")
            //console.log(data)
            //console.log(dataArr)
            spotify.search({
                type: 'track',
                query: dataArr[1],
                limit: '20',
            },
            function(err, body) { 
                if (err) {
                    return console.log("Error occurred: " + err);
                }
                var stringified = JSON.stringify(body.tracks.items[8], null, 2);
                //console.log(stringified)

                console.log('......')
                console.log(JSON.parse(stringified).artists[0].name);
                console.log("The song's name is: " + JSON.parse(stringified).name + ".");
                console.log("The song " + JSON.parse(stringified).name + " is from the album " + '"' + JSON.parse(stringified).album.name + '".');
                console.log("The song can be heard on Spotify here: " + JSON.parse(stringified).artists[0].external_urls.spotify + ".")
                console.log('......')
            });    
        });
    }
}

doSpotify()
