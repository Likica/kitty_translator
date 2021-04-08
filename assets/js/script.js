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
});

var button = document.getElementById("catGet")

button.addEventListener("click", gotClicked);

function gotClicked(e) {
    window.location.reload();
}