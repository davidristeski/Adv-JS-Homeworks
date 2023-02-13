//Exercise 1

function getDigits(number){ 
    return number < 0 ? number.toString().length-1 : number.toString().length;
};

function oddOrEven (number){
    if(number%2 == 0){
        return "Even"}
    else {
        return "odd"}
};



// function positiveOrNegative (number){
//     if (number < 0){
//         return "negative"
//     }
//     else {
//         return "positive"
//     }
// };

function positiveOrNegative(number){
    return number = 0 ? "positive null" : (number < 0 ? "negative" : "positive");
}

function getStats(number){
    return `Number:${number}, Digits: ${getDigits(number)}, ${oddOrEven(number)}, ${positiveOrNegative(number)}`
};

console.log(getStats(546));
console.log(getStats(-46));
console.log(getStats(1546));

//Exercise 2

// let header = document.getElementById("header");
// let colorInput = document.getElementById("colorInput").value;
// let sizeInput = document.getElementById("sizeInput").value;

//PRASANJE: Dokolku gi koristev kako prethodno deklarirani varijabli so vrednosta na inputot ne funkcionirase, davase rezultat prazen string.

let changeColor = (header, colorInput = "black") => {
        header.style.color = colorInput};

let changeSize = (header, sizeInput = "24") => {
        header.style.fontSize = sizeInput + "px"};


let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    console.log("button is clicked");
    changeColor(document.getElementById("header"), document.getElementById("colorInput").value);
    changeSize(document.getElementById("header"), document.getElementById("sizeInput").value)
});