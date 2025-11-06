//symbol is unique. cannot be auto-converted
let id = Symbol('id');
console.log(id); // TypeError: Cannot convert a Symbol value to a string

let id2 = Symbol('id');
console.log(id.toString()); // Symbol(id), now it works

let id3 = Symbol('id');
console.log(id.description); // id
