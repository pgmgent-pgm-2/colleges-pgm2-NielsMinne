//Fetching

//API in javscript checken = can i use? https://caniuse.com/
//Fetch is een PROMISE-BASED interface dat ons toelaat om HTTP aanvragen (Eng. requests) te maken via JavaScript code.

//Fetch functie maakt een netwerk verzoek en returned een promised based response.
//Een promise kunnen we afhandelen met .then() en .catch() methodes. of met async/await.

//fetch bevat twee argument:
// 1. De URL van de resource die we willen ophalen.
// 2. Een optioneel object dat de configuratie bevat voor de request. (soort verzoek)


//Promise
// const countriesPromise = fetch("https://restcountries.com/v3.1/all");
// console.log(countriesPromise); //Promise staat in begin op Pending
// setTimeout(() => { //opnieuw loggen na 5 seconden om het wat tijd te geven om de data op te halen. Promise -> Fulfilled
//   console.log(countriesPromise);
// }, 5000);


//Data aanspreken met .then() 
// countriesPromise.then((response) => { //Bij een response kunnen we de data ophalen met de .then() methode.
//     return response.text(); //We gebruiken de .text() methode om de data op te halen.
// }).then((data) => {
//     const objData = JSON.parse(data); //Parsen onze text naar een bruikbaar javascript object
//     console.log(objData); //We loggen de data in de console.
// })

//.text() en JSON.parse kun je vervangen met 1 lijn die dit voor jou doet = .json()
// countriesPromise.then((response) => { //Bij een response kunnen we de data ophalen met de .then() methode.
//   return response.json(); //Dit zet jou data om naar een bruikbaar javascript object
// }).then((data) => {
//   console.log(data); //We loggen de data in de console. 
// })

//Volledig uitgewerkt voorbeeld
// const countriesPromise = fetch("https://restcountries.com/v3.1/all", {})
//   .then((response) => {
//     if(response.status === 200){
//         return response.json();
//     }

//     throw Error("Unable to fetch the data");
//   })
//   .then((jsonData) => {
//     console.log(jsonData);
    
//   })
//   .catch((error) => {
//     console.log(`Catch: ${error}`);
//   });


//Data in html displayen met een fetch via callback
const $list = document.querySelector('#list');

const makeList = (items) =>{ //Dit is onze functie die we als callback zullen meegeven 
  const first20Items = items.slice(0,50);
  for(const item of first20Items){
      
      $list.innerHTML += `<li>${item.name.common}</li>`;
  }
}

const getData = async(callback) => {
  try{
      const response = await fetch("https://restcountries.com/v3.1/all", {});

      if(response.status === 200){
          const jsonData = await response.json();
          callback(jsonData); //Dit is in principe de functie makeList want de geven we mee wanneer we getData aanspreken als argument.
          console.log(jsonData);
          return;
      }

      throw new Error("Unable to fetch the data");
  }
  catch(error){
      console.log(`Catch: ${error}`);
  }
};

getData(makeList);

//-------------------------------------------------------------------------------

//Methods in object van fetch
// GET, POST, PUT , PATCH & DELETE
//GET = Ophalen van data
//POST = Versturen van data
//PUT = Vervangen van data (Let op dat hier alles overschreven wordt)
//PATCH = WIjzigen van bepaalde data
//Delete = Verwijderen van data

//GET
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET"
  })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));
    

//Query Parameters in URL (Afhankelijk van de data in je API)
//1. opzoeken per id -> https://jsonplaceholder.typicode.com/posts/1  -> we voegen /1 toe aan de url om de eerste post op te halen
//2. Conditions -> https://jsonplaceholder.typicode.com/posts/?userId=1 -> Haalt alle posts op die userId = 1 hebben
//3. Nested -> https://jsonplaceholder.typicode.com/posts/1/comments -> Haalt de comments uit de eerste post

//POST

let data = {
    title: "Graduaat Programmeren",
    body: "Tijdens het Graduaat Programmeren specialiseer je je in JavaScript, HTML, CSS, UI/UX en software engineering. Naast deze technische kant, leer je ook om creatief en commercieel te denken. Als programmeur creëer je namelijk niet alleen aantrekkelijke en functionele websites, maar werk je ook samen met heel wat bedrijven. Na deze opleiding kan je aan de slag als front-end developer, CMS Themer of full-stack JavaScript developer.",
    userId: 1,
};
  
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify(data), //We moeten ons javascript object omzetten naar JSON voor de POST. -> Stringify
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

//PUT

let putData = {
    id: 1,
    title: "Graduaat",
    body: "Lorem ipsum dolor ancit amet",
    userId: 1
}

fetch("https://jsonplaceholder.typicode.com/posts/1", { //hoeven specifiek wel meegeven welke post
  method: "PUT",
  body: JSON.stringify(putData), //We moeten ons javascript object omzetten naar JSON voor de POST. -> Stringify
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

//PATCH

const patchData = {
  title: "Nieuwe titel",
}

fetch("https://jsonplaceholder.typicode.com/posts/1", { //hoeven specifiek wel meegeven welke post
  method: "PATCH",
  body: JSON.stringify(patchData), //We moeten ons javascript object omzetten naar JSON voor de POST. -> Stringify
  headers: { "Content-type": "application/json; charset=UTF-8" },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));


//Delete (verwijdert de data van post 1)
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));