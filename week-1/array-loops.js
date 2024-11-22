//Loops (array)

//gebruik van een for-loop (Boomer Loop)
const animals = ["Cheetah", "Cockroach", "Koala", "Elephant", "Raccoon", "T-Rex"];
for (let i = 0; i < animals.length; i++){
    const currentAnimal = animals[i];
    console.log(`Dier op index ${i}: ${currentAnimal}`);
}

//Index hoeft niet met 1 altijd omhoog te gaan, kan je ook zelf kiezen (dit geval -> even getallen)
console.log("Dieren op even indexen:");
for (let i = 0; i < animals.length; i += 2){
    console.log(animals[i]);
}

// -------------------------------------

//Gebruik van een for-loop
const countries = ["Belgie", "Canada", "Trumpland", "Japan", "PutinLand"];
for (const country of countries) {
    console.log(`Land: ${country}`);
}

//Wanneer de index nodig is in een for...of loop
for (const [index, country] of countries.entries()) {
    console.log(`Index ${index}: ${country}`);
}

// -------------------------------------

//forEach
const games = ["Halo", "Call of Duty", "The Sims 3", "Skyrim"];
games.forEach((game, index) => {
    console.log(`Game ${index + 1}: ${game}`); //index + 1 om geen 0 te krijgen in mijn lijst
})

games.forEach((game) => console.log(game));

//Array met niet-toegewezen waarde
const plants = ["Cactus", "Monstera", "Rose", , "Orchidee"];
plants.forEach((plant) => console.log(`Plant: ${plant}`)); //niet toegewezen waarde slaat over

//array terugkrijgen
games.forEach((game, index, array) => {
    console.log(`Index ${index}, Game: ${game}, Array: ${array}`);
}) 

// -------------------------------------

//For-in loop (enkel de key van een array)
for (const plant in plants) {
    console.log(plant)
};
