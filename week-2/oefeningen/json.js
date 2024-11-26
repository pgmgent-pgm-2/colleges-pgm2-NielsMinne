// 5. JSON-string met een student object
const student = `{
    "name": "Alice",
    "age": 22,
    "numbers": [90, 85, 95],
    "isActive": true
  }`;
  
  // 6. JSON-array met meerdere objecten
  const persons = `
  [
    {
      "firstName": "Keano",
      "lastName": "Persoonlijk",
      "age": 18,
      "address": {
        "street": "Gaat je niet aan",
        "stad": "Hamme",
        "land": "Belgium"
      }
    },
    {
      "firstName": "Niels",
      "lastName": "Minne",
      "age": 31,
      "address": {
        "street": "Gaat je niet aan",
        "stad": "Brugge",
        "land": "Belgium"
      }
    }
  ]
  `;
  
  // 7. JSON-conversie: Object naar JSON-string
  const car = {
    merk: "BMW",
    model: "X5",
    bouwjaar: 2020,
    isNieuw: true
  };
  
  const jsonAuto = JSON.stringify(car); // Object wordt omgezet naar JSON-string
  console.log(jsonAuto); // Output: {"merk":"BMW","model":"X5","bouwjaar":2020,"isNieuw":true}
  
  // 8. JSON-validatie functie
  function validateJson(jsonString) {
    try { 
      JSON.parse(jsonString); // Probeert JSON te parsen
      return "Geldige JSON"; // Als parsing slaagt
    } catch { 
      return "Ongeldige JSON"; // Als parsing faalt
    }
  }
  
  console.log(validateJson('{"name":"John","age":25,"city":"New York"}')); // Geldige JSON
  console.log(validateJson('{"firstName:John","lastName":"Doe"}')); // Ongeldige JSON
  console.log(validateJson('{"color":"red","wheels":4,"engine":{"cylinders":6,"size":3.6}}')); // Geldige JSON
  
  // 9. JSON-string naar JavaScript-object omzetten
  const fruit = JSON.parse('{"type":"fruit","name":"apple","color":"red","quantity":3}');
  console.log(fruit); // Output: { type: 'fruit', name: 'apple', color: 'red', quantity: 3 }
  
  // 10. Complex JSON-object: Universiteit
  const university = `{
    "universityName": "Global University",
    "establishedYear": 1950,
    "isPublic": true,
    "departments": [
      {
        "departmentName": "Computer Science",
        "faculty": "Engineering and Technology",
        "courses": [
          "Introduction to Programming",
          "Data Structures",
          "Artificial Intelligence"
        ]
      },
      {
        "departmentName": "Business Administration",
        "faculty": "Management Studies",
        "courses": [
          "Principles of Management",
          "Marketing Strategies",
          "Financial Accounting"
        ]
      },
      {
        "departmentName": "Biology",
        "faculty": "Science",
        "courses": [
          "Cell Biology",
          "Genetics",
          "Ecology"
        ]
      }
    ],
    "contactInfo": {
      "email": "info@globaluniversity.edu",
      "phone": "+1-800-555-UNIV",
      "website": "www.globaluniversity.edu"
    }
  }`;
  
  // 11. JSON-array met diverse datatypen
  const datatypes = `[
    42,
    "Hello, world!",
    true,
    {
      "name": "John Doe",
      "age": 30,
      "isStudent": false
    }
  ]`;
  
  // 12. JSON met geneste arrays (klasgroepen)
  const classGroups = `{
    "klasgroepen": [
      ["Alice", "Bob", "Charlie"],
      ["David", "Eve", "Frank"],
      ["Grace", "Heidi", "Ivan"]
    ]
  }`;
  
  // 13. JSON-object met een method (JSON ondersteunt GEEN functies)
// JSON without the method (since JSON cannot store functions)
const personJSON = `{
    "naam": "John",
    "leeftijd": 30
  }`;
  
  // Parse JSON string into a JavaScript object
  const john = JSON.parse(personJSON);
  
  // Add the method to the object after parsing
  john.verjaar = function () {
    this.leeftijd++;
  };
  
  console.log(john.leeftijd); // Output: 30
  john.verjaar(); // Call the method to increment "leeftijd"
  console.log(john.leeftijd); // Output: 31
  