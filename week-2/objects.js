// --- 1. Introductie tot Objecten ---
// Objecten zijn fundamenteel in JavaScript. Ze slaan gegevens op in key-value pairs.
const person = {
  name: "Niels",
  age: 31,
  gender: "male",
  sayName: function () {
    console.log(`Mijn naam is ${this.name}`);
  },
};

console.log("Person name:", person.name);

person.height = 170; //Toevoegen van een property
console.log("Height property:", person.height);

//uitvoeren van functie
person.sayName();

//Aanmaken van een person Object met constructor function en eigenschappen
function Person(firstName) {
  this.name = firstName;
  this.sayName = function () {
    console.log(`Hello, ik ben ${this.name}`);
  };
}

const person1 = new Person("Ruben");
const admin = new Person("Zeger");

admin.sayName();
console.log(admin.name);

// class Person { 
//   constructor(firstName) {
//     this.name = firstName;
//   }
//   sayName() {
//     console.log(`Hello, ik ben ${this.name}`);
//   }
// }

//-------------------------------------------------------------

// --- 2. Ophalen van waarden ---
// Gebruik dot-notatie of bracket-notatie.

console.log("Naam:", person.name); // Dot-notatie
console.log("Person name[]:", person["name"]); //Aanspreken van object met bracket notatie -> wanneer je aan wil spreken met key
console.log("Leeftijd:", person["age"]); // Bracket-notatie

// Bracket-notatie is handig als de key in een variabele zit.
const propertyName = "gender";
console.log("Gender:", person[propertyName]);

//aanmaken van nieuwe property met variabelen
const customPersonProperty = "addiction";
const customPersonValue = "gaming";

person[customPersonProperty] = customPersonValue;
console.log(person);

// Voorbeeld met een ander object (dropdown):
const productPrices = {
  belgium: 50,
  france: 60,
  usa: 55,
};

const selectedRegion = "usa";
console.log("Prijs in USA:", productPrices[selectedRegion]);

//-------------------------------------------------------------

//WAARDEN WIJZIGEN
// --- 3. Waarden toevoegen ---
person.country = "United States";
person.children = [{ name: "Anna", age: 6, gender: "female" }];
console.log("Toegevoegde eigenschappen:", person);

// --- 4. Waarden verwijderen ---
delete person.age;
delete person[customPersonProperty];
console.log("Na verwijderen van 'age':", person);

// --- 5. Itereren over objecten ---
// Gebruik for...in-loop:
const population = {
  male: 40,
  female: 53,
  nonBinary: 10,
  other: 5, // For individuals who don't identify within the listed categories
  undisclosed: 2, // For individuals who prefer not to disclose their gender
};

for (const key in population) {
  console.log(`${key}: ${population[key]}`);
}

// Gebruik Object.keys(), Object.values(), en Object.entries().
const config = { theme: "dark", fontSize: 16, language: "English" };
console.log("Keys:", Object.keys(config)); // get keys
console.log("Values:", Object.values(config)); // get values
console.log("Entries:", Object.entries(config)); //zowel key als value

//6 object.fromEntries() om arrays om te zetten in objecten
const keyValuePairs = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

const newObject = Object.fromEntries(keyValuePairs);
console.log("Object van key-value pairs:", newObject);

// --- 7. Aangepaste methoden in objecten ---
const shoppingCart = {
  items: [
    { name: "Product 1", price: 20 },
    { name: "Product 2", price: 30 },
    { name: "Product 3", price: 15 },
  ],
  calculateTotal: function () {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  },
};

console.log("Totale prijs winkelwagen:", shoppingCart.calculateTotal());

// --- 8. Voorbeeld van OOP in objecten ---
const bookInfo = {
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  pages: 224,
  increasePages: function (amount) {
    this.pages += amount;
  },
  changeAuthor: function (newAuthor) {
    this.author = newAuthor;
  },
  displayInfo: function () {
    console.log(`Titel: ${this.title}`);
    console.log(`Auteur: ${this.author}`);
    console.log(`Pagina's: ${this.pages}`);
  },
};

bookInfo.increasePages(50);
bookInfo.changeAuthor("John Doe");
bookInfo.displayInfo();

// --- 9. Alternatief: Functionele benadering ---
function increasePages(book, amount) {
  book.pages += amount;
}

function changeAuthor(book, newAuthor) {
  book.author = newAuthor;
}

const anotherBook = {
  title: "1984",
  author: "George Orwell",
  pages: 328,
};

increasePages(anotherBook, 50);
changeAuthor(anotherBook, "Eric Blair");
console.log("Functionele benadering resultaat:", anotherBook);

//Object.assign()
const userSettings = { theme: "dark" };
const defaultSettings = { theme: "light", fontSize: 14 };

Object.assign(userSettings, defaultSettings);
console.log(userSettings);
