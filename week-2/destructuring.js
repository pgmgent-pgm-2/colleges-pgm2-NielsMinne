//ARRAY DESTRUCTURING
const arr = ["first", "second", "third"];

//zonder destructuring -> assignen naar een variabele
const f = arr[0];
const s = arr[1];
const t = arr[2];

//MET destructuring
const [firstItem, secondItem, thirdItem] = arr;

console.log(firstItem); //Door destructuring zit het eerste element (zijnde 'first') in deze variabele
console.log(secondItem);//Door destructuring zit het tweede element (zijnde 'second') in deze variabele
console.log(thirdItem);//Door destructuring zit het eerste element (zijnde 'third') in deze variabele

//Ander voorbeeld met kleur
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor); // Output: red
console.log(secondColor); // Output: green
console.log(thirdColor); // Output: blue

//Variabelen kunnen ook op voorhand worden gedeclareerd om vervolgens waarden te assignen met destructuring.
let df, ds, dt;
[df, ds, dt] = arr;

//-----------------------------------------------------

//Elementen negeren 
const [, , thirdWord] = ["foo", "bar", "baz"]; //Door , te plaatsen slaan we een index over van de array
console.log(thirdWord);

//Standaardwaarden meegeven
const colors2 = ["red", "green"];
const [firstColor2, secondColor2, thirdColor2 = "blue"] = colors2; //in thirdColor2 kennen we een waarde blauw aan
console.log(firstColor2); // Output: red
console.log(secondColor2); // Output: green
console.log(thirdColor2); // Output: blue (standaardwaarde)

//-----------------------------------------------------

//Referentie naar andere variabelen
const [d = 3, e = d] = [7, undefined]; //de standaardwaarde van d = 3 wint niet van de waarde die in de array staat
//in dit geval is d dus 7. e wordt d dus is e ook 7
console.log(d, e); // Output 7 7

//-----------------------------------------------------

//Rest operator en destructuring
const [head, ...tail] = [1, 2, 3, 4]; //rest operator (spread) zal de rest assignen aan de variabele 'tail' in dit geval.
console.log(head, tail ) // Output : 1 [2,3,4]

//8. destructuring van een string met rest operator
const [x, ...y] = 'abc';
console.log(x, y); //output : a [b , c]

//-----------------------------------------------------

//.entries() gebruiken met destructuring in een for...of loop
const arrLetters = ["a", "b"];
for (const [index, element] of arrLetters.entries()) { //bij entries krijg je 2 waarden terug -> key en value
    //we plaatsen de key in index en de value in element met destructuring en loggen deze
    console.log(index, element);
}


//-----------------------------------------------------

//OBJECT DESTRUCTURING


