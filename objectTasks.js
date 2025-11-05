/*
Hello, object
importance: 5
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

let user = {};

let user2 = {
  name: 'John',
  surename: 'Smith',
};

user2.name = 'Pete';

delete user2.name;
