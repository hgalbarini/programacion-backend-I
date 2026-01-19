//continuar chequeando methods

const Evento = require('./Evento.js');
const Usuario = require('./Usuario.js');
const TicketManager = require('./TicketManager.js');



//test add event and get event
//let conciertoVela = new Evento ("VelaConcert","Mdeo",20,30,new Date(),[]);
let ticketMan1 = new TicketManager();
ticketMan1.agregarEvento("VelaConcert","Mdeo",20,30,new Date(),[]);
ticketMan1.getEventos();

//Test add user
let user1 = new Usuario();
user1.setId(1);
console.log(`Usuario set with ID: `,user1.getId());
let user2 = new Usuario();
user2.setId(1);
console.log(`Agregando user1`);
ticketMan1.agregarUsuario(1,user1.getId());
console.log(`Agregando user2`);
ticketMan1.agregarUsuario(1,user2.getId());