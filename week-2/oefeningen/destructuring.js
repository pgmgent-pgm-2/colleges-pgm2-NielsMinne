//1. Destructuring met Arrays
// const letters = ["A", "B", "C"];

// const [firstLetter, secondLetter, thirdLetter] = letters;

//2. Destructuring met Geneste Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
  
const [[a], [, b], [, , c]] = matrix;

//3. Destructuring en Swap
let x = 5;
let y = 10;

[x, y] = [y, x];

console.log(x, y); // Output: 10 5

//4. Destructuring met Strings
const sentence = "This is a sentence.";
const [firstLetter, ...restOfSentence] = sentence;
console.log(firstLetter, restOfSentence.join("")); // Output: T his is a sentence.

//5. Destructuring in Functies

function multiply([a,b]) {
    console.log(a * b);
}


multiply([3, 5]); // Output: 15
multiply([7, 2]); // Output: 14

//6. Destructuring en Rest Parameter
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

//7. Destructuring met Geneste Objecten
const person = {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Anytown",
    },
  };
  
const { name, age, address: { street, city } } = person;
  
  console.log(name, age, street, city);

//8. Destructuring en Default Values
  
const book = { title: "JavaScript Basics", author: "John Doe" };

const { title, author, pages = 200 } = book;

console.log(title, author, pages);

//9. Destructuring in Functieparameters

function printDetails({ name, age = 25, gender = "Unknown" }) {
    console.log(name, age, gender);
}

// Voorbeeldgebruik:
printDetails({ name: "Alice", age: 30, gender: "Female" }); // Output: Name: Alice, Age: 30, Gender: Female
printDetails({ name: "Bob" }); // Output:  Name: Alice, Age: 25, Gender: Unknown

//10. Destructuring en Spread Operator in Functieparameters
// Je code hier

// Voorbeeldgebruik:

// function mergeOptions(obj1,obj2) {
//     const { option1, option2 } = obj1
//     const { option3, option4 } = obj2

//     const mergedObj = { ...obj1, ...obj2 };
//     console.log(mergedObj);
// }

function mergeOptions(obj1,obj2) {

    const mergedObj = { ...obj1, ...obj2 };
    console.log(mergedObj);
}



mergeOptions({ option1: "A", option2: "B" }, { option3: "C", option4: "D" }); // Output: { option1: "A", option2: "B", option3: "C", option4: "D" }