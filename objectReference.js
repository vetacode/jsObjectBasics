let user = {
  name: 'Alice',
  age: 20,
};
console.log(user.name);

let admin = user;
console.log(user);
admin.name = 'Brandon'; //this is changing the object reference

console.log(user.name); //therefore the user object also changes

//object equality: must reference the same object
let a = {};
let b = a; // copy the reference

console.log(a == b); // true, both variables reference the same object
console.log(a === b); // true

let x = {};
let y = {}; // two independent objects

console.log(x == y); // false

//object's properties can be free to change, even with cons
const user2 = {
  name: 'John',
};
user2.name = 'Pete'; //the changes is only the properties, but the value of valriable user2 itself is still constant
console.log(user2.name); // Pete

//but if we change the variable:
user2 = {
  name: 'Wick',
};

console.log(user2.name); //it will result an error, assignment to constant variable
