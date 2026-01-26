const UserManager = require('./UserManager');
const User = require('./User');

//test add 1 user
userToAdd = new User("1","Hugo","Galbarini",30,["Programacion Backend", "Javascript 1"],"123a45");
userToAdd2 = new User("2","Hugo2","Galbarini2",30,["Programacion Backend", "Javascript 1"],"123a452");
userManager = new UserManager();
userManager.addUser("2","Hugo2","Galbarini2",30,["Programacion Backend", "Javascript 1"],"123a452");

// test return users get users
/* userManager = new UserManager();
usersReturned = userManager.getUsers();
console.log("---------------");
console.log("Printing users from app.js");
console.log("---------------");
usersReturned.then(users => console.log(users));  */