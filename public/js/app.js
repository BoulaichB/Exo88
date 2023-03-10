// # Variable 

// ## Introduction
// ### Exercice 1.1  
// - Déclare une variable du nom de "firstVariale" qui a comme valeur ton prénom entre guillemets 
// - affiche la via un console.log

let firstVariable = "Bachir";
console.log(firstVariable);

// ### Exercice 1.2 
// - Déclare une variable vide (sans valeur) et affiche la via le console.log
// - Analyse le résultat. 

let empty;
console.log(empty); // undefined

// ### Exercice 1.3
// - Sur la variable de l'exercice 1.2, réassigne une valeur.
// - Affiche la via un console.log

empty = 2;
console.log(empty);

// ### Exercice 1.4
// - déclare une variable avec comme valeur null (attention le null s'ecrit tel quel sans guillemets. sa couleur devrait changer)
// - déclare une nouvelle variable mais cette fois-ci vide
// affiche les deux variables via une console.log et analyse le résultat
// - prend le temps d'aller chercher la différence entre une variale "null" et "undefined" 

let secondVariable = null;
let thirdVariable;
console.log(secondVariable);
console.log(thirdVariable);
// null est un objet tandis que undefined est un type indéfini
// null est une valeur d'affectation, undefined signifie qu'une variable a été déclarée sans valeur

// ## Variable suite
// ### Exercice 2 
// - Déclare  une variable de type string, integer et booléan
// - affiche les trois variables dans un console.log
// - affiche les types des trois variables par une méthode

let firstString = "abc";
let firstInteger = 1;
let firstBoolean = true;

console.log(firstString);
console.log(firstInteger);
console.log(firstBoolean);
console.log(typeof firstString);
console.log(typeof firstInteger);
console.log(typeof firstBoolean);

// ### Exercice 2.1
// - déclare 2 variables. Une qui va prendre un pays et l'autre sa capitale.
// - déclare une variable "maPhrase" qui va prendre comme valeur une phrase. 
// - Ecrit cette phrase avec la concaténation (avec le symbole +)
//     - ex : let textUne = variableCapitale + "est la capitale du pays : "+ variablePays

let pays = "Belgique";
let capitale = "Bruxelles";
let maPhrase = capitale + " est la capitale du pays : " + pays;
console.log(maPhrase); 

// ### Exercice 2.2
// - Déclare une variable "maPhraseNew" qui va prendre et écrit la même phrase que l'exercice 2.1 (utilise les mêmes variables)
// - Par contre, réecrit la phrase avec la nouvelle facon de faire depuis ES6 (les backticks `${}`)
// Affiche le resultat via un console.log

let maPhraseNew = `${capitale} est la capitale du pays : ${pays}`;
console.log(maPhraseNew);

// ### Exercice 2.3
// - Vous avez compris, la nouvelle facon d'ecrire est plus efficace et plus lisible. Il serait plus optimale d'utiliser cette maniere de faire. 
// - Pour savoir si vous avez compris, déclarer plusieurs variables et faite une phrase longue avec cette facon d'écrire

let prenom = "Bachir";
let age = 22;
let nouvellePhrase = `Je m'appelle ${prenom}, j'ai ${age} ans et j'habite à ${capitale}.`

// ### Exercice 2.4
// - déclare une variable de type integer. la valeur est de 7
// - déclare une variable de type string. la valeur est de "7"

// - via plusieurs console.log : 
//     - fait : variable1 = variable2
//     - fait : variables1 == variable2
//     - fait : variables 1 === variable2
// prenez le temps d'analyser les résultats et tirer une conclusion 

let newInt = 7;
let newString = "7";
// console.log(newInt = newString); réassigne le contenu de newString dans newInt et l'affiche
console.log(newInt == newString); // compare uniquement la valeur
console.log(newInt === newString); // compare la valeur et le type


// ### Exercice 2.5
// - déclare une variable de type integer. la valeur est de 5
// - déclare une variable de type string. la valeur est de "5"
// - via un console.log fait : variableInteger + variableString. 
// - Réassigner la valeur de la variable string ("5") par un nombre (5)
// - refait via un console.log : variableInteger + variableString
// - Analyse le résultat et tire une conclusion

let nombre = 5;
let nombreString = "5";
console.log(nombre + nombreString); // il s'agit ici d'une concaténation et non d'une addition, c'est pourquoi le résultat est 55
nombreString = 5;
console.log(nombre + nombreString); // il s'agit ici d'une simple addition
    

// ## différence entre var, let et const
// ### Exercice 3 introduction
// - déclare une variable avec le préfix "var" du nom de "prenom" et donne lui comme valeur ton prénom(string)
// - déclare une variable avec le préfix "let"du nom de "age" donne lui comme valeur ton âge(integer)
// - déclare une variable avec le préfix "const" "nom" et donne lui comme valeur ton nom(string)
// - affiche les résultats des trois dans un console.log

var monPrenom = "Bachir";
let monAge = 22;
const monNom = "Boulaich";
console.log(monPrenom);
console.log(monAge);
console.log(monNom);

// ### Exercice 3.1 
// - déclare une variable avec le préfix "var" du même nom que celui dans l'exo 3.1 (prenom) et affiche le résultat via un console.log 
// - déclare une variable avec le préfix "let" du même nom que celui dans l'exo 3.1(age) et affiche le résultat via un console.log
// - regard la différence entre les deux. dans cette exercice tu devrai voir la 1er différence entre let et var

var monPrenom = "Jean";
console.log(monPrenom);
// let monAge = 23; provoque une erreur
// console.log(monAge); 
// avec var: possible de déclarer une seconde fois une même variable
// avec let: déclarer une seconde fois une même variable provoque une erreur

// ### Exercice 3.2
// - réassigne la valeur de la variable (exo 3.1) avec le préfix "const" et affiche le résultat via le console.log
// - analyse le résultat
// const monNom = "Dupont"; provque une erreur
// console.log(monNom);

// ### Exercice 3.3
// - fait une condition if qui prendre comme instruction true. (ne prend pas en compte l'instruction, c'est pour la facilité de l'exercice)
// - dans cette condition déclare deux variables. Une en "let" et une en "var"
// - En dehors de cette condition déclare deux autres variables qui ont les mêmes noms que celles dans la condition
// - Affiche les variables en dehors de la condition via un console.log
// - Analyse le résultat et tire une conclusion. dans cette exercice tu devrai voir la 2eme différence entre let et var

let pikachu = 5;
var salameche = 10;

if(true){
    let pikachu = "Pikachu";
    var salameche = "Salamèche";
}

console.log(pikachu);
console.log(salameche);
// les variables déclarées par var ont une portée globale, elles ne sont pas limitées à leur bloc d'instruction
// Ce n'est pas le cas de let