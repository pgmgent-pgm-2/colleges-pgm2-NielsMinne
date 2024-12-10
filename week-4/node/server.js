//process, path en fs (file system)
const process = require('process');
const path = require('path');
const fs = require('fs');

/* Process */

// console.log(process); //Detailed system information.
// console.log(process.env); ///Environment- specific variables
console.log(process.env.PORT); //Poort waar de server op runt

/* -------------------------------------------- */

/* Path */
const pathToFacts = path.join(__dirname, 'documents', 'facts.json');
//__dirname is de huidige directory -> dan /documents/facts.json
console.log(pathToFacts);
//Pad is nu op elk systeem hetzelfde ongeacht het besturingssysteem

/* -------------------------------------------- */

/* File System -> fs */

/* -- Read File -- */
//Synchroon
const facts = fs.readFileSync(pathToFacts, 'utf-8');
console.log(facts); //Dit is nog JSON string
console.log(JSON.parse(facts)); //Dit is omgezet naar een object

// Async
fs.readFile(pathToFacts, 'utf-8', (err, data) => { //readFile is asynchroon en gebruikt een callback
    if (err) {
        console.error("Error reading file", err);
    }

    console.log(JSON.parse(data)); //omzetten naar object
})


/* -- Write File -- */
fs.readFile(pathToFacts, 'utf-8', (err, data) => { //we lezen eerst onze data
    if (err) {
        console.error("Error reading file", err);
    }

    const originalFacts = JSON.parse(data); //we zetten de data om naar een object
    const newFacts = originalFacts.concat({ fact: 'Cats are awesome!' }); //we voegen een nieuwe fact toe

    fs.writeFile(pathToFacts, JSON.stringify(newFacts, null, 2), (err) => { //we schrijven de nieuwe data terug naar het bestand
        //null, 2 bij JSON.stringify-> zorgt voor een nette indentatie
        if (err) console.error("Error writing file", err);
    })

    return newFacts;
});