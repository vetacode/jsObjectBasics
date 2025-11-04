/*
//The syntax:
for (key in object) {
  // executes the body for each key among object properties
}
*/

let user = {
  name: 'Xena',
  age: 23,
  isAdmin: false,
};

for (let key in user) {
  console.log(key); //get all the keys (prop name)

  console.log(user[key]); //get all the value props
}

//converting to Array
console.log(Object.keys(user));
console.log(Object.values(user));

//combining forEach
Object.keys(user).forEach((key) => console.log(key));
Object.values(user).forEach((value) => console.log(value));

//integers ordered by ascending

let codes = {
  49: 'Germany',
  41: 'Switzerland',
  44: 'Great Britain',
  // ..,
  1: 'USA',
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

//The “integer property” term here means a string that can be converted to-and-from an integer without a change.

//So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
console.log(String(Math.trunc(Number('49')))); // "49", same, integer property
console.log(String(Math.trunc(Number('+49')))); // "49", not same "+49" ⇒ not integer property
console.log(String(Math.trunc(Number('1.2')))); // "1", not same "1.2" ⇒ not integer property
