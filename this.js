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
let user = {
  firstName: 'Ilya',
  sayHi() {
    let arrow = () => console.log(this.firstName);
    arrow();
  },
};
user.sayHi(); // "Ilya"
//that is handy when we want the outer this

//if its use regular function:
let user = {
  firstName: 'Ilya',
  sayHi() {
    let regular = function () {
      console.log(this.firstName);
    };
    regular();
  },
};
user.sayHi(); //undefined (or throws in strict mode)
