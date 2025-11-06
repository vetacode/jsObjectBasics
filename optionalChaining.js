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
