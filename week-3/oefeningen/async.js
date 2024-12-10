// Promise: Oefening 3
function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > .3) {
                resolve('Gegevens opgehaald');
            } else {
                reject('Fout bij ophalen van gegevens')
            }
        }, 2000);
    });
}

// Oefening 5
const fetchDataPromise = async (url) => {
    try {
        const responsePromise = await fetch(url);
        return responsePromise.json(); // Return a promise
    } catch (err) {
        console.log('Er ging iets mis bij het ophalen van de data.');
    }
};

const promise1 = fetchDataPromise("https://jsonplaceholder.typicode.com/users");
const promise2 = fetchDataPromise("https://jsonplaceholder.typicode.com/posts/1");

Promise.all([promise1, promise2])
    .then(([users, posts]) => { // Destructuring
        console.log(users);
        console.log(posts);
    })
    .catch((error) => {
        console.log(error);
    });

// Oefening 6
async function processDataWithAsyncAwait() {
    try {
        const data = await fetchDataWithPromise();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

// processDataWithAsyncAwait();

// Oefening 7
const sources = ['https://jsonplaceholder.typicode.com/users', 'https://jsonplaceholder.typicode.com/posts/1']

async function fetchMultipleData(sources) {
    const promises = sources.map(source => fetchData(source));
    try {
        const [users, posts] = await Promise.all(promises);
        console.log('Results', users, posts);
    } catch (error) {
        console.log('Error: ', error);
    }
}

fetchMultipleData(sources);

// Oefening 8
async function fetchSequentialData() {
    try {
        const firstData = await fetchDataWithPromise();
        console.log('First data', firstData);
        const secondData = await fetchDataWithPromise();
        console.log('Second data', secondData);
    } catch (error) {
        console.error(error);
    }
}

fetchSequentialData();

// Oefening 9
async function fetchRaceData() {
    try {
        const winnerResults = await Promise.race([fetchDataWithPromise(), fetchDataWithPromise()]);

        console.log('winnerResults', winnerResults);
    } catch (error) {
        console.error(error);
    }
}

fetchRaceData();

// Oefening 10
async function fetchDataFromAPI(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userData = await response.json();
        console.log(userData);
    } catch (error) {
        console.log(error);
    }
}

fetchDataFromAPI(1);

// Oefening 11
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error)
    }
}

fetchData("https://api.artic.edu/api/v1/artworks");
fetchData("https://dummyjson.com/products");
fetchData("https://dummyjson.com/users/1");

// Oefening 12
const translations = {
    BE: "Welkom in België",
    NL: "Welkom in Nederland",
    DEFAULT: "Hi there!",
};

async function greetUser(ip) {
    try {
        let apiLink = 'https://freeipapi.com/api/json';

        if (ip) {
            apiLink = `${apiLink}/${ip}`;
        }

        const res = await fetch(apiLink);
        const { countryCode } = await res.json();

        console.log(translations[countryCode]);
    } catch (error) {
        console.log(error);
    }
}

greetUser(); // Welkom in België