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
age = prompt("Tapez votre age")
if(age <= 0){
    console.log("Vous etes un poisson (paner)")
}
if(age>0 && age<120){
    console.log("Votre age est valider")
}else{
    console.log("je ne suis pas d'accord")
}
if(age>=21){
    console.log("Vous etes majeur")
}else if(age>18 && age<21) {
    console.log("Vous etes majeur mais pas au USA ")
    
} else {
    console.log("vous etes mineur")
    
}
// les opérateurs booléans son &&(et) ||(ou)

function direBonjour(){
    console.log("Bonjour")
}

direBonjour()

function direBonjourAkelkaine(name){
    console.log("Bonjour "+ name)
}

direBonjourAkelkaine("Cannelle")

function hello(name, city="Lyon"){
    console.log("Bonjour " + name)
    console.log("Vous "+"habitez "+city )
}

hello("Cannelle","Villeurbanne")
hello("Cannelle")

function add(a , b){
    console.log(a + b)
    return(a + b)
}

add(25 ,65)

function div(a, b){
    console.log(a / b)
    return(a / b)
}

div(4585, 65)

function positive(num){
    if (num >= 0){
        console.log("VRAI")
        return("VRAI")
    }else {
        console.log("FAUX")
        return("FAUX")
    }
}

positive(-9)