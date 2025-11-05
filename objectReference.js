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

// //but if we change the variable:
// user2 = {
//   name: 'Wick',
// };

// console.log(user2.name); //it will result an error, assignment to constant variable

//Cloning & merging, Object.assign (it is shallow cloning)
let user3 = {
  name: 'Troy',
  age: 35,
  isSingle: true,
};

let clone = {};
for (let key in user3) {
  clone[key] = user3[key];
}
console.log('Cloning object:', clone);

//another way is using Object.assign, syntax: Object.assign(dest, ...sources)
let user4 = {
  name: 'Troy',
  age: 35,
  isSingle: true,
};

let add1 = { isBroke: true };
let add2 = { isHopeless: false };
Object.assign(user4, add1, add2);

console.log(user4);

//cloning simple object
let user5 = {
  name: 'Troy',
  age: 35,
  isSingle: true,
};

let clone2 = {};
Object.assign(clone2, user5); //it makes copy of different/separate object reference

clone2.age = 40;
console.log('user5:', user5.age); //35. it still have own reference (different object)
console.log(clone2.age); //40. it has difference ref already

//nested cloning (deep clone)
let user6 = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log(user6.sizes.height); // 182

let clone3 = Object.assign({}, user6);

console.log(clone3.sizes.height);

user6.sizes.height = 190;
console.log(clone3.sizes.height); // 190. the clone3 variable props also changes coz still share the same reference, it had not deep copy

//how to make 2 separate objects? solution: deep cloning or structured cloning.
//deep cloning use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. syntax: structuredClone(object)

let user7 = {
  name: 'John',
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone4 = structuredClone(user7);

console.log(user7.sizes === clone4.sizes); // false, different objects

// user and clone are totally unrelated now
user7.sizes.width = 60; // change a property from one place
console.log(clone4.sizes.width); // 50, not related

//it supports circular reference also
let user8 = {};
// let's create a circular reference:
// user.me references the user itself
user8.me = user8;

let clone5 = structuredClone(user8);
console.log(clone5.me === clone5); // true

// //But it doesnt support object with function props
// structuredClone({
//   f: function () {}, // error
// });
