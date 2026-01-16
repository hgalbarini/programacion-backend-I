const Evento = require('./Evento.js');
const Usuario = require('./Usuario.js');

class TicketManager {

    #precioBaseDeGanancia = 0.15;

    constructor(){
        this.eventos = [];
        this.#precioBaseDeGanancia = this.#precioBaseDeGanancia;
    }

    getEventos(){
        this.eventos.forEach(evento => console.log(evento));
        return this.eventos;
    }

    agregarEvento(nombre,lugar,precio,capacidad,fecha,participantes){
       precio = precio * (1 + this.#precioBaseDeGanancia);
       let eventToAdd = new Evento(nombre,lugar,precio,capacidad,fecha,participantes);
       this.eventos.push(eventToAdd);
    }

    agregarUsuario(eventId,userId){
        eventExist = this.eventos.find(evento.id === eventId);
        if (!eventExist) throw new Error("Evento no existe");
        userExist = this.eventos.participantes.find(participantes.id === userId);
        if (userExist) throw new Error("Usuario ya registrado");
        userToAdd = new Usuario(userId);
        this.eventos.find(evento.id === eventId).participantes.push(userToAdd);
    }


}
module.exports = TicketManager;

/*¿Cómo lo hacemos? Se creará una clase que permitirá llevar una gestión completa de usuarios que deseen acceder a dichos eventos.

--Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
--La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
--Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
-- Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
-- nombre
-- lugar
-- precio (deberá agregarse un 0.15 del valor original)
-- capacidad (50 por defecto)
-- fecha (hoy por defecto)
-- El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.

-- Debe contar con un método “agregarUsuario” El cual recibirá:
--id del evento (debe existir, agregar validaciones)
--id del usuario
--El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
--Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades)
*/