let btnGenerate = document.getElementById("btnGenerate");
let btnPrevious = document.getElementById("previousBtn");
let btnNext = document.getElementById("nextBtn");

let curentPage = 1;

function fetchData(url) {
    fetch(url)
        .then(function (response) {
            console.log("Request is succesfull");
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            let tableGenerate = document.getElementById("table");
            tableGenerate.innerHTML = "";
            let htmlToAdd = `
                    <table>
                        <tr>
                            <th>Planet Name</th>
                            <th>Population</th>
                            <th>Climate</th>
                            <th>Gravity</th>
                        </tr>`;
            for (let i = 0; i < myJson.results.length; i++) {
                htmlToAdd += `
                        <tr>
                            <td>${myJson.results[i].name}</td>
                            <td>${myJson.results[i].population}</td>
                            <td>${myJson.results[i].climate}</td>
                            <td>${myJson.results[i].gravity}</td>
                        </tr>
                        `
            };
            htmlToAdd += `</table>`;
            tableGenerate.innerHTML += htmlToAdd; 
            if (curentPage > 1){
                btnPrevious.style.display = "block";
                btnNext.style.display = "none";
            } else {
                btnPrevious.style.display = "none";
                btnNext.style.display = "block";
            };
        })
};


btnGenerate.addEventListener("click", function(){
    fetchData("https://swapi.dev/api/planets/?page=1");
    btnGenerate.style.display = "none";
});

btnNext.addEventListener("click", function(){
    curentPage++;
    fetchData("https://swapi.dev/api/planets/?page=2");
});

btnPrevious.addEventListener("click", function(){
    curentPage--;
    fetchData("https://swapi.dev/api/planets/?page=1");
});



// function swapingPages (){btnGenerate.addEventListener("click", function generating(){
//     console.log("First button is clicked");
//     fetchData("https://swapi.dev/api/planets/?page=1");
//     btnGenerate.style.visibility = "hidden";
//     btnGenerate.style.display = "none";

//     let newBtn = document.getElementById("newButtons");
//     newBtn.innerHTML = `<br/> <button id="nextTable">Next 10 Planets</button>`;

//     let secondTable = document.getElementById("nextTable");
//     secondTable.addEventListener("click", function(){
//         console.log("Second button is clicked");
//         fetchData("https://swapi.dev/api/planets/?page=2");
//         newBtn.style.visibility = "hidden";
//         newBtn.style.display = "none";
        
//         let newButton2 = document.getElementById("newButton2");
//         newButton2.innerHTML = `<br/> <button id="previousTable">Previous 10 Planets</button>`;
//         newButton2.addEventListener("click", function(){
//             console.log("Third button is clicked")});
            
//     });
// })
// };

// swapingPages();