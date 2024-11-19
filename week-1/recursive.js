//Gewone for loop met teller

function countdown(num) {
    for (let i = num; i > 0; i--) {
      console.log(i);
    }
  }
  
  countdown(3); // Output: 3 2 1

//Dezelfde functie met recursie

function recursiveCountdown(num) {
    if (num === 0) { //Escape statement -> Indien mijn nummer 0 is dan stopt de functie -> anders blijft die lopen
      return;
    }

    console.log(num);
    recursiveCountdown(num - 1); //Voert iedere keer zichzelf uit maar met 1 minder (num - 1)
  }
  
  recursiveCountdown(3); // Output:  3 2 1

/* --------------------------------------------------------------------------- */

//Recursie met objecten

const familyTree = {
    name: "John",
    children: [
      {
        name: "Zoe",
        children: [],
      },
      {
        name: "Bob",
        children: [
          {
            name: "Joe",
            children: [],
          },
          {
            name: "Eloise",
            children: [],
          },
        ],
      },
    ],
  };

function printFamily(family){
    if(family.children.length === 0) return; //Als er geen kinderen zijn dan exit (In het geval van Zoe -> geen kinderen)

    console.log("Ouder: ", family.name); //Print de naam van de ouder

    //voor elk kind van de persoon
    family.children.forEach((child) => {
        console.log("Kind: ", child.name);
        printFamily(child); //Print de naam van het kind 
    });

}

printFamily(familyTree);