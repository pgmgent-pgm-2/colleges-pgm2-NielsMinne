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

//Asynchrone functies
// asynchroon door middel van callbacks

//callbacks = anonieme functie die wordt doorgegeven als argument aan een andere functie
// functie wordt als argument meegegeven aan een andere functie

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
// }

// // Callback hell
// fetchData((data) => {
//   processData(data, (processedData) => {
//     displayResult(processedData);
//   });
// });

//Waarom een arrow functie bij callbacks? binding van this is anders bij arrow functions
// Bij een arrow function is de waarde van this hetzelfde als de waarde van this in de omliggende code

//Arrow function vermijdt de binding van this en is een kortere syntax

// function Timer() {
//     this.seconds = 0;
  
//     // setInterval met een traditionele functie
//     setInterval(function () {
//       this.seconds++;
//       console.log(`Verstreken tijd: ${this.seconds} seconden`); // Nan omdat de binding this slaat op de setInterval functie
//     }, 1000);
//   }
  
// const timer = new Timer();
  
// function Timer2() {
//     this.seconds = 0;
  
//     // setInterval met een arrow function
//     setInterval(() => {
//       this.seconds++;
//       console.log(`Verstreken tijd: ${this.seconds} seconden`); //Bij een arrow function slaat de this binding op de omliggende code
//     }, 1000);
//   }
  
// const timer2 = new Timer2();
  

//PROMISE
//promise heeft 3 toestanden:
//1. Pending
//2. Fulfilled
//3. Rejected

//promise heeft 2 standaard parameters: resolve en reject

// const operationIsSuccesful = false;
// const willOperationSucceed = new Promise((resolve, reject ) => {
//     if (operationIsSuccesful) {
//         resolve("Operation has succeeded");
//     }
//     else {
//         reject(new Error ("Operation has failed. The patient is dead"))
//     }
// })

// console.log(willOperationSucceed);

//promise in een function
// function fetchData() {
    
//     return new Promise((resolve, reject) => {
//         if (3 > 1) {
//             reject("Er ging iets mis, 503 error");
//         }

//         setTimeout(() => {
//             const data = { name: "John", age: 30 };
//             resolve(data);
//         }, 2000)
//     })
// }

// console.log(fetchData());

//.then() wordt uitgevoerd wanneer de Promise is vervuld.
//.catch() wordt uitgevoerd bij afwijzing
//.finally() wordt sowieso uitgevoerd ongeacht

// fetchData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.error("Fout bij ophalen van de gegevens:", error);
//     })
//     .finally(() => {
//         console.log("Eind van de promise");
//     })

// const promise = fetchData();

//Voorbeeld promise chaning
// const willIGetNewSmartphone = (isDadHappy) => {
//     return new Promise((resolve, reject) => {
//         if (isDadHappy) {
//           resolve({
//             brand: "Xiaomi",
//             color: "Gradient Blue to Green",
//           });
//         } else {
//           reject(new Error("Dad is not happy"));
//         }
//       });
//     };
    
//     const showOff = (phone) => {
//       return new Promise((resolve, reject) => {
//         const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
//         resolve(message);
//       });
//     };
    
//     function askDadForSmartphone(isDadHappy) {
//       willIGetNewSmartphone(isDadHappy)
//         .then((phone) => showOff(phone))
//         .then((message) => console.log(message))
//         .catch((error) => console.error(error));
//     }
    
// askDadForSmartphone(true);
    

// //Parallel uitvoeren van promises

// //Promise.all() -> Wanneer je meerdere promises hebt en je wilt dat ze allemaal uitgevoerd worden.

// // const a = () => new Promise((resolve) => setTimeout(() => resolve("a"), 3000));
// // const b = () => new Promise((resolve) => setTimeout(() => resolve("b"), 1000));
// // const c = () => new Promise((resolve) => setTimeout(() => resolve("c"), 1000));
// // const d = () => new Promise((resolve) => setTimeout(() => resolve("d"), 1000));

// // console.time("promise.all");

// // Promise.all([a(), b(), c(), d()])
// //   .then((results) => console.log(`Done! ${results}`))
// //   .catch(console.error)
// //     .finally(() => console.timeEnd("promise.all"));
  
// //Promise.race()
    
// const a = () => new Promise((resolve) => setTimeout(() => resolve("a"), 1000));
// const b = () => new Promise((resolve) => setTimeout(() => resolve("b"), 1000));
// const c = () => new Promise((resolve) => setTimeout(() => resolve("c"), 1000));
// const d = () => new Promise((resolve) => setTimeout(() => resolve("d"), 1000));

// console.time("promise.race");
// Promise.race([a(), b(), c(), d()])
//   .then((results) => console.log(`Done! ${results}`))
//   .catch(console.error)
//     .finally(() => console.timeEnd("promise.race"));
  
//Async / Await
    
//-> Verbeterd de leesbaarheid van onze code

function fetchData() {
    return new Promise((resolve, reject) => {
        if(Math.random() < 0.5) {
            reject(new Error("Foutje van de firma"));
        }

      setTimeout(() => {
        resolve("Great success: Deze data komt van de server.");
      }, 2000);
    });
}
  
// async function processData() { //Async weg wel await = syntaxfout 
//     const data = await fetchData();
//     console.log("Hier hebben we op moeten wachten:", data);
//     return data;
// }

// processData();

//try catch behandelt fouten zoals een vergelijkbare manier als synchrone code

// async function processData() {
//     try {
//         const data = await fetchData();
//             console.log(data);
//     }
//     catch(error) {
//         console.error("Fout tijdens de verwerking:", error.message);
//     } finally { //wordt altijd uitgevoerd ongeacht er fouten zijn
//         console.log("het is gedaan");
//     }
// }

// processData();

//fetch

// met de fetch method kan je data ophalen van een server
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = response.json();
    return data;
}

async function processData() {
    try {
      const result = await fetchData();
      console.log("Verwerkte gegevens:", result);
    } catch (error) {
      console.error("Fout bij ophalen van gegevens:", error);
    }
}
  
processData();