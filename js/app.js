console.log("hello");
let age;
age = 16;
// le type de age est number
console.log(typeof age);
const prenom = "Cannelle";
// le type de prenom est string
let addition = 4+12;
console.log(addition);
let soustraction = 2-50;
console.log(soustraction);
let multiplication = 3*8;
console.log(multiplication);
let division = 7/2;
console.log(division);
let modulo = 5%2;
console.log(modulo);
let test = 3>5;
console.log(test);
console.log(typeof test);
// le type de test est booléan
// les opérateurs de comparaison sont <> === <= >= != == !==
// les doubles égal comparent seulement la valeur alors que le triple comparent la valeur et le type 
const identify ="Bonjour" + " " + prenom + " " + "vous avez" + " " + age + " " + "ans";
console.log(identify);
let majuscule = identify.toUpperCase();
console.log(majuscule);
// toUpperCase a rendu la variable de type string en majuscule