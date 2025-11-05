let user = {
  name: 'Angela',
  age: 25,
};
console.log(user.name);

user.isSingle = true;
console.log(user);

delete user.age;
console.log(user);

//multiword keys
let hero = {
  name: 'Vetacode',
  'like coding': true,
};

//Accessing or Getting multiword keys
console.log(hero['like coding']);

//deleting
delete hero['like coding'];
console.log(hero);

//Square bracket other usage: can access variable of keys (propery's name)
let admin = {
  name: 'Gina',
  job: 'programmer',
  umur: 29,
};

let kunci = 'umur';
console.log('value admin:', admin[kunci]);

//Computed Props
let fruit = 'banana';

let bag = {
  [fruit]: 10,
  taste: 'delicious',
};
console.log(bag[fruit]);

let comp = 'apple';
let tas = {
  [comp + 'Computers']: 5,
};
console.log('isi tas:', tas); //isi tas: { appleComputers: 5 }

//props value shorthand
function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user2 = makeUser('John', 30);
console.log(user2.name); // John

function makeUser(name, age) {
  return {
    name, // same as name: name
    age, // same as age: age
    // ...
  };
}

//props name limitations = there is no limitations on props name, as long as string or symbol.
// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
};
console.log(obj.for + obj.let + obj.return); // 6

let obj2 = {
  0: 'test', // same as "0": "test"
};

// both alerts access the same property (the number 0 is converted to string "0")
console.log(obj2['0']); // test
console.log(obj2[0]); // test (same property)

let obj3 = {};
obj3.__proto__ = 5; // assign a number
console.log(obj.__proto__); // [object Object] - the value is an object, didn't work as intended

//Props existence
let user3 = {};
console.log(user3.noSuchProperty === undefined); // true means "no such property"

//Special operator 'in':
// 'key' in object;
let user4 = { name: 'John', age: 30 };

console.log('age' in user4); // true, user.age exists
console.log('blabla' in user4); // false, user.blabla doesn't exist

let user5 = { age: 30 };
let key = 'age';
console.log(key in user5); // true, property "age" exists

//why op 'in' should exist?

let obj4 = {
  test: undefined,
};
console.log(obj.test); // it's undefined, so - no such property?
console.log('test' in obj); // true, the property does exist!
