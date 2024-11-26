
// Example: JSON Syntax
const exampleJson = `{
    "name": "Jane Doe",
    "age": 29,
    "isStudent": false,
    "hobbies": ["reading", "cycling", "traveling"],
    "address": {
      "street": "Main Street 123",
      "city": "Amsterdam",
      "country": "Netherlands",
    },
}`;
  
//Voorbeeld van JSON object
console.log(exampleJson);

const nestedObjectExample = `[
    {
      "id": 101,
      "name": "Alice",
      "preferences": {
        "theme": "dark",
        "language": "English",
      },
    },
]`;
  
//Object omzetten naar een JSON-string
const object = {
  title: "Inception",
  genre: "Sci-fi",
  rating: 8.8
}

const jsonString = JSON.stringify(object); //We gebruiken JSON.stringify() om het om te zetten naar JSON formaat
console.log(jsonString);

//JSON parse()
const jsonData ='{ "product": "Laptop", "price": 1200, "inStock": true }'; //Dit is JSON-formaat
const parsedObject = JSON.parse(jsonData); //We zetten met JSON.parse() onze json om in een Javascript object
console.log(parsedObject);

//Complexe JSON
const pokemonJson = `[
    {
      "name": "Pikachu",
      "type": ["electric"],
      "abilities": ["static", "lightning rod"]
    },
    {
      "name": "Charmander",
      "type": ["fire"],
      "abilities": ["blaze", "solar power"]
    }
  ]`;

const pokemonArray = JSON.parse(pokemonJson); //Opnieuw omzetten naar object
console.log(pokemonArray);


//JSON Valideren met try ... catch
function validateJson(jsonString) {
    try { //Deze code wordt eerst uitgevoerd -> indien geen error -> return
        JSON.parse(jsonString)
        return "Geldige JSON"
    } catch { //Indien de try een error teruggeeft dan kom je in de catch-block terecht
        return "Ongeldige Json" //Returnen dit wanneer JSON.parse() gefailed is.
    }
}

const invalidJson = '{"name": "Product", "price": 45,}'; //Ongeldige code door , bij price
console.log("Json validatie (geldig):", validateJson(jsonData));
console.log("Json validatie (ongeldig):", validateJson(invalidJson));