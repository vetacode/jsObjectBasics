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
console.log(admin[kunci]);

//Computed Props
let fruit = 'banana';

let bag = {
  [fruit]: 10,
  taste: 'delicious',
};

console.log(bag[fruit]);
