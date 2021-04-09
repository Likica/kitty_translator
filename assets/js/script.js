// module.exports = {
//     theme: {
//         colors: {
//             salmon: '#F49097',
//             mauve: '#DFB2FA',
//             corn: 'F5E960',
//         }
//     }
// }

// Contribution by Katie - added locally by F and pushed to develop. Could not merge on GitHub because all files were pushed to the feature/catapi branch and were behind for large amount of commits from develop - if merged all files on develop would be overwritten by existing files in the feature/catapi branch
fetch(`https://api.thecatapi.com/v1/images/search?api_key=dcf111f5-1f90-4914-9be9-fe70f80fdda3`)


    // Conver the respionse to JSON
    .then(function (response) {
        return response.json();
    })

    .then(function (response) {
        //use "querySelector to get the ID of where the cat will be displayed"
        var catContainerEl = document.querySelector("#cat-container");

        //create an img element
        var catImg = document.createElement('img');

        //set src attribute to the image url from cat api response

        catImg.setAttribute('src', response[0].url);

        //set classes
        catImg.className = 'object-scale-down h-96 w-1/2';

        //append img element to page
        catContainerEl.appendChild(catImg);
    });

var button = document.getElementById("catGet")

button.addEventListener("click", gotClicked);

function gotClicked(e) {
    window.location.reload();
}

//notes notes notes

// Random Joke API contributed by Becca - added locally by F and pushed to develop. Could not merge on GitHub because all files were pushed to the feature/fetch-joke-api branch and were behind for large amount of commits from develop - if merged all files on develop would be overwritten by existing files in the feature/fetch-joke-api branch
var getRandomJoke = function () {
    fetch("https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10");
};

getRandomJoke();