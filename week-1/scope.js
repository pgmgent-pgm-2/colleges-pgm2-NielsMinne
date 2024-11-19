//GLOBAL VS LOCAL SCOPE

// let message = "Hello There, Obi-Wan Kenobi"; //Global scope is buiten de functie en kan overal aangesproken worden
function helloThere(){
    let message = "Hello There, Obi-Wan Kenobi"; //Dit is de Local scope
    console.log(message);
    message = "Goodbye now, General Kenobi"; 
}

helloThere();
// console.log(message); //Error want die zit in de local scope van de functie helloThere

/* --------------------------------------------------------------------------- */

//NESTED FUNCTIONS
function outerFunction(){
    let outerVariable = "Outer World";

    function innerFunction(){
        let innerVariable = "Inner World";
        console.log(outerVariable);
        console.log(innerVariable);
    }

    innerFunction();
    // console.log(innerVariable); //ReferenceError: innerVariable is not defined (zit in de local scope van innerFunction)
}

outerFunction();

/* --------------------------------------------------------------------------- */

//Value vs Reference

//VALUE
function doubleNumberValue(number) {
    number = number * 2;
    console.log("Binnen de functie:", number); // 10
}
  
  let originalNumber = 5;
  doubleNumberValue(originalNumber);
  console.log("Buiten de functie:", originalNumber); // 5 (De originele waarde is niet veranderd door de functie = Pass by Value)

//REFERENCE
function doubleNumber(obj) {
    obj.number = obj.number * 2;
    console.log("Binnen de functie:", obj.number); // 10
  };
  
  let originalObject = {
    number: 5,
  };
  doubleNumber(originalObject);// 10
  doubleNumber(originalObject); // 20
  
  console.log("Buiten de functie:", originalObject); // {number: 20} Het object is wel veranderd door de functie = Pass by Reference
