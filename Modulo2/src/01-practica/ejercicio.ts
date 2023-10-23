console.log("************** PRACTICE *********************");
console.log("Use this folder 00 practice to practice with homework exercises");
console.log("You can add new files as long as they are imported from index.ts");

//101 Biggest word
console.log("\n\n--- 101 BIGGEST WORD ---");
function biggestWord(phrase) {
  var words = phrase.split(" ");
  var biggestWord = "";
  for (var index = 0; index < words.length; index++) {
    if (words[index].length > biggestWord.length) {
      biggestWord = words[index];
    }
  }
  return biggestWord;
}
console.log(biggestWord("Esta frase puede contener muchas palabras"));
console.log(biggestWord("Ejercicios básicos de JavaScript"));

//114 Values + challenge
console.log("\n\n 114 --- VALUES + CHALLENGE ---");
function values(obj) {
  var arrValues = [];
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      arrValues.push(obj[property]);
    }
  }
  return arrValues;
}

console.log(
  values({ id: 31, duration: 310, name: "long video", format: "mp4" })
);

function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person("John");
console.log(values(john));

//102 Califications
console.log("\n\n--- 102 CALIFICATIONS ---");
const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

function printAverage(classResults) {
  var califications = values(classResults);
  var avgTruncated = Math.trunc(
    califications.reduce((num1, num2) => num1 + num2) / califications.length
  );

  switch (avgTruncated) {
    case 10:
      console.log("Matrícula de Honor");
      break;
    case 9:
      console.log("Sobresaliente");
      break;
    case 7:
    case 8:
      console.log("Notable");
      break;
    case 6:
      console.log("Bien");
      break;
    case 5:
      console.log("Suficiente");
      break;
    case 4:
      console.log("Insuficiente");
      break;
    default:
      console.log("Muy deficiente");
      break;
  }
}

printAverage(eso2o);

//103 Check Arguments
console.log("\n\n--- 103 CHECK ARGUMENTS ---");
function checkArguments(input) {
  return input === undefined ? "Unknown" : input || "";
}

console.log("Result check arguments = ", checkArguments(1));

//104 Clone Merge
//Este ejercicio también está implementado en 02-entregables/ejercicio-03.ts
/* console.log("\n\n--- 104 CLONE-MERGE ---");
function clone(source) {
  return Object.assign({}, source);
}

function merge(source, target) {
  var result = clone(target);
  var props = Object.getOwnPropertyNames(source);

  for (var i = 0; i < props.length; i++) {
    result[props[i]] = source[props[i]];
  }
  return result;
} */

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };
console.log("Result merge = ", merge(a, b));

//105 Deep Equal
console.log("\n\n--- DEEP EQUAL ---");
//Apartado A
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
  var propsa = Object.getOwnPropertyNames(a);
  var propsb = Object.getOwnPropertyNames(b);

  if (propsa.length !== propsb.length) return false;

  for (var i = 0; i < propsa.length; i++) {
    if (!b.hasOwnProperty(propsa[i])) return false;
    if (a[propsa[i]] !== b[propsa[i]]) return false;
  }

  return true;
}

console.log(isEqual(user, clonedUser)); // true

//Apartado B
var user2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};
var clonedUser2 = {
  name: "María",
  age: 30,
  address: { city: "Málaga", code: 29620 },
  friends: ["Juan"],
};

function isDeepEqual(a, b) {
  var propsa = Object.getOwnPropertyNames(a);
  var propsb = Object.getOwnPropertyNames(b);

  if (typeof a == "object" && typeof b == "object") {
    if (propsa.length !== propsb.length) return false;

    for (var i = 0; i < propsa.length; i++) {
      if (!b.hasOwnProperty(propsa[i])) return false;
      if (a[propsa[i]] !== b[propsa[i]])
        if (!isDeepEqual(a[propsa[i]], b[propsa[i]])) return false;
    }
    return true;
  }
  return false;
}

console.log(isDeepEqual(user, clonedUser)); // true

//106 dices
console.log("\n\n--- 106 DICES ---");
function dices() {
  var total = 0;
  return {
    resetDices: function reset() {
      total = 0;
    },
    rollDice: function roll() {
      var result = Math.floor(Math.random() * 6 + 1);
      console.log("Lanzando dado. Resultado = ", result);
      total += result;
      if (total === 12) {
        console.log("PREMIO!!!!!!!");
      }
    },
  };
}

var myDices = dices();

for (var i = 0; i < 10; i++) {
  console.log("run ", i + 1);
  myDices.resetDices();
  myDices.rollDice();
  myDices.rollDice();
}

//hoisting
console.log("\n\n--- HOISTING ---");
function f2() {
  console.log(aNew); //undefined --> la variable a está declarada pero no definida.
  console.log(g()); //undefined --> la función a está declarada pero no definida.

  var aNew = "good job!";
  function g() {
    return aNew;
  }
  console.log(aNew); //good job! --> la variable a ha sido declarada y tiene el valor "good job!"
}

f2();

//apartado B
console.log("--- Apartado B ---");
var x = 1;

(function () {
  console.log(x); //undefined --> la variable a no tiene valor en el momento en que se declara la función
  var x = 2;
  //y = 4;
  var z = 3;
})();

console.log(x); //1
//console.log(y); //error??
//console.log(z); //error --> la variable c ya no existe una vez que ternima la función autoinvocada;

console.log("--- Apartado C ---");
f3();
var a3 = 1;

function f3() {
  console.log(a3); //1
  //b3 = 4;
  var c3 = 3;
}

console.log(a3); //1
//console.log(b3); //error
//console.log(c3); //error

//108 includes
console.log("\n\n--- 108 INCLUDES ---");
function includes(array, value) {
  return array.indexOf(value) !== -1;
}

console.log(includes([1, 2, 3], 3));
console.log(includes([1, 2, 3], 0));

//109 primes + Challenge
console.log("\n\n--- 109 PRIMES + Challenge---");

function showPrimes(from, to) {
  for (var num = from; num <= to; num++) {
    if (isPrime(num)) {
      console.log(num, " is PRIME!");
    } else {
      console.log(num, " is not a prime");
    }
  }
}

function isPrime(num) {
  var max = Math.sqrt(num);
  if (num === 1) return false;
  for (var i = 2; i <= max; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

showPrimes(1, 20);

//110 Read book
console.log("\n\n--- 110 READ BOOK ---");

//Este ejercicio también está implmentado en entregables -> ejercicio-04.ts
/*function isBookRead(books, titleToSearch) {
  for (var i = 0; i < books.length; i++) {
    if (books[i].title === titleToSearch) {
      return books[i].isRead;
    }
  }
  return false;
}

// Ejemplo:
var books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Los Pilares de la Tierra"));
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));*/

//111 Reverse text
console.log("\n\n--- 111 REVERSE TEXT ---");

function reverseText(text) {
  return text.split(" ").reverse().join(" ");
}

console.log(reverseText("Uno dos tres"));

//112 Subsets
console.log("\n\n--- 112 SUBSETS ---");

function subsets(word) {
  var index = 1;
  var result = [];
  word.split("").forEach((element) => {
    if (index < word.length) {
      result.push(word.slice(index++));
    }
  });
  return result;
}

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]

//113 This
console.log("\n\n--- 113 THIS ---");
var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
var surnameFunction = person.wife.getSurname;
//console.log(surnameFunction());
console.log(surnameFunction.call(person));

//115 Zip + Challenge
console.log("\n\n---115 ZIP ---");

function zipObject(keys, values) {
  var myObject = {};
  for (var i = 0; i < keys.length && i < values.length; i++) {
    myObject[keys[i]] = values[i];
  }
  return myObject;
}

// Ejemplo
console.log(
  zipObject(["spanish", "english", "french"], ["hola", "hi", "salut"])
);
console.log(zipObject(["spanish", "english", "french"], ["hola"]));

//116 ZZCrypt
console.log("\n\n --- 116 ZZCRYPT ---");
// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  // Implementation here.
  var output = "";
  for (var i = 0; i < secret.length; i++) {
    if (cipher.indexOf(secret.charAt(i)) === -1) {
      output += secret.charAt(i);
    } else {
      output += plain.charAt(cipher.indexOf(secret.charAt(i)));
    }
  }
  return output;
}

console.log(decrypt(secret));

//201 Args
console.log("\n\n --- 201 ARGS ---");
function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

f("JS rocks!", { b: "b" });
//SALIDA
//2
//JS rocks! true
//{b: "b"} false
//100 false

//f("JS sucks!", null, 13);
//SALIDA
//ERROR!!!

//202 Array Operations
//Este ejercicio también está implementado en 02-entregables/ejercicio-01.ts
/* console.log("\n\n --- 202 ARRAY OPERATIONS ---");
console.log("Apartado A");
const head = (inputArray) => {
  const [first] = inputArray;
  return first;
};

console.log(head(["a", "b", "c"]));

console.log("Apartado B");
const tail = (inputArray) => {
  const [first, ...rest] = inputArray;
  return rest;
};

console.log(tail(["a", "b", "c", "d"]));

console.log("Apartado C");
const init = (inputArray) => {
  const aux = [...inputArray];
  aux.pop();
  return aux;
};

console.log(init(["a", "b", "c", "d"]));

console.log("Apartado D");
const last = (inputArray) => {
  const aux = [...inputArray];
  return aux.pop();
};
console.log(last(["a", "b", "c", "d"])); */

//Concat
// Este ejercicio también está implemento en 02-entregables/ejercicio-02.ts
/* console.log("\n\n---- 203 CONCAT ----");
const concat = (a, b) => {
  return [...a, ...b];
};

console.log(concat([1, 2, 3], ["a", "b", "c", "d"])); */

//204 Console
console.log("\n---- 204 CONSOLE ----");
var x = 1;
let y = 2;

{
  try {
    let y = 3;
    console.log(x, y);
  } catch (error) {}
  let y = 3;
  console.log(x, y);
}

console.log(x, y);

(() => {
  var x = 5;
  console.log(x);
  let y = 6;
  console.log(x, y);
})();

console.log(x, y);

//205 Fibonacci
console.log("\n---- 205 FIBONACCI ----");
const fib = (n) => {
  let fib = [1, 0];
  if (n === 0 || n === 1) return n;

  for (let i = 2; i <= n; i++) {
    const [first, second] = fib;
    fib.unshift(first + second);
  }

  return fib[0];
};

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(9));
console.log(fib(10));

//206 Players Order
console.log("\n---- 206 PLAYERS ORDER ----");

const getPlayersOrder = (players, turns) => {
  let result = players;
  for (let i = 0; i < turns; i++) {
    const [current, ...rest] = result;
    result = [...rest, current];
  }
  return result;
};

// Un ejemplo:
const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

//207 Reminder
console.log("\n\n---- 207 REMINDER ----");
class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(() => {
      //console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const reminder = new Reminder("come fruta");
reminder.remindMe(1);
//208 Slot Machine
//Este ejercicio está también implementado en entregables --> ejercicio-05.ts
/* console.log("\n\n---- 208 SLOT MACHINE ----");

class SlothMachine {
  constructor() {
    this.coins = 0;
    this.bool1 = false;
    this.bool2 = false;
    this.bool3 = false;
  }

  play() {
    this.coins++;
    this.bool1 = this.randomBoolean();
    this.bool2 = this.randomBoolean();
    this.bool3 = this.randomBoolean();
    console.log(this.coins);
    console.log(this.bool1, this.bool2, this.bool3);

    if (this.bool1 && this.bool2 && this.bool3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log(`Good luck next time!!`);
    }
  }

  randomBoolean() {
    return Math.random() >= 0.5;
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play(); */

//209 Swap
console.log("\n\n---- 209 SWAP ----");

let c = "C";
let d = "D";

// Implementation here, one line, one shot!
[c, d] = [d, c];

console.log(c);
console.log(d);
console.log(c === "D" && d === "C" ? "You did it!" : "Keep trying!");

//301 Califications Summary
console.log("\n\n---- 301 CALIFICATIONS SUMMARY ----");

interface student {
  name: string;
  califications: Array<number>;
}

interface student2 {
  name: string;
  highestCalification: number;
  averageCalifications: string;
}

const students: Array<student> = [
  {
    name: "Juan",
    califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34],
  },
  {
    name: "Álvaro",
    califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01],
  },
  {
    name: "María",
    califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3],
  },
  {
    name: "Jorge",
    califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69],
  },
  {
    name: "Mónica",
    califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48],
  },
];

const getHighest = (califications: Array<number>): number => {
  return califications.reduce((prev, curr) => {
    return curr > prev ? curr : prev;
  });
};

const getAverage = (califications: Array<number>): string => {
  return (
    califications.reduce((prev, curr) => prev + curr) / califications.length
  ).toPrecision(3);
};

const summarizeClassRoom = (studentList: Array<student>): Array<student2> => {
  return studentList.map((element) => {
    return {
      name: element.name,
      highestCalification: getHighest(element.califications),
      averageCalifications: getAverage(element.califications),
    };
  });
};

console.log(summarizeClassRoom(students));

//302 Curry Setter
console.log("\n\n---- 302 CURRY SETTER ----");
function uncurriedSet(key, person, value) {
  const newPerson = { ...person };
  newPerson[key] = value;
  return newPerson;
}

const curry = (originnalFn) =>
  function curried(...args) {
    if (args.length >= originnalFn.length) {
      return originnalFn(...args);
    }
    return (...args2) => curried(...args, ...args2);
  };

const julia = { name: "Julia", surname: "Álvarez", age: 19 };
const updatedJulia = uncurriedSet("age", julia, 25);

console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

const set = curry(uncurriedSet);
const setName = set("name");
const setSurname = set("surname");
const setAge = set("age");

console.log(setName(julia, "Ana")); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, "González")); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }

//303 Morse
//Este ejercicio está resuelto en ./01-practica/morse.js
