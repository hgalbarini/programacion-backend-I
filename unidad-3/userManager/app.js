const UserManager = require('./UserManager');
const User = require('./User');

//test add 1 user
userToAdd = new User("1","Hugo","Galbarini",30,["Programacion Backend", "Javascript 1"],"123a45");
userToAdd2 = new User("2","Hugo2","Galbarini2",30,["Programacion Backend", "Javascript 1"],"123a45");
userManager = new UserManager();
userManager.addUser(userToAdd2);
