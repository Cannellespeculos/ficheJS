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

let tableau = [5,2,6,8,9,2]
tableau.indexOf(8) 
// ça va faire 3
tableau.indexOf(7)
// ça va faire -1 car si l'argument n'est pas dans le tableau donc la
// machine met -1
tableau.indexOf(2 , 2)
// ça va faire 5 car le deuxième chiffre 
// va determiner ou commence la fonction et que la machine prend la
// première valeur donné

// function Array(tableau , numéro){
//     if (tableau.indexOf(numéro) === -1 ){
//         tableau.push(numéro);
//         console.log("le nouveau tableau ")
//     }


// }



let t = [3,12,50,20];
let t2 = []
let idex = t.length

while (idex > 0 ){
    t2.push(t.pop());
    idex--

}

console.log(t)
console.log(t2)

const abc = ["a","b","c"]
const def = ["d","e","f"]

console.log(abc.concat(def));

console.log(abc.reverse())

// function reverse(arg){

// }

// function include(arr ,item ){
//     let result = false;
//     let index = 0; 
//     while (index < arr.length ){}
//         if (arr [index] === item){
//          result = true
//         }
//         index++
//         return result;
//     }

// include([1,2,3], 2)

// function positive(arr){
//     let result = false;
//     let index = 0
//     while (index < arr.length){
//         if (arr / 2){
//             result = true
//         }
//         index++
//         return result;
//     }
// }

// positive([2,5,4,9,8,7,10,25])

let ta = [1 ,2 ,3];
for(let y =0 ; y < ta.length; y++ ){
    console.log(ta[y])
}

function transform(w , arg){
    let tmp = [];
    for(let i = 0 ; i < w.length ; i++){
        tmp.push(w[i] + arg)
    }
    return tmp;
    console.log()
}

console.log(transform(ta , 2))

let negatif = [ -50, 56 ,-52 , 0, -0, 9]
function moins(arg){
    return arg <0;
}
console.log(negatif.filter(moins))

