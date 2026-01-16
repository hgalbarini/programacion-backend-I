const Evento = require('./Evento.js');
const Usuario = require('./Usuario.js');
const TicketManager = require('./TicketManager.js');



//test add event and get event
//let conciertoVela = new Evento ("VelaConcert","Mdeo",20,30,new Date(),[]);
let ticketMan1 = new TicketManager();
ticketMan1.agregarEvento("VelaConcert","Mdeo",20,30,new Date(),[]);
ticketMan1.getEventos();

//TestAddExistingEvent