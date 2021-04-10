var catImg = document.createElement('img');
var savedCats = [];

fetch(`https://api.thecatapi.com/v1/images/search?api_key=dcf111f5-1f90-4914-9be9-fe70f80fdda3`)
    

// Conver the respionse to JSON
.then(function(response) {
    return response.json();
})

.then(function(response){
    //use "querySelector to get the ID of where the cat will be displayed"
    var catContainerEl = document.querySelector("#cat-container");

    //create an img element
    var catImg = document.createElement('img');

    //set src attribute to the image url from cat api response

    catImg.setAttribute('src', response[0].url);

    //append img element to page
    catContainerEl.appendChild(catImg);

    var saveCat = document.getElementById("saveCat")
    
    
    saveCat.addEventListener("click", catSaved);

    function catSaved(e){
        console.log("got clicked")
        var catImg = document.createElement('img');
        catImg.setAttribute('src', response[0].url);
        
        var catPlace = document.getElementById("catSaveDisplay")
        var saveCatEl = document.getElementById("catSave")
        
        catPlace.appendChild(catImg)
        
        localStorage.setItem(catImg, );
        localStorage.getItem(catImg, );
        };

});

var getButton = document.getElementById("catGet")

getButton.addEventListener("click", gotClicked);

function gotClicked(e) {
    window.location.reload();
}





//jokeapi
fetch(`https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`)
.then(function(response) {
    return response.json();
  })
  .then(function(joke) {
    console.log(joke);
  });

// // Conver the respionse to JSON
// .then(function(response) {
//     return response.json();
// })

// .then(function(response){
//     //use "querySelector to get the ID of where the cat will be displayed"



//     var jokeContainerEl = document.querySelector("#joke-container");

//     // //create an img element
//     var joke = document.createElement('p');

//      //set src attribute to the image url from cat api response

//     jokeText.setAttribute('src', joke);

//     //append img element to page
//      jokeContainerEl.appendChild(joke);
// });

