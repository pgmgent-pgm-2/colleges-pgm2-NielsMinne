const myVariable = "Jarne";

const users = ["Bruno, Gokhan"];

function displayResult(result) {
    console.log(result)
}

function myFunction() {
    console.log("this is a function from main.js");
    displayResult("zever");
}

export {
    myFunction,
    myVariable,
    users
};