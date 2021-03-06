var catImg = document.createElement('img');
catImg.setAttribute("id", "cat-image")
var savedCats = [];

if(localStorage.getItem('saved-cats')){
    savedCats = JSON.parse(localStorage.getItem('saved-cats'))
}
var saveCat = document.getElementById("saveCat")


var getButton = document.getElementById("catGet")

getButton.addEventListener("click", gotClicked);


saveCat.addEventListener("click", catSaved);

function catSaved(){
    
   
    var catImg = document.getElementById("cat-image")
    var catPlace = document.getElementById("catSaveDisplay")
    var saveCatEl = document.getElementById("catSave")
    
    
    savedCats.push(catImg.src)
    localStorage.setItem("saved-cats", JSON.stringify(savedCats));
  

    var cats = localStorage.getItem("saved-cats")
    };




function displaySavedCats() {
    //loops through savedCats array
    for (let i = 0; i < savedCats.length; i++) {
        
    //when the array has something in it then...
    if(savedCats.length > 0) {

    //this gets brings the place where the cat picture goes into the javascript
    var catDisplayEl = document.querySelector("#catSaveDisplay");
    
    //this creates an image element we can use to put array info with
    var catImg = document.createElement('img');

    // Dynamically style images in the cat gallery
    catImg.classList = "max-w-xs max-h-40 m-3";
  
    //setAttribut() needs 2 arguments, "attribute name" , "attribute value" 
    //this is telling the catImg variable that source of its image comes from the 
    // "savedCats" array
    catImg.setAttribute('src', savedCats[i]);
  
    //this creats an "a" tag in the html
    var  catLink = document.createElement("a");

    //this tells the variable to get the URL from the "saved cats" array and make it a hyperlink
    catLink.setAttribute("href", savedCats[i])

    //this tells the variable to open the link a new window
    catLink.setAttribute("target", '_blank')

    //this makes the catImg a child of the catLink, the variable now includes the URL and
    //the image
    catLink.appendChild(catImg)

    //this displays the image that is also a link on the page
    catDisplayEl.appendChild(catLink)


    }
}
}

displaySavedCats()



// Contribution by Katie - added locally by F and pushed to develop. Could not merge on GitHub because all files were pushed to the feature/catapi branch and were behind for large amount of commits from develop - if merged all files on develop would be overwritten by existing files in the feature/catapi branch
fetch(`https://api.thecatapi.com/v1/images/search?api_key=dcf111f5-1f90-4914-9be9-fe70f80fdda3`)


    // Convert the response to JSON
    .then(function (response) {
        return response.json();
    })

    .then(function (response) {
        //use "querySelector to get the ID of where the cat will be displayed"
        var catContainerEl = document.querySelector("#catImg-container");

        //create an img element
        var catImg = document.createElement('img');

        //set src attribute to the image url from cat api response

        catImg.setAttribute('src', response[0].url);
        catImg.setAttribute('id', 'cat-image')

        //set classes
        catImg.className = 'object-scale-down max-h-96 w-4/5 lg:w-1/2';

        //append img element to page
        catContainerEl.appendChild(catImg);
    });

var button = document.getElementById("catGet")

button.addEventListener("click", gotClicked);

function gotClicked(e) {
    window.location.reload();
}


//cat facts API

fetch(
    'https://catfact.ninja/fact'
)
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
       

        var catFactContainerEL = document.querySelector("#catFact-container");

        var catFact = document.createElement('fact');

        catFact.innerText = response.fact;

        catFactContainerEL.appendChild(catFact);
    });




// Random Joke API 

fetch('https://v2.jokeapi.dev/joke/Miscellaneous,Programming,Pun,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&format=text&idRange=0-300')

    // Convert the response to JSON
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
      
        //use "querySelector to get the ID of where the joke will be displayed"
        var jokeContainerEl = document.querySelector("#joke-container");

        //create a text/text-box element
        var jokeText = document.createElement('p');

        //set src attribute to the joke url from joke api response
        jokeText.innerText = response.joke;

        //set classes
        jokeText.className = 'font-bold py-2 px-4 rounded bg-white flex justify-center bg-opacity-50';

        //append img element to page
        jokeContainerEl.appendChild(jokeText);
    });

fetch('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCHPgywlPlz72kXUMIDGLkB-7XdQ5wPCWQ')
    .then(function (response) {
        return response.json();
    })
    .then(function (fontList) {
        console.log(fontList)

        var randomIndex = Math.floor(Math.random() * fontList.items.length);

        console.log(fontList.items[randomIndex].family)

        var fontEl = document.querySelector(".fontbox");
        //    finds a font family
        var choseFont = fontList.items[randomIndex].family;
        console.log(choseFont);

        WebFont.load({
            google: {
                families: [choseFont]
            }
        });

        fontEl.style.fontFamily = choseFont;
        console.log(fontEl)

        // fontEl.className = 'text-xl';

        return choseFont;

    })

