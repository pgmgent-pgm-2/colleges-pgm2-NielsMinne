//.1 Dagen van de week 
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

days.forEach((day) => {
    console.log(day);
})

//2. Array waarde
let fruits = ['Apples', 'Pear', 'Orange'];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push('Banana');

// what's in fruits?
console.log((fruits.length)); //

//3. Multidimensional arrays
const matrix = [
    [6, 8, 1],
    [9, 6, 7],
    [1, 4, 9],
]

function getValue(row, column) {
    return matrix[row][column]
};

console.log(getValue(1, 1))

//4. For of, foreach

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}

const string = "Hello";
for (const char of string) {
    console.log(char);
}

const colors = ['red', 'blue', 'green', 'yellow'];
colors.forEach((color, index) => {
    console.log(index, color);
})

//5. METHODS - STRINGS
const words = [
    'mal',
    'snurkduif',
    'bromvlieg',
    'snottebel',
    'knotsgek',
    'pindakaas',
    'fluitketel',
    'smurfenmuts',
];

//Maak een string door alle elementen in de array te verbinden met een koppelteken.
const connectedString = words.join(" - ");
console.log(connectedString);

//Controleer of ten minste één woord in de array begint met de letter “B”.
const hasB = words.some((word) => word.startsWith('b') || word.startsWith("B"));
console.log("ten minste 1 woord begint met B:", hasB);

//Voeg het woord “Hello” toe aan het begin van de array.
words.unshift("hello");

//Controleer of alle woorden in de array meer dan twee letters hebben.
const moreThan2Letters = words.every((word) => word.length > 2);
console.log("alle woorden hebben meer dan twee letters:", moreThan2Letters);

//Sorteer de array in oplopende volgorde.
words.sort();

//Haal het element op de derde positie in de array op.
console.log(words.at(2));

//Filter de woorden die langer zijn dan vier letters uit de array.
const longerThanFour = words.filter((word) => word.length > 4);
console.log(longerThanFour);


//6. METHODS - NUMBERS

const randomNumbers = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 100) + 1
);
  
//Filter de getallen groter dan 10 uit de array.
const biggerThan10 = randomNumbers.filter((number) => number > 10);
console.log(biggerThan10);

//Verwijder het laatste element uit de array.
randomNumbers.pop();

//Verwijder het eerste element uit de array.
randomNumbers.shift();

//Voeg het getal 5 toe aan het einde van de array.
randomNumbers.push(5);

//Controleer of alle getallen in de array kleiner zijn dan 20.
const allNumbersSmaller = randomNumbers.every((number) => number < 20);
console.log(allNumbersSmaller);

//Maak een string door alle elementen in de array te verbinden met een spatie.
const elementString = randomNumbers.join(" ");
console.log(elementString);

//Tel alle getallen in de array op.
const sum = randomNumbers.reduce((totaal, getal) => totaal + getal);
console.log(sum);

//Verdubbel elk getal in de array.
const doubleNumbers = randomNumbers.map((number) => number * 2);
console.log(doubleNumbers);

//Controleer of ten minste één getal in de array groter is dan 30.
console.log(randomNumbers.some((number) => number > 30));

//7.METHODS - SUBARRAY
const randomNamesArray = [
    ['Alice', 'Bob', 'Charlie'],
    ['David', 'Eva', 'Frank'],
    ['Grace', 'Hank', 'Ivy'],
    ['Jack', 'Kelly', 'Liam']
];
  
//Maak een nieuwe array die alle subarrays flat maakt.
const flatArray = randomNamesArray.flat();
console.log(flatArray);

//Verwijder het eerste element uit elke subarray.
const subarrayWithoutFirst = randomNamesArray.map((subarray) => subarray.shift());
console.log(subarrayWithoutFirst);

//Verwijder het laatste element uit de array.
const subarrayWithoutLast = randomNamesArray.map((subarray) => subarray.pop());
console.log(subarrayWithoutLast);


//8.OPTELLEN ARRAYS
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];


function addArrayElements(arr1, arr2) {
    
    const sumArray = arr1.map((element, index) => element + arr2[index]);
    return sumArray;    
}

console.log(addArrayElements(array1, array2));


//9. Langste woord in array

let wordArray = ['appel', 'peer', 'kiwi', 'banaan'];
const longestWord = wordArray.reduce((longest, current) => current.length > longest.length ? current : longest);
console.log(longestWord);


//10.Even getallen filteren
function filterEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 === 0);
}
  
  const randomNumbers1 = [3, 8, 15, 6, 10, 7];
  let evenNumbers = filterEvenNumbers(randomNumbers1);
console.log(evenNumbers);
  

