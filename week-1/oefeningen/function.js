//1. Eenvoudige Functie

// function greetings(){
//     return "Hallo daar!";
// }

// console.log(greetings()); // Hallo daar!

/* --------------------------------------------------------------------------- */

//2. Functie met parameters

// function greetings(name){
//     return `Hallo ${name}!`;
// }

// console.log(greetings("Anna")); // Hallo Niels!

/* --------------------------------------------------------------------------- */

//3. Standaard parameters

function greetings(name = "Sverre"){
    return `Hallo daar ${name}!`;
}

console.log(greetings()); // Hallo daar Sverre!