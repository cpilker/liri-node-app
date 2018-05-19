# liri-node-app
## <u><b>Purpose & Problem Statement</u></b>
The problem faced was to have the <i><u><b>node.js</b></u></i> application receive an input from the user and return information based on the users intent. This application is a rudimentary version of the Google Assistant/Siri/Alexa in which a user receives information based on intent words.

### <u>Specific Requirements</u> - LIRI was required to return information based on progress.argv[2]'s input in GIT - Bash. Inputs included
* `my-tweets` - [not utilized]
* `spotify-this-song` - [utilized]
* `movie-this`- [utilized]
* `do-what-it-says`- [utilized]

*My program did not utilize my-tweets.*

### <u>Background Node APIs</u>
* [spotify-this-song](https://www.npmjs.com/package/node-spotify-api)
* `movie-this`- OMDB (API Key Trilogy)
* [do-what-it-says](https://www.npmjs.com/package/node-spotify-api)
## <u><b>User Instructions</u></b>
* Prior to utilizing the project it is important to note there are files not incorporated in the git push in order to protect owner API keys. 
    * These keys are read through the var spotify = new spotify() function
    * These are kept in a .env file
* User must initialize and install node modules & APIs for this program to function.
* Once all required files are installed follow these procedures.
### <u>Spotify-this-song</u>
* process.argv[0] = node
* process.argv[1] = liri.js or liri
* process.argv[2] = spotify-this-song (no spaces allowed)
* process.argv[3] = "Name of Song" 
    * if "Name of Song" included - song name must be in quotes
    * The following information will be returned:
        * Artist(s)   
        * The song's name
        * A preview link of the song from Spotify
        * The album that the song is from
    * If process.argv[3] is left empty the user will be displayed the song information for "The Sign" from Ace of Base
*   Song information is limited to the first song returned in the Spotify API

### <u>Do-what-it-says</u>
* process.argv[0] = node
* process.argv[1] = liri.js or liri
* process.argv[2] = do-what-it-says
    * Information from random.txt is parsed into the Spotify API application and returns the same information as in the spotify-this-song function for 'I Want it That Way'
### <u>movie-this</u>
* process.argv[0] = node
* process.argv[1] = liri.js or liri
* process.argv[2] = movie-this
* process.argv[3] = 'name of the movie'
    * 'name of movie' must be in quotes
* LIRI then returns the following information:
    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating of the movie.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.


