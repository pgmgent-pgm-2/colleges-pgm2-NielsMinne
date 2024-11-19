//FUNCTIONS

console.log("Function: ",sum(2,3));
console.log("Standard Parameter: ",sum()); // = 2 want x en y is standaard 1;

//De parameters krijgen een standaard waarde mee van 1
function sum(x = 1, y = 1) { //Met deze schrijfwijze mogelijk om overal in je code aan te roepen (hoisting)
  return x + y;
}

const sumArrow = (x, y) => { //Kan enkel aangeroepen worden na declaratie
    return x + y;
}

console.log("Arrow Function: ",sumArrow(2,1));

// const sumArrowShort = (x, y) => x + y;

/* --------------------------------------------------------------------------- */

//ARRAY
const numbers = [4,2];
console.log("Array variable: ", sum(numbers[0], numbers[1]));

function makeList(items){
    return items.join(" & "); //Voegen de array elementen samen in 1 string met '&'
}

const colors = ["red", "green", "blue"];
console.log(makeList(colors));

/* --------------------------------------------------------------------------- */

//OBJECT
const obj = {
    x: 10, 
    y: 20
};

const result = sum(obj.x, obj.y);
console.log("Object: ",result);

/* --------------------------------------------------------------------------- */

//FUNCTIONS ALS ARGUMENT
function divide(x, y){
    return x / y;
}

function multiply(x, y){
    return x * y; 
}

function doOperation(x, y, operation){
    return operation(x, y); //De functie die we meegeven in de parameter operation wordt aangeroepen met de meegegeven variabelen
}

let divideResult = doOperation(10, 2, divide);
console.log("Divide : ",divideResult);

let multiplyResult = doOperation(10, 2, multiply);
console.log("Multiply: ",multiplyResult);

/* --------------------------------------------------------------------------- */

//CALLBACK
function handleData(data) {
    console.log("Callback: ", data);
}

function fetchData(callback){ 
    const data = "Gegevens van de server";
    callback(data);
}

fetchData(handleData); //De callback function in dit geval is handleData die aangeroepen wordt in fetchData

/* --------------------------------------------------------------------------- */

//PASS BY VALUE & REFERENCE

//BY VALUE = Primitives zoals number, string , boolean, ... (Originele waarden worden gekopieerd)
function addFive(x) {
    x = x + 5;
    console.log("Inside function:", x); // Binnen addFive wordt x verhoogd met 5 en afgedrukt als 15.
  }
  
  let number = 10;
  addFive(number);
  console.log("Outside function:", number);

  //BY REFERENCE = Arrays & Objects (Originele waarden worden aangepast)
  function addItemToArray(arr) {
    arr.push("new item");
    console.log("Inside function:", arr); // Hier wordt items doorgegeven aan addItemToArray.
  }
  
  let items = ["item1", "item2"];
  addItemToArray(items);
  console.log("Outside function:", items);

