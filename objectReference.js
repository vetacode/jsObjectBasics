let user = {
  name: 'Alice',
  age: 20,
};
console.log(user.name);

let admin = user;
console.log(user);
admin.name = 'Brandon'; //this is changing the object reference

console.log(user.name); //therefore the user object also changes
