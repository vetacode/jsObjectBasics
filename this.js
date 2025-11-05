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
//sayHiß is a function that is a property of user object
//sayHi is a METHOD of the object user.

let mobil = {};

function terbang() {
  console.log('ga bisa donk!');
}

mobil.terbang = terbang; //masukin key terbang ke obj mobil dgn value function terbang ==> terbang adalah method

mobil.terbang();
