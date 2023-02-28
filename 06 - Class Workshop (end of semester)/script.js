console.log("Hello");

let url = 'https://swapi.dev/api/';

function fetchData(url) {
    fetch(url)
        .then(function (response) {
            console.log("Request is succesfull");
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson)
            cardTemplate(myJson)
        }
        )
};

fetchData(url);

//Kreiranje na stranata

function cardTemplate(element){
    let mainDiv = document.getElementById("swapiApi");
    mainDiv.innerHTML = "";
    let htmlToAdd = `
    <h1>Hello from Swapi Api</h1>
    
    <div id="films">Films</div>
    <div id="people">People</div>
    <div id="planets">Planets</div>
    <div id="species"> Species </div>
    <div id="starships"> Starships </div>
    <div id="vehicles"> Vehicles </div>`;

   
    mainDiv.innerHTML = htmlToAdd;

    document.getElementById("films").addEventListener("click", function(){


        let filmsUrl = "https://swapi.dev/api/films/";
        secondFetch(filmsUrl);

    })
};

    function secondFetch(filmsUrl){
        fetch(filmsUrl)
            .then(function (response) {
            console.log("Request is succesfull");
            return response.json();
        })
            .then(function (myJson) {
            console.log(myJson);
            
            let mainDiv = document.getElementById("swapiApi");
            mainDiv.innerHTML = "";
            mainDiv.innerHTML += `<h1>Films</h1>`;
            for(let i = 0; i < myJson.results.length; i++) {
                mainDiv.innerHTML +=  `<div class="filmsCards">
                <p>Title: ${myJson.results[i].title}</p>
                <p>Director: ${myJson.results[i].director}</p>
                <p>Release date: ${myJson.results[i].release_date}</p>
                </div>`
                }}
            )}
;