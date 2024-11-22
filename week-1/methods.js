//Array Methods

//Push en Pop
//push('waarde'): voegt een element toe op het einde van de array
//pop(): verwijdert een element op het einde van de array

const queue = ["Message1", "Message2"];
queue.push("Message3"); 
console.log("push:",queue);

queue.pop(); 
console.log("pop:", queue);

//shift en unshift
//unshift('waarde'): voegt een element toe aan het begin van de array
//shift(): verwijdert een element aan het begin van de array
const stack = ['Plate1', 'Plate2'];
stack.unshift('Plate0');
console.log("unshift:",stack);

stack.shift();
console.log("shift:",stack);

//-------------------------------------------------

// at(): Retourneert een element op een specifieke index (positief of negatief).
const films = ["Scarface", "Titanic", "Star Wars", "Predator", "Barbie", "Winx club"];
// console.log(films[films.length - 1]); //Hoe je een waarde ophaalt op einde met .length

console.log("at(index 2):", films.at(2)); //retourneert de film op index 2
console.log("at(laatste element):",films.at(-1)); //retourneert de film op laatste index (-2 -> voorlaatste, etc...)

//-------------------------------------------------

// === map() ===
// map(): Maakt een nieuwe array door een functie toe te passen op elk element.
const numbers = [1, 4, 9];
const roots = numbers.map((number) => Math.sqrt(number));
console.log("map(numbers):", roots);

const wordsArr = ['Sverre', 'Niels', 'Goku'];
const wordsAdded = wordsArr.map((word) => 'Hallo ' + word);
console.log("map(words):", wordsAdded);

//-------------------------------------------------

// === join() ===
// join(): Combineert alle elementen van een array tot een string, gescheiden door een delimiter.
const arr = ["MacOS", "Windows", "Linux"]; 
const arrString = arr.join(" | ");
console.log("join:", arrString);

//-------------------------------------------------

//Filter
//Filter(): retourneert een nieuw array met elementen die voldoen aan een voorwaarde.
const words = ["boek", "negenentwintig", "druif", "broccoli", "supercadifragilousandexpialidocious", "hamburger", "trapezium"];
const filteredWords = words.filter((word) => word.includes("bro"));
console.log("filter:", filteredWords);

//-------------------------------------------------

// === every() en some() ===
// every(): Controleert of alle elementen in de array aan een voorwaarde voldoen.
// some(): Controleert of ten minste één element aan een voorwaarde voldoet.

const numbers2 = [1, 30, 45, 10, 16, 180, 46];
const isBelowTreshold = (currentValue) => currentValue >= 1; //voorwaarde in een variabele geplaatst.
console.log("every:",numbers2.every(isBelowTreshold));

const numbers3 = [20, 5, 8, 1, 4];
console.log("some:",numbers3.some((el) => el > 10));

//-------------------------------------------------

// === flat() ===
// flat(): Verwijdert geneste arrays tot een opgegeven diepte.
const nestedArray = [1, 2, [3, 4, [5, 6]]];
console.log("flat:",nestedArray.flat(2));

//-------------------------------------------------

//ADVANCED METHODS

// === sort() ===
const months = ["March", "jan", "Feb", "Dec"];
const sortedMonths = months.map(month => month.toLowerCase()).sort();
console.log(sortedMonths);

const numArray = [1, 30, 4, 21, 100000];
numArray.sort((a, b) => a - b);
console.log(numArray);

// === reduce() ===
// reduce(): Verzamelt de elementen van een array tot één waarde.
const reduced = [1, 2, 3, 4, 5].reduce((prev, next) => prev + next);
console.log(reduced); // 15

const shoppingBasket = [
    { name: "Smartphone", qty: 2, price: 500, freeOfCharge: false },
    { name: "Screen Protector", qty: 2, price: 5, freeOfCharge: true },
    { name: "Tablet", qty: 1, price: 800, freeOfCharge: false },
  ];
  const totalPrice = shoppingBasket.reduce((sum, item) => {
      if (!item.freeOfCharge) {
          sum += item.price * item.qty;
      }
    return sum;
  }, 0);
  console.log(`Total Price: $${totalPrice}`);

// === slice() vs splice() ===
//slice(): Maakt een nieuwe array met een deel (origineel blijft intact)
const animals = ["ant", "bison", "parrot", "duck", "tiger"];

const selectedAnimals = animals.slice(1, 4); //van index 1 tot (maar niet inclusief) 4 -> Bison - duck
console.log(selectedAnimals);
console.log(animals);

//splice(): verwijdert of voegt elementen toe aan de originele array
const removedAnimals = animals.splice(3, 2);
console.log(removedAnimals);
console.log(animals);




