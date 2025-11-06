let user = {}; // user has no address

console.log(user?.address?.street); // undefined (no error)

let user2 = null;

console.log(user?.address); // undefined
console.log(user?.address?.street); // undefined

//Please note: the ?. syntax makes optional the value BEFORE it, but not any further.

//short-circuiting
let user3 = null;
let x = 0;

user3?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++
console.log(x); // 0, value not incremented

//other variant of chaining: ?.() and ?.[]

let userAdmin = {
  admin() {
    console.log('I am admin');
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin

userGuest.admin?.(); // nothing happens (no such method)

let key = 'firstName';

let user1 = {
  firstName: 'John',
};

let user4 = null;
console.log(user1?.[key]); // John
console.log(user2?.[key]); // undefined

delete user?.name; // delete user.name if user exists
