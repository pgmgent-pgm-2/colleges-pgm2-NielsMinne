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

//5.