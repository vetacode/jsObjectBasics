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

//other simple basic one
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() == new B());

/* Task 2
Create new Calculator
importance: 5
Create a constructor function Calculator that creates objects with 3 methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of these properties.
mul() returns the multiplication product of these properties.
For instance:

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
*/

function Calculator(a, b) {
  this.read = function () {
    this.a = a;
    this.b = b;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let result = new Calculator(2, 4);
result.read();
console.log(result.sum());
console.log(result.mul());
