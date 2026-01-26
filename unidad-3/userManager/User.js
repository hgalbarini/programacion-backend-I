const crypto = require('crypto');


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
             console.log(`setPassword, password passed: ${password}`);
             const hash = crypto.createHash('sha256');
             hash.update(password);
             let hashPassword = hash.digest('hex');
             console.log(`setPassword, password hashed: ${hashPassword}`);
             this.password = hashPassword
        }
}

module.exports = User;