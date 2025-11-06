let user = {}; // user has no address

console.log(user?.address?.street); // undefined (no error)

let user2 = null;

console.log(user?.address); // undefined
console.log(user?.address?.street); // undefined

//Please note: the ?. syntax makes optional the value before it, but not any further.
