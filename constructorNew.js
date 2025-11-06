function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let visitor = new User('Alex');

console.log(visitor);

//if using return, will override the 'this'
function User2(name) {
  this.name = name;
  this.admin = true;
  return { name: 'Alibaba' };
}

let aladin = new User2('Ali');
console.log(aladin); //Alibaba, overwrites Ali that passed by aladin variable

//we can omit parenthesis (tanda kurung) klo ga passing argumen. But this is not a best practices
// let alibaba = new User;

/* Task 1
Two functions – one object
importance: 2
Is it possible to create functions A and B so that new A() == new B()?

function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true
If it is, then provide an example of their code.
*/

function Heaven() {
  this.name = 'Surga';
  return { name: 'Neraka' };
}

function Hell() {
  this.name = 'Neraka';
}

let nyaman = new Heaven();
let success = new Hell();

success = nyaman;

console.log(nyaman == success);
