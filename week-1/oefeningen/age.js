//4. Functie met parameters en interne logica

function controlAge(age) {
    if (age >= 18) {
        return "Volwassen";
    } else {
        return "Nog niet volwassen";
    }
}

console.log(controlAge(16)); // Nog niet volwassen
console.log(controlAge(21)); // Volwassen

/* --------------------------------------------------------------------------- */

//5. Return 

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return "Did parents allow you?";
//     }
// }

//Werkt de functie nog wanneer we else zouden verwijderen?

function checkAge(age) {
    if (age > 18) {
      return true;
    }

    return "Did parents allow you?";
  }

//Antwoord: Ja, door de return werkt de functie nog wanneer we else zouden verwijderen

console.log(checkAge(19));