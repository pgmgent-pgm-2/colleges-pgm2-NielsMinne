import fadeIn from "./src/animations.js";
import {myVariable, users, myFunction} from "./src/external.js";



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded');
    console.log(myVariable)
    console.log(users);
    myFunction();
    fadeIn();
})