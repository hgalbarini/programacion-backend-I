const crypto = require('crypto');

//falta encriptar pass

class User {


    constructor(id,nombre,apellido,edad,cursos = [],password){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.curso = cursos;
        this.password = password;
    }

        // GETTERS
        getId() {
            return this.id;
        }
    
        getNombre() {
            return this.nombre;
        }
    
        getApellido() {
            return this.apellido;
        }
    
        getEdad() {
            return this.edad;
        }
    
        getCurso() {
            return this.curso;
        }
    
        getPassword() {
            return this.password;
        }

        // SETTERS 
        setNombre(nombre) {
            this.nombre = nombre;
        }
    
        setApellido(apellido) {
            this.apellido = apellido;
        }
    
        setEdad(edad) {
             this.edad = edad;
        }
    
        setCurso(curso) {
            this.curso = curso;
        }
    
        setPassword(password) {
            this.password = password;
        }
}

module.exports = User;