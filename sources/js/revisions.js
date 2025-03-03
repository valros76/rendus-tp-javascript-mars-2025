const greeting = "Hello, World!";
const fullName = 'John Doe';
const message = `Hello, ${fullName}!`; // Template literals

const testString = () => {
  /**
   * On log un tableau pour afficher les données de nos variables
   */
  console.table({
    greeting: greeting,
    fullName: fullName,
    message: message
  });

  /**
   * On peut raccourcir ce tableau, en conservant le nom de variable automatiquement comme clé, de la manière suivante :
   */
  console.table({
    greeting,
    fullName,
    message
  });
  return message;
}
testString(); // On lance le test sur le type string.

const age = 25;         // entier
const pi = 3.14159;     // flottant
const temperature = -10; // nombre négatif
const badCalc = 0.2 + 0.1; // Ce calcul retourne la valeur 0.30000000000000004.
const goodPracticeCalc = (0.2 + 0.1).toFixed(3);

const testNumber = () => {
  console.table({
    age,
    pi,
    temperature,
    badCalc,
    goodPracticeCalc
  }
  );
}
testNumber(); // On lance le test sur le type number.

const isActive = true;
const isFinished = false;

const testBoolean = () => {
  console.table({
    isActive,
    isFinished
  });
}
testBoolean(); // On lance le test sur le type boolean.

let user = null; // L'utilisateur est intentionnellement absent

const testNull = () => {
  console.table({
    user
  });
}
testNull(); // On lance le test sur le type null.

let firstName;

function greet() { }

const testUndefined = () => {
  console.table({
    firstName
  });
  console.log(`Retour de la fonction greet() : ${greet()}.`); // retournera undefined, car rien n'a été défini dans cette fonction.
}
testUndefined(); // On lance le test sur le type undefined.

const bigNumber = 1234567890123456789012345678901234567890n; // Avec 'n' à la fin
const anotherBigNumber = BigInt(12345678901234567890);

const testBigInt = () => {
  console.table({
    bigNumber,
    anotherBigNumber
  });
}
testBigInt(); // On lance le test sur le type bigInt.

const uniqueId = Symbol('id'); // Création d'un symbole unique
const obj = {
  [uniqueId]: 'value'
};
let sym1 = Symbol('description');
let sym2 = Symbol('description');


const testSymbol = () => {
  console.table({
    uniqueId,
    obj
  });
  console.log(`Valeur de uniqueId, contenue dans l'objet 'obj' : ${obj[uniqueId]}`);
  console.log(`sym1 === sym1 ? ${sym1 === sym2}`);  // false, même description, mais valeurs uniques
}
testSymbol(); // On lance le test sur le type symbol.

const testVar = (valueInVar, varName) => {
  console.log(`La valeur contenue dans la variable ${varName} est ${valueInVar}.`);
}

var lastName = "Smith";
lastName = "Doe"; // Réassignable
testVar(lastName, "lastName");

var lastName = "Robbers"; // Redeclarable sans erreur
testVar(lastName, "lastName");

const testLet = (valueInLet, letName) => {
  console.log(`La valeur contenue dans la variable ${letName} est ${valueInLet}.`);
}

let letName = "John";
letName = "Doe"; // Réassignable
testVar(letName, "letName"); // "Doe"

/**
 * Si on essayait de redéclarer cette variable : 
 * let letName = "Jane";
 * On obtiendrait une erreur suite à la tentative de redéclaration de letName dans le même scope.
 */

const testConst = (valueInConst, constName) => {
  console.log(`La valeur contenue dans la variable ${constName} est ${valueInConst}.`);
}
const constName = "John";
/**
 * Si on essayait de réassigner cette variable : 
 * constName = "Doe";
 * On obtiendrait une erreur suite à la tentative de réassignation de la valeur de constName.
 */
// constName = "Doe"; // Erreur : réassignation non autorisée
testConst(constName, "constName"); // "John"
/**
 * Si on essayait de redéclarer cette variable : 
 * const constName = "Jane";
 * On obtiendrait une erreur suite à la tentative de redéclaration de la valeur de constName.
 */

const person = { firstName: "John", age: 30 };
person.age = 31; // Modifications autorisées sur les propriétés
testConst(person.age, "person.age"); // 31
/**
 * Si on essayait de réassigner cette variable : 
 * person = { name: "Jane", age: 25 };
 * On obtiendrait une erreur suite à la tentative de réassignation de la valeur de person.
 */

function testScope() {
  let scopeName = "John"; // Variable locale à la fonction testScope()
  console.log(`Valeur de scopeName : ${scopeName}.`);  // "John"
}

testScope();
/**
 * Si on essayait d'accéder à la valeur de scopeName : 
 * console.log(scopeName);
 * On obtiendrait une erreur "scopeName is not defined", car scopeName est uniquement accessible dans la portée locale de testScope().
 */

function outer() {
  let outerVar = "I'm from outer"; // Variable dans la fonction externe

  function inner() {
    let innerVar = "I'm from inner"; // Variable dans la fonction interne
    console.log(outerVar); // Accède à outerVar, variable de la fonction parente
  }

  inner();
  // console.error(innerVar); 
  // Erreur : innerVar n'est pas définie, car elle est locale à inner
}

outer();

function closureOuter() {
  let outerVar = "I'm from outer"; // Variable dans la fonction externe

  return function closureInner() {
    console.log(outerVar); // La fonction interne a accès à outerVar même après l'exécution de outer
  };
}

const closureExample = closureOuter(); // outer() s'exécute et retourne la fonction inner
closureExample(); // "I'm from outer", grâce à la closure

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    }
  };
}

const counter = createCounter(); // createCounter est exécutée, mais la closure conserve l'accès à 'count'
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

let a = 10, b = 5;
console.table({
  add: a + b,
  subtract: a - b,
  multiply: a * b,
  divide: a / b,
  modulo: a % b,
  exponent: a ** b
});

console.table({
  untypedEquality: 10 == "10",
  strictEquality: 10 === "10",
  untypedInequality: 10 != 5,
  superiorAt: 10 > 5,
  inferiorAt: 10 < 5,
  superiorOrEqualAt: 10 >= 10,
  inferiorOrEqualAt: 10 <= 5
});

let x = true, y = false;
console.table({
  operatorAND: x && y,
  operatorOR: x || y,
  operatorNOT: !x
});

let userAge = 18;
if (userAge >= 18) {
  console.log("Vous êtes adulte");
} else {
  console.error("Vous êtes mineur");
}

let note = 20;
if (note >= 18) {
  console.log("Excellent");
} else if (note >= 16) {
  console.log("Bien");
} else if (note >= 12) {
  console.log("Assez bien");
} else {
  console.error("Échec");
}

let fruit = "pomme";
switch (fruit) {
  case "pomme":
    console.log("C'est une pomme.");
    break;
  default:
    console.log("Fruit non reconnu.");
}
switch (true) {
  case (fruit === "pomme"):
    console.log("C'est une pomme.");
    break;
  default:
    console.log("Ce fruit n'est pas une pomme.");
}

for (let i = 0; i < 5; i++) {
  console.log(i); // Affiche les nombres de 0 à 4
}

let i = 0;
while (i < 5) {
  console.log(i); // Affiche les nombres de 0 à 4
  i++;
}

let idx = 0;
do {
  console.log(idx); // Affiche les nombres de 0 à 4
  idx++;
} while (idx < 5);

function add(a, b) {
  return a + b;
}

const addArrow = (a, b) => a + b;

const square = x => x * x;

const sum = (a, b) => a + b;

const multiply = (a, b) => a * b;  // Retourne immédiatement le produit de a et b

const addAndSquare = (a, b) => {
  let sum = a + b;
  return sum * sum;
};

function ClassicCounter() {
  this.count = 0;

  const classicCounterInterval = setInterval(function () {
    this.count++;  // `this` ne fait pas référence à l'objet Counter
    console.log(this.count);
    clearInterval(classicCounterInterval);
  }, 1000);
}

const classicCounter = new ClassicCounter();
// Résultat incorrect, car `this` fait référence au contexte global (window dans un navigateur)

function ArrowCounter() {
  this.count = 0;

  const arrowCounterInterval = setInterval(() => {
    this.count++;  // `this` fait référence à l'objet Counter
    console.log(this.count);
    clearInterval(arrowCounterInterval);
  }, 1000);
}

const arrowCounter = new ArrowCounter();
// Résultat correct, car `this` fait référence à l'objet Counter

const methodName = "Référence de nom à portée globale";
const arrowMethodObject = {
  methodName: "arrowMethodObject",
  hello: () => {
    console.log(this.methodName);  // `this` ne fait pas référence à `arrowMethodObject` ici
  }
};

arrowMethodObject.hello(); // Affiche `undefined`, car `this` fait référence à l'environnement global

const classicMethodObject = {
  methodName: "classicMethodObject",
  hello: function () {
    console.log(this.methodName);  // `this` fait bien référence à `obj`
  }
};
classicMethodObject.hello(); // Affiche "Obj"

function fetchData(callback) {
  const fetchDataTimeout = setTimeout(() => callback("Data") && 
  clearTimeout(fetchDataTimeout), 1000);  // Callback appelé après 1 seconde
}

fetchData((data) => {
  console.log(data);  // Affiche "Data" après 1 seconde
});

function fetchAnotherDatas(callback) {
  const fetchAnotherDatasTimeout = setTimeout(() => callback("Data") && 
  clearTimeout(fetchAnotherDatasTimeout), 1000);
}

function processData(data, callback) {
  const fetchProcessDataTimeout = setTimeout(() => callback(data.toUpperCase()) && clearTimeout(fetchProcessDataTimeout), 1000);  // Convertit les données en majuscules
}

fetchAnotherDatas((data) => {
  console.log("Données récupérées :", data);
  processData(data, (processedData) => {
    console.log("Données traitées :", processedData);
  });
});

/**
 * Exemple d'un "Callback Hell"
 */
// fetchHellDatas((data) => {
//   processHellDatas(data, (processedData) => {
//     saveHellDatas(processedData, (savedData) => {
//       sendHellEmail(savedData, (emailStatus) => {
//         console.log("Opération terminée");
//       });
//     });
//   });
// });

function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data"), 1000);
  });
}

fetchDataWithPromise().then((data) => {
  console.log("Données récupérées de la promesse :", data);
}).catch((error) => {
  console.log("Erreur :", error);
});

async function asyncFetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data"), 1000);
  });
}

async function process() {
  try {
    const data = await asyncFetchData();  // Attend que fetchData termine
    console.log("Données récupérées de manière asynchrone :", data);
  } catch (error) {
    console.log("Erreur :", error);
  }
}
process();

function pureAdd(a, b) {
  return a + b;  // Toujours le même résultat pour les mêmes arguments
}
console.log(pureAdd(2, 3));  // Affiche 5
console.log(pureAdd(2, 3));  // Affiche encore 5 (toujours le même résultat)

let impureCounter = 0;
function incrementImpureCounter() {
  impureCounter++;  // Modifie une variable externe
  return impureCounter;
}
console.log(incrementImpureCounter());  // Affiche 1
console.log(incrementImpureCounter());  // Affiche 2

let student = { name: "Jack", age: 30 };
student.age = 31;  // Mutation de l'objet
console.log(student);  // Affiche { name: "Jack", age: 31 }

const immutableStudent = { name: "Jack", age: 30 };
const updatedStudent = { ...immutableStudent, age: 31 };  // Création d'une nouvelle copie
console.log(immutableStudent); // Affiche { name: "Jack", age: 30 }
console.log(updatedStudent); // Affiche { name: "Jack", age: 31 }

let tasks = ["Task 1", "Task 2"];
function addTask(task) {
  tasks.push(task);  // Mutation de l'array d'origine
}
addTask("Task 3");
console.log(tasks);  // Affiche ["Task 1", "Task 2", "Task 3"]

const immutableTasks = ["Task 1", "Task 2"];
function addNewTask(task, tasks) {
  return [...immutableTasks, task];  // Retourne une nouvelle liste sans modifier l'original
}
const updatedImmutableTasks = addNewTask("Task 3", tasks);
console.log(immutableTasks);         // Affiche ["Task 1", "Task 2"]
console.log(updatedImmutableTasks);  // Affiche ["Task 1", "Task 2", "Task 3"]

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} fait du bruit`;
};

// Fonction constructeur Chien qui hérite d'Animal
function Chien(name, breed) {
  Animal.call(this, name);  // Appel du constructeur parent (Animal)
  this.breed = breed;       // Propriété spécifique à Chien
}

// Héritage du prototype d'Animal
Chien.prototype = Object.create(Animal.prototype);
Chien.prototype.constructor = Chien;  // Réinitialisation du constructeur

Chien.prototype.bark = function() {
  return `${this.name} aboie`;
};

// Création d'une instance de Chien
const monChien = new Chien("Rex", "Berger Allemand");

console.log(monChien.speak());  // Affiche "Rex fait du bruit" (hérité d'Animal)
console.log(monChien.bark());   // Affiche "Rex aboie" (défini dans Chien)

console.log(monChien.hasOwnProperty("name"));  // Affiche true (propriété propre à l'instance)
console.log(monChien.hasOwnProperty("bark"));  // Affiche true (méthode propre à Chien)
console.log(monChien.hasOwnProperty("speak")); // Affiche false (méthode héritée de Animal)

class Car {
  constructor(model) {
    this.model = model;
  }

  honk() {
    return `${this.model} klaxonne !`;
  }
}

class Hyundai extends Car {
  constructor(model, breed) {
    super(model);  // Appel du constructeur parent (Car)
    this.breed = breed;
  }

  accelerate() {
    return `${this.model} accélère.`;
  }
}

const maVoiture = new Hyundai("Santa Fe 2", "Pack confort");

console.log(maVoiture.honk());  // Affiche "Santa Fe 2 klaxonne !"
console.log(maVoiture.accelerate());   // Affiche "santa Fe 2 accélère"

class Client {
  constructor(name, age) {
    this.name = name;
    this._age = age; // Propriété privée (convention)
  }

  // Getter pour l'âge
  get age() {
    return this._age;
  }

  // Setter pour l'âge
  set age(newAge) {
    if (newAge < 0) {
      console.log("L'âge ne peut pas être négatif !");
    } else {
      this._age = newAge;
    }
  }
}

const client = new Client("Alice", 25);
console.log(client.age);  // Appelle le getter (affiche 25)
client.age = 30;          // Appelle le setter
console.log(client.age);  // Appelle le getter (affiche 30)
client.age = -5;          // Appelle le setter, affiche "L'âge ne peut pas être négatif !"

class FamilyPerson {
  #age;  // Propriété privée
  constructor(name, age) {
    this.name = name;
    this.#age = age;  // Initialisation de la propriété privée
  }

  // Getter pour l'âge
  get age() {
    return this.#age;
  }

  // Setter pour l'âge
  set age(newAge) {
    if (newAge < 0) {
      console.log("L'âge ne peut pas être négatif !");
    } else {
      this.#age = newAge;
    }
  }
}

const familyPerson = new FamilyPerson("Alice", 25);
console.log(familyPerson.age);  // Appelle le getter (affiche 25)
familyPerson.age = 30;          // Appelle le setter
console.log(familyPerson.age);  // Appelle le getter (affiche 30)
familyPerson.age = -5;          // Appelle le setter, affiche "L'âge ne peut pas être négatif !"

// Tentative d'accès à la propriété privée (produit une erreur)
// console.log(familyPerson.#age);
// Erreur : La propriété privée #age n'est pas accessible


