//id,nombre,lugar,precio,capacidad,fecha
const Usuario = require('./Usuario.js');

class Evento {

    static id = 0;

    constructor(nombre,lugar,precio,capacidad = 50,fecha = now (),participantes){
        Evento.id++
        console.log(`Event.id++ = ${Evento.id}`);
        this.id = Evento.id;
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = capacidad;
        this.fecha = fecha;
        this.participantes = [];
    }

}


module.exports = Evento;
