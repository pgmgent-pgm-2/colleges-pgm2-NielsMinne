//1. printVar

function blockScope(){
    // Block scope
    let myVar = 15; // myVar is alleen beschikbaar binnen dit block

    function printVar() {
        console.log(myVar); // Probeert myVar te loggen
    }

    printVar(); // Functie oproepen binnen dezelfde block
}

// printVar(); // Functie oproepen binnen dezelfde block

/* 
Antwoord:
Binnen de block scope logt de functie printVar de waarde van myVar (15). 
Buiten de block scope werkt dit niet, omdat beide alleen beschikbaar zijn binnen het block waar ze zijn gedeclareerd.
*/

/* --------------------------------------------------------------------------- */

//2. recursiveVsLoop

//Loop
function sumUpToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // Voeg elke waarde van i toe aan de som
    }
    return sum;
}

console.log("Loop: ", sumUpToN(5)); // Output: 15 

//Recursive
function sumUpToNRecursive(n) {
    if (n <= 1) {
        return n; // Basisgeval: als n 1 of kleiner is, retourneer n (totaal)
    }
    return n + sumUpToN(n - 1); // Som van n en de functie-aanroep voor (n-1) = n + 4 + 3 + 2 + 1
}

// Voorbeeldgebruik
console.log("Recursive: ", sumUpToNRecursive(5)); // Output: 15 (5 + 4 + 3 + 2 + 1)

/* --------------------------------------------------------------------------- */

//3. scopeTest

function outerFunction() {
    // Declareer een variabele binnen outerFunction
    let innerVar = 25;

    function innerFunction() {
        console.log("innerVar:", innerVar); // Probeert innerVar te loggen (lukt)
    }

    innerFunction();
}

outerFunction(); // Output: 25

/* --------------------------------------------------------------------------- */

//4. checkScoping

function checkScoping() {
    let a = 50; // Variabele a gedeclareerd in de functie scope

    if (true) {
        let a = 75; // Variabele a gedeclareerd binnen de if-scope
        console.log("Binnen het if-block:", a); //75
    }

    console.log("Buiten het if-block:", a); //50
}

checkScoping();

/* --------------------------------------------------------------------------- */

//5. powerThatBe

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    // Recursieve aanroep: base * (base^(exponent - 1))
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // Output: 8 
console.log(power(5, 0)); // Output: 1 (alles tot de macht 0 is 1)

/* --------------------------------------------------------------------------- */

//6. countMyArguments

function sumAll(...args) {
    let sum = 0; // Start met een som van 0
    // Loop door alle argumenten en tel ze op
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

// Roep de functie aan met de getallen 3, 5 en 2
console.log(sumAll(3, 5, 2)); // Output: 10 

// Roep de functie aan met de getallen 50, 10, 5, 1 en 2
console.log(sumAll(50, 10, 5, 1, 2)); // Output: 68 

/* --------------------------------------------------------------------------- */

//7. MultiplyAndRule

function multiply(x,y){
    return x * y;
}

console.log(multiply(10,20));

/* --------------------------------------------------------------------------- */

//8. greetUser

function greetUser(name, isFormal) {
    if (isFormal) {
        return `Dag Meneer ${name}`; // Formele begroeting
    } else {
        return `Hoi ${name}!`; // Informele begroeting
    }
}

// Test de functie met verschillende namen en booleanwaarden
console.log(greetUser("Jan", true));  // Output: "Meneer Jan"
console.log(greetUser("Anna", false)); // Output: "Hoi Anna!"
