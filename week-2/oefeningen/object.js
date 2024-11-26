// 1. Oefening auto 
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "blue"
};

// 1.1 Verander de kleur van de auto naar rood
car.color = "red";

// 1.2 Functie om het merk van de auto op te halen
function getBrand(car) {
    return car.brand;
}
console.log(getBrand(car)); // Output: "Toyota"

// 1.3 Voeg een nieuwe eigenschap 'fuel' toe met waarde "gasoline"
car.fuel = "gasoline";

// 1.4 Verwijder de eigenschap 'year' van de auto
delete car.year;

//-----------------------------------------------------------

// 2. Oefening Persoon
const person = {
    name: "Anna",
    age: 25,
    address: {
        street: "Main Street",
        number: 123,
        city: "New York"
    }
};

// 2.1 Functie om het volledige adres als string te retourneren
function getAddress(person) {
    return `${person.address.street} ${person.address.number}, ${person.address.city}`;
}
console.log(getAddress(person)); // Output: "Main Street 123, New York"

// 2.2 Voeg een nieuwe eigenschap 'telephone' toe
person.telephone = "0498014680";

// 2.3 Voeg extra informatie toe aan het object 'person'
const extraInfo = {
    hobby: "gaming",
    favoriteColor: "orange"
};

// Gebruik Object.assign() om extraInfo aan person toe te voegen
Object.assign(person, extraInfo);
console.log(person);
// Output: Object met alle bestaande en nieuwe eigenschappen

//-----------------------------------------------------------

// 3. Objecten vergelijken
function areObjectsIdentical(obj1, obj2) {
    // Vergelijk objecten door ze naar JSON-string te converteren
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

const objectA = { a: 1, b: 2, c: 3 };
const objectB = { a: 1, b: 2, c: 3 };

console.log(areObjectsIdentical(objectA, objectB)); // Output: true

//-----------------------------------------------------------

// 4. Oefening winkelwagen
const shoppingCart = {
    item1: { name: "Product 1", price: 20 },
    item2: { name: "Product 2", price: 30 },
    item3: { name: "Product 3", price: 15 },
};

// 4.1 Gebruik Object.keys() om de namen van de items weer te geven
const itemNames = Object.keys(shoppingCart).map((key) => shoppingCart[key].name);
console.log("Namen van items:", itemNames);
// Output: ["Product 1", "Product 2", "Product 3"]

// 4.2 Gebruik Object.values() om de prijzen van de items weer te geven
const itemPrices = Object.values(shoppingCart).map((item) => item.price);
console.log("Prijzen van items:", itemPrices);
// Output: [20, 30, 15]

// 4.3 Gebruik Object.entries() om zowel de namen als prijzen van de items weer te geven
const itemEntries = Object.values(shoppingCart);
console.log("Namen en prijzen van items:", itemEntries);
// Output: [{ name: "Product 1", price: 20 }, { name: "Product 2", price: 30 }, { name: "Product 3", price: 15 }]

