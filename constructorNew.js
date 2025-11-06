function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let visitor = new User('Alex');

console.log(visitor);
