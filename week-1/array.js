//Array

//Aanmaken van een lege array
const array = []; //meest gebruikte syntax
const array1 = Array();
const array2 = new Array();

//Toevoegen van items aan een array
const fruits = ["Apple", "Pear", "Advocado", "Banaan"];
console.log(fruits);
console.log("Fruits 2:", fruits[2]);

//Element vervangen
fruits[2] = "Dragonfruit";
console.log("Na vervanging: ", fruits);

//Element toevoegen in array
fruits[4] = "Lemon";
console.log(fruits);

// -------------------------------------

//Arrays kunnen elementen van elk datatype opslaan
const mixedArray = [
    "Apple",
    { name: "John" },
    true, 
    function (name) {
        return `Hallo ${name}`;
    }
]

console.log("Mixed Array:", mixedArray);

//Object (value) ophalen uit een array
console.log("Naam in object:", mixedArray[1].name);
//Functie uitvoeren van een array
console.log("Functie resultaat:", mixedArray[3]('Tomasz'));

// -------------------------------------

// Lengte van een array
console.log("Aantal Elementen: ", fruits.length);

//Lengte aanpassen (verkorten)
fruits.length = 3;
console.log("Na verkorten:", fruits);

//lengte terugzetten (Niet omkeerbaard -> Undefined (empty))
fruits.length = 5;
console.log("Na verlangen:", fruits);

//Array Leegmaken met .length
fruits.length = 0;
console.log("Lege Array:", fruits);

// ----------------------------------------

//Vergelijken van arrays
const arrayA = [1, 2, 3];
const arrayB = [1, 2, 3];

console.log("Vergelijking met ===:", arrayA === arrayB); //Lukt niet -> Reference type

//Oplossing 1: JSON.stringify() -> omzetten van waarden naar string 
console.log(
    "Vergelijking met JSON.stringify(): ",
    JSON.stringify(arrayA) === JSON.stringify(arrayB)
);

//Oplossing 2: loop om waarden 1 voor 1 te vergelijken
function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false; //Wanneer lengte niet gelijk is return false

    for (let i = 0; i < arr1.length; i++){
        if (arr1[i] !== arr2[i]) { //Als een waarde niet gelijk is aan elkaar -> false
            return false;
        }
    }
    return true; // --> indien alles gelijk is zal deze true returnen;
}

console.log("Vergelijking met loop:", areArraysEqual(arrayA, arrayB));

// ----------------------------------------

//Multidimensionele arrays
const cars = [
    ["Volvo", 22, 18],
    ["BMW", 15, 13],
    ["Toyota", 100, 99],
    ["Polestar", 50, 35]
]

//gegevens itereren over een multidimensional array
cars.forEach((car) => {
    console.log(`${car[0]}: ${car[1]} in stock, ${car[2]} verkocht.`);
})


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log("MatrixElement (6):", matrix[1][2]) //ophalen van een specifiek element in een multi-array

//2D-Array voor een spelbord
const gameBoard = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["X", "O", "X"]
];

console.log("spelbord:");
gameBoard.forEach((row) => console.log(row.join(' | ')))


