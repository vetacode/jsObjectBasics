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
