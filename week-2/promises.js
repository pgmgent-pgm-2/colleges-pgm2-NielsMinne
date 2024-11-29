//PROMISE
//Promise heeft 3 toestanden:
//1. Pending
//2. Fulfilled
//3. Rejected

//Promise heeft 2 standaard parameters: resolve en reject

const operationIsSuccesful = true;

const willOperationSucceed = new Promise((resolve, reject ) => {
    if (operationIsSuccesful) {
        resolve("Operation has succeeded");
    }
    else {
        reject(new Error ("Operation has failed. The patient is dead"))
    }
})

console.log(willOperationSucceed); //Promise heeft een resolve terug met daarin de data "Operation has succeeded";

//-------------------------------------------------------------------------

//Promise in een function
function fetchData() {
    
    return new Promise((resolve, reject) => {
        if (3 < 1) {
            reject("Er ging iets mis, 503 error");
        }

        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data);
        }, 2000)
    })
}

//Methoden op een Promise
//.then() wordt uitgevoerd wanneer de Promise is vervuld. -> succesHandler
//.catch() wordt uitgevoerd bij afwijzing -> errorHandler
//.finally() wordt sowieso uitgevoerd ongeacht -> cleanupHandler

fetchData() //1. Fetch de data en krijg die terug in de resolve
    .then((data) => { //Dan nemen we de data en doen we hier iets mee.
        console.log(data);
    })
    .catch((error) => { //Indien een error zal de catch uitgevoerd worden
        console.error("Fout bij ophalen van de gegevens:", error);
    })
    .finally(() => { //finally zal altijd uitgevoerd worden ongeacht je een resolve of reject krijgt.
        console.log("Eind van de promise");
    })


//Voorbeeld promise chaning

const willIGetNewSmartphone = (isDadHappy) => {
    return new Promise((resolve, reject) => { //Eerste Promise function
        if (isDadHappy) {
          resolve({
            brand: "Xiaomi",
            color: "Gradient Blue to Green",
          });
        } else {
          reject(new Error("Dad is not happy"));
        }
      });
    };
    
    const showOff = (phone) => { //2de promise fcuntion
      return new Promise((resolve, reject) => {
        const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
        resolve(message);
      });
    };
    
    function askDadForSmartphone(isDadHappy) { //Geven mee als Dad happy is (boolean)
      willIGetNewSmartphone(isDadHappy) //Als dat happy is dan krijg ik resolve terug met de data
        .then((phone) => showOff(phone)) //Deze data steek ik vervolgens in mijn showOff function die op zijn beurt de boodschap in resolve meegeeft.
        .then((message) => console.log(message)) //Ik log de message
        .catch((error) => console.error(error));
    }
    
askDadForSmartphone(true);
    
//-------------------------------------------------------------------------

//PARALLEL UITVOEREN VAN PROMISES.

// Promise.all() -> Wanneer je meerdere promises hebt en je wilt dat ze allemaal uitgevoerd worden.

const a = () => new Promise((resolve) => setTimeout(() => resolve("a"), 3000));
const b = () => new Promise((resolve) => setTimeout(() => resolve("b"), 1000));
const c = () => new Promise((resolve) => setTimeout(() => resolve("c"), 1000));
const d = () => new Promise((resolve) => setTimeout(() => resolve("d"), 1000));

console.time("promise.all");

Promise.all([a(), b(), c(), d()]) //We wachten tot alle promises zijn fulfilled of een error
  .then((results) => console.log(`Done! ${results}`))
  .catch(console.error)
    .finally(() => console.timeEnd("promise.all"));
  
//Promise.race() -> De snelst
    
const e = () => new Promise((resolve) => setTimeout(() => resolve("e"), 3000));
const f = () => new Promise((resolve) => setTimeout(() => resolve("f"), 1000));
const g = () => new Promise((resolve) => setTimeout(() => resolve("g"), 1000));
const h = () => new Promise((resolve) => setTimeout(() => resolve("h"), 2000));

console.time("promise.race");
Promise.race([a(), b(), c(), d()])
  .then((results) => console.log(`Done! ${results}`))
  .catch(console.error)
    .finally(() => console.timeEnd("promise.race"));


//-------------------------------------------------------------------------

//Async / Await
    
//-> Verbeterd de leesbaarheid van onze code

function fetchData() {
    return new Promise((resolve, reject) => {
        if(Math.random() < 0.2) {
            reject(new Error("Foutje van de firma"));
        }

      setTimeout(() => {
        resolve("Great success: Deze data komt van de server.");
      }, 2000);
    });
}
  
async function processData() { //Async weg wel await = syntaxfout 
    const data = await fetchData(); //Await is nog -> we moeten wachten tot onze promise is gedaan om de data te krijgen
    console.log("Hier hebben we op moeten wachten:", data);
    return data;
}

processData();

//try...catch behandelt fouten zoals een vergelijkbare manier als synchrone code

async function processData() {
    try {
        const data = await fetchData();
            console.log(data);
    }
    catch(error) {
        console.error("Fout tijdens de verwerking:", error.message);
    } finally { //wordt altijd uitgevoerd ongeacht er fouten zijn
        console.log("het is gedaan");
    }
}

processData();

//-------------------------------------------------------------------------

//FETCH

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