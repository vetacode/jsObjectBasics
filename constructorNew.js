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
