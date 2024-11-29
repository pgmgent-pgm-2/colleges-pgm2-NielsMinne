// function fetchDataSync() {
//     console.log("Start ophalen van gegevens");

//     // Simuleer een langzame API-oproep met setTimeout
//     for (let i = 0; i < 5000000000; i++) {
//       // Doe niets, wacht gewoon
//     }

//     console.log("Gegevens opgehaald");
//     return "Mijn gegevens";
//   }

//   console.log("Begin programma");

//   // Roep de synchrone functie aan
//   const data = fetchDataSync();
//   console.log("Verwerken van gegevens:", data);

//   console.log(
//     "Nu wordt er andere code uitgevoerd, zoals bijvoorbeeld het toevoegen van event listeners, mogelijkheid om dropdowns te openen, ..."
// );

//-------------------------------------------------------------------------------------------------

//Asynchrone functies
// Asynchroon door middel van callbacks

//callbacks = anonieme functie die wordt doorgegeven als argument aan een andere functie
//functie wordt als argument meegegeven aan een andere functie

// function fetchData(callback) {
//   console.log("Start ophalen van gegevens");
//   setTimeout(() => {
//     console.log("Gegevens opgehaald");
//     callback("Mijn gegevens");
//   }, 2000);
// }

// function processData(data) {
//   console.log("Verwerken van gegevens:", data);
// }

// // Roep fetchData aan met processData als callback
// fetchData(processData);

// //--------------------------------------------------------------------------

// //Callback hel = situatie van veel geneste callbacks -> onleesbare code

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Gegevens opgehaald");
//     callback("Mijn gegevens");
//   }, 2000);
// }

// function processData(data, callback) {
//   setTimeout(() => {
//     console.log("Gegevens verwerkt");
//     callback(`Verwerkte gegevens: ${data}`);
//   }, 2000);
// }

// function displayResult(result) {
//   console.log("Resultaat weergeven:", result);

// fetchData((data) => {
//   processData(data, (processedData) => {
//     displayResult(processedData);
//   });
// });


//--------------------------------------------------------------------------

// Waarom een arrow functie bij callbacks? binding van this is anders bij arrow functions
// Bij een arrow function is de waarde van this hetzelfde als de waarde van this in de omliggende code

//Arrow function vermijdt de binding van this en is een kortere syntax!

// function Timer() {
//     this.seconds = 0;
  
//     // setInterval met een traditionele functie
//     setInterval(function () { //binding van this
//       this.seconds++;
//       console.log(`Verstreken tijd: ${this.seconds} seconden`); // Nan omdat de binding this slaat op de setInterval functie
//     }, 1000);
//   }
  
// const timer = new Timer();
  
// function Timer2() {
//     this.seconds = 0;
  
//     // setInterval met een arrow function
//     setInterval(() => { //geen biniding van this
//       this.seconds++;
//       console.log(`Verstreken tijd: ${this.seconds} seconden`); //Bij een arrow function slaat de this binding op de omliggende code
//     }, 1000);
//   }
  
// const timer2 = new Timer2()