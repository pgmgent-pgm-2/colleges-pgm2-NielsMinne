const { sum, division, multiply } = require('./modules/calculations.js') //Destructured functies uit calculations.js
const { round, upperFirst } = require('lodash'); //npm package lodash van npmjs.com

/* Zelfgemaakte functies (import) */
console.log(division(10, 2));
console.log(sum(5, 6));
console.log(multiply(5, 6));


/*Lodash */
console.log(round(3.33333333333, 2))
console.log(upperFirst('hello world!'));


