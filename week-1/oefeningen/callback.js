//6. Callback

function mainLogic(myCallback){
    myCallback();
}

function callbackFunction(){
    console.log("Dit is de callback-functie");
}

mainLogic(callbackFunction);

/* --------------------------------------------------------------------------- */

//7. Pass By ...


function increaseByTen(number){
    return number += 10;
}

let myNumber = 20;
increaseByTen(myNumber);
console.log("Number:", myNumber); // Toont waarde van 20 (functie verandert niet de originele waarde)

//Hoe oplossen? Overschrijven van de variabele door middel van de functie
myNumber = increaseByTen(myNumber);
console.log("Number:", myNumber); // Toont waarde van 30

/* --------------------------------------------------------------------------- */

//8. Scope