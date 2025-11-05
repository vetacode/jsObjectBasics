let user = {
  name: 'John',
  age: 30,
};

user.sayHi = function () {
  console.log('Hello!');
};

user.sayHi(); // Hello!

console.log(user);
//A function that is a property of an object is called its method.
//sayHi is a function that is a property of user object
//sayHi is a METHOD of the object user.

let mobil = {};

function terbang() {
  console.log('ga bisa donk!');
}

mobil.terbang = terbang; //masukin key terbang ke obj mobil dgn value function terbang ==> terbang adalah method

mobil.terbang();

//Cara penulisan method
let ukuran = 300;

let rumah = {
  isHuge: function () {
    return `${ukuran}m2 sedeng lah ya..`;
  },
};

console.log(rumah.isHuge());

//shorthand
let rumah2 = {
  isHuge() {
    return `${ukuran}m2 sedeng lah ya..`;
  },
};

console.log(rumah2.isHuge());

//THIS: to access the object
//This. is the object 'before the dot'
//this. is the 'current object'
let user2 = {
  name: 'John',
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
    return 'belajar this';
  },
};

user2.sayHi(); // John

let admin = user2; //now user2 and admin has the same object reference
console.log(admin.sayHi());

//this is not bound, can be used in any function
//this is free, and evaluated during the run-time in each function
let user3 = { name: 'John' };
let admin2 = { name: 'Admin' };

function sayHi() {
  console.log(this.name);
}

// use the same function in two objects
user3.f = sayHi;
admin2.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user3.f(); // John  (this == user)
admin2.f(); // Admin  (this == admin)

admin2['f'](); // Admin (dot or square brackets access the method – doesn't matter)

//Arrow function doesn't has own this. It will captured from lexically bind this from surrounding function
let user4 = {
  firstName: 'Ilya',
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
user4.sayHi(); // "Ilya"
//that is handy when we want the outer this

//if its use regular function:
let user5 = {
  firstName: 'Ilya',
  sayHi() {
    let regular = function () {
      console.log(this.firstName);
    };
    regular();
  },
};
user5.sayHi(); //undefined (or throws in strict mode)

/* TASK1
Using "this" in object literal
importance: 5
Here the function makeUser returns an object.

What is the result of accessing its ref? Why?

function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // What's the result?
*/

function makeUser() {
  return {
    name: 'John',
    ref: this,
  };
}

let user6 = makeUser();

console.log(user6.ref.name); //undefined. coz this.ref is undefined, coz this inside makeUser() is a function not a method

function makeUser2() {
  return {
    name: 'John',
    ref() {
      return this;
    },
  };
}
let user7 = makeUser2();
console.log(user7.ref().name); //John

/*Task2
Create a calculator
importance: 5
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

let calculator = {
  read() {
    this.a = 2;
    this.b = 4;
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
