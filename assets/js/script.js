// Random Joke API
var getRandomJoke = function() {
    fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10");
};

getRandomJoke();