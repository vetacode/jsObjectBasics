//symbol is unique. cannot be auto-converted
let id = Symbol('id');
console.log(id); // TypeError: Cannot convert a Symbol value to a string

let id2 = Symbol('id');
console.log(id.toString()); // Symbol(id), now it works

let id3 = Symbol('id');
console.log(id.description); // id

//can create hidden props

let user = {
  // belongs to another code
  name: 'John',
};

let id4 = Symbol('id');

user[id4] = 1;
console.log(user[id4]); // we can access the data using the symbol as the key

//symbol doesnt work on for..in loops
let id5 = Symbol('id');
let user2 = {
  name: 'John',
  age: 30,
  [id5]: 123,
};

for (let key in user2) console.log(key); // name, age (no symbols)

// the direct access by the symbol works
console.log('Direct: ' + user2[id5]); // Direct: 123
