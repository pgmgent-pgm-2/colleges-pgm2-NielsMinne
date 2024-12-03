// Voorbeeld array met strings
const arr = ["first", "second", "third"];

// Zonder destructuring: handmatige toewijzing
const f = arr[0];  // Het eerste element van de array
const s = arr[1];  // Het tweede element van de array
const t = arr[2];  // Het derde element van de array

// Met destructuring: kortere syntax om waarden toe te wijzen
const [firstItem, secondItem, thirdItem] = arr;

console.log(firstItem); // Output: 'first'
console.log(secondItem); // Output: 'second'
console.log(thirdItem); // Output: 'third'

// Voorbeeld met kleurenarray
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: 'red'
console.log(secondColor); // Output: 'green'
console.log(thirdColor); // Output: 'blue'

// Destructuring naar vooraf gedefinieerde variabelen
let df, ds, dt;
[df, ds, dt] = arr;

//-----------------------------------------------------

// Elementen overslaan met komma's
const [, , thirdWord] = ["foo", "bar", "baz"]; // Het derde element wordt direct toegewezen
console.log(thirdWord); // Output: 'baz'

// Standaardwaarden toekennen als er geen waarde is
const colors2 = ["red", "green"];
const [firstColor2, secondColor2, thirdColor2 = "blue"] = colors2; // 'blue' als standaardwaarde
console.log(firstColor2); // Output: 'red'
console.log(secondColor2); // Output: 'green'
console.log(thirdColor2); // Output: 'blue' (omdat geen derde waarde in de array staat)

//-----------------------------------------------------

// Gebruik van andere variabelen als referentie
const [d = 3, e = d] = [7, undefined]; // d krijgt 7, e neemt waarde van d over
console.log(d, e); // Output: 7 7

//-----------------------------------------------------

// Rest-operator in destructuring (overige elementen vangen)
const [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // Output: 1 [2, 3, 4]

// String destructureren met rest-operator
const [x, ...y] = 'abc';
console.log(x, y); // Output: 'a' ['b', 'c']

//-----------------------------------------------------

// Gebruik van .entries() met destructuring in een loop
const arrLetters = ["a", "b"];
for (const [index, element] of arrLetters.entries()) {
    console.log(index, element); // Toont index en bijbehorende waarde
}


//-----------------------------------------------------

const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

// Zonder destructuring: handmatige toewijzing
// const name = person.name;
// const age = person.age;
// const city = person.city;

// Met destructuring: direct eigenschappen toewijzen, volgorde maakt niet uit
const { age, name: newName, city } = person;
console.log(newName, age, city); // Output: 'Alice', 25, 'New York'

// Eigenschappen overslaan
const { city: city2, name } = person;

// Standaardwaarden instellen
const { name:name2, message = "Something went wrong" } = {name: "Niels"};
console.log(message); // Output: 'Something went wrong'

// Variabele naam wijzigen bij destructuring
const { name: fullName, age: personAge, city: residence } = person;
console.log(fullName); // Output: 'Alice'
console.log(personAge); // Output: 25
console.log(residence); // Output: 'New York'

// Gebruik van de rest-operator bij objecten
const person2 = { name: "Alice", age: 25, city: "New York", country: "USA" };
const { name: name1, age: age1, ...address} = person2;
console.log(name1); // Output: 'Alice'
console.log(age1); // Output: 25
console.log(address); // Output: { city: 'New York', country: 'USA' }

//-----------------------------------------------------

// For...of loop met destructuring
const extendedPeople = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];

for (const { name, family: { father, mother } } of extendedPeople) {
  console.log(`Name: ${name}, Father: ${father}, Mother: ${mother}`);
}

//-----------------------------------------------------

// Object destructureren als parameter in een functie
function printPerson({ name, age, city }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
}

printPerson(person);