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
