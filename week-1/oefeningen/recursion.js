//9. Todo List

const todoList = [
    {
      task: "Complete Project",
      subtasks: [
        {
          task: "Write Code",
          subtasks: [
            { task: "Implement Feature A" },
            { task: "Test Feature A" },
            { task: "Refactor Code" },
          ],
        },
        {
          task: "Document Project",
          subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
        },
      ],
    },
    {
      task: "Prepare Presentation",
      subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
    },
  ];


function printTodoList(todoList) {
    
    for(const task of todoList) { //Voor elke task in onze todoList 
        console.log(task.task); //Console log de task
        if(task.subtasks){ //Indien er subtasks aanwezig zijn voer dan opnieuw dezelfde functie uit, anders sla je over
            printTodoList(task.subtasks); //Deze keer geven we de subtasks mee die op hun beurt ook tasks in het object zitten hebben.
        }
    }
}

printTodoList(todoList);

console.log("-----");

/* --------------------------------------------------------------------------- */

//9.1 Efficient JS Gebruiken
function checkAge(age){
    return age >= 18 ? 'Volwassen' : "Nog niet volwassen";
}

function checkAge2(age){
    return age >= 18 || console.log("Nog niet volwassen");
}

console.log(checkAge(17));
console.log(checkAge2(19));
