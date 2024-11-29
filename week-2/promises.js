//! Promises hebben drie mogelijke toestanden:
//! 1. **Pending**: De operatie is bezig.
//! 2. **Fulfilled**: De operatie is geslaagd en `resolve()` is aangeroepen.
//! 3. **Rejected**: De operatie is mislukt en `reject()` is aangeroepen.

const operationIsSuccesful = true;

//! Een Promise wordt aangemaakt met twee parameters: `resolve` en `reject`.
const willOperationSucceed = new Promise((resolve, reject) => {
    if (operationIsSuccesful) {
        resolve("Operation has succeeded"); // Bij succes wordt deze boodschap geretourneerd.
    } else {
        reject(new Error("Operation has failed. The patient is dead")); // Bij mislukking wordt een foutmelding geretourneerd.
    }
});

console.log(willOperationSucceed); // Toont de promise met status "fulfilled" of "rejected".

//-------------------------------------------------------------------------

// **Promise binnen een functie**
function fetchData() {
    return new Promise((resolve, reject) => {
        if (3 < 1) {
            reject("Er ging iets mis, 503 error"); // Reject bij mislukking.
        }
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            resolve(data); // Succesvolle uitvoering na 2 seconden.
        }, 2000);
    });
}

// **Promise methoden**
//! `.then()`: Uitgevoerd als de promise geslaagd is. -> succesHandler
//! `.catch()`: Uitgevoerd als de promise mislukt. -> errorHandler
//! `.finally()`: Altijd uitgevoerd, ongeacht succes of mislukking. -> cleanupHandler

fetchData()
    .then((data) => {
        console.log(data); // Verwerkt de verkregen data bij succes.
    })
    .catch((error) => {
        console.error("Fout bij ophalen van de gegevens:", error); // Foutmelding loggen.
    })
    .finally(() => {
        console.log("Eind van de promise"); //! Altijd uitgevoerd ongeacht of de promise geslaagd is of mislukt.
    });

//-------------------------------------------------------------------------

//**Promise chaining** (ketting van beloftes)

const willIGetNewSmartphone = (isDadHappy) => {
    return new Promise((resolve, reject) => {
        if (isDadHappy) {
            resolve({
                brand: "Xiaomi",
                color: "Gradient Blue to Green"
            });
        } else {
            reject(new Error("Dad is not happy"));
        }
    });
};

const showOff = (phone) => {
    return new Promise((resolve) => {
        const message = `Hey friend, I have a new ${phone.color} ${phone.brand} phone.`;
        resolve(message);
    });
};

function askDadForSmartphone(isDadHappy) {
    willIGetNewSmartphone(isDadHappy)
        .then((phone) => showOff(phone)) // Data wordt doorgegeven naar de volgende Promise.
        .then((message) => console.log(message)) // Logt het resultaat van `showOff()`.
        .catch((error) => console.error(error)); // Logt de fout als `reject()` is aangeroepen.
}

askDadForSmartphone(true); // Zet `true` om te zien dat je een telefoon krijgt.

//-------------------------------------------------------------------------

// **Parallelle uitvoering van Promises**

//! `Promise.all()` wacht totdat alle promises zijn voltooid (of één faalt).
const a = () => new Promise((resolve) => setTimeout(() => resolve("a"), 3000));
const b = () => new Promise((resolve) => setTimeout(() => resolve("b"), 1000));
const c = () => new Promise((resolve) => setTimeout(() => resolve("c"), 1000));
const d = () => new Promise((resolve) => setTimeout(() => resolve("d"), 1000));

console.time("promise.all");

Promise.all([a(), b(), c(), d()]) // Alle beloftes moeten slagen.
    .then((results) => console.log(`Done! ${results}`)) // Toont alle resultaten.
    .catch(console.error) // Logt de fout als er een faalt.
    .finally(() => console.timeEnd("promise.all"));

//! `Promise.race()` retourneert de eerste geslaagde of mislukte promise.
console.time("promise.race");
Promise.race([a(), b(), c(), d()]) 
    .then((result) => console.log(`Done! ${result}`)) // Toont het resultaat van de snelste promise.
    .catch(console.error)
    .finally(() => console.timeEnd("promise.race"));

//-------------------------------------------------------------------------

// **Async/Await**


//! Async/Await maakt de leesbaarheid van de code beter.
function fetchData() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.2) {
            reject(new Error("Foutje van de firma"));
        }
        setTimeout(() => {
            resolve("Great success: Deze data komt van de server.");
        }, 2000);
    });
}

//!  `try...catch` blok om fouten op te vangen zoals bij synchrone code.
async function processData() { //! Async weglaten maar wel await gebruiken resulteert in een syntax error.
    try {
        const data = await fetchData(); // Wacht totdat de promise is voltooid.
        console.log("Hier hebben we op moeten wachten:", data);
    } catch (error) {
        console.error("Fout tijdens de verwerking:", error.message);
    } finally {
        console.log("Het is gedaan"); //! Altijd uitgevoerd ongeacht of de promise geslaagd is of mislukt.
    }
}

processData();

//-------------------------------------------------------------------------

// **Data ophalen met `fetch`**


//! `fetch` is een moderne manier om gegevens van een server op te halen.
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json(); // Converteert de respons naar JSON.
    return data;
}

async function processData() {
    try {
        const result = await fetchData(); // Haalt de gegevens op.
        console.log("Verwerkte gegevens:", result);
    } catch (error) {
        console.error("Fout bij ophalen van gegevens:", error);
    }
}

processData();