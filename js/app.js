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

// function add(a , b){
//     console.log(a + b)
//     return(a + b)
// }

// add(25 ,65)

// function div(a, b){
//     console.log(a / b)
//     return(a / b)
// }

// div(4585, 65)


// }
// function positive(num){
//     if (num >= 0){
//         console.log("VRAI")
//         return("VRAI")
//     }else {
//         console.log("FAUX")
//         return("FAUX")
//     }
// positive(-9)

// age = parseInt(age)
// let verifier_nombre= isNaN(age)
// console.log(age)
// console.log(verifier_nombre)

function isValid(userInput){
    let input = parseInt(userInput)
    if (isNaN(input) ){
        console.log("faux")
        return input
    } else if (userInput>12 && userInput<90) {
        console.log("vrai");
        return input
    }
}

// isValid("54")

let resultat = isValid(age)
console.log(resultat)
let resultatinverse = !resultat;
console.log(resultatinverse)

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

let index = 0;
// while (index <=4){
//     console.log(index)
//     index++
// }

// while (index <=99){
//     console.log(index)
//     index+=3
// }

let v = 0;
let counter = ""
while (v <= 100){
    if (v<=10 && v>=1 || v<=100 && v>=90){
        counter += v;
    }
    v++

}
console.log(counter)

let key = 0;
while(key > 100){
   console.log(key);
   key++;
}
// ca ne fonctionne pas car la boucle fonctionne tant que key est suppérieur a 100 mais il est inférieur
// a 100 donc la boucle ne fonctionnera jamais car la valeur augmente dans la boucle

let id = 0;
do {
   console.log(id);
   id++;
} while(id > 100);
// ca montre 0 carle do n'ai pas dans la boucle donc ca ne le fait qu'une fois

let ages = [14,14,14,15,15,15,16,16,16,16,16,17];
console.log(ages);
console.log(ages[0]);
console.log(ages[1]);
console.log(ages[2]);
console.log(ages[3]);
let longueur = ages.length;
console.log(longueur)
console.log(ages[11])

let i = 0;
while (i < ages.length){
    console.log(ages[i])
    i++
}
