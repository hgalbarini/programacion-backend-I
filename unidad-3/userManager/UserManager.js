const fs = require('fs/promises');
const path = './Usuarios.json';
const User = require('./User');

class UserManager {

    constructor(){
        this.users = [];
        this.data;
    }

    async addUser(user){

        //leer
        try {
            this.data = await fs.readFile(path,'utf-8'); //leo el archivo
            console.log(`data const inside try from addUser: `,this.data); 
            this.users = JSON.parse(this.data); //mis users actuales son los del archivo
        } catch (error) {
            console.error(`Error in catch from readFile: ${error.message}`);
        }

        //escribir
        try{
            this.users.push(user); //agrego el current user a los que estaban en el archivo
            let dataToWrite = JSON.stringify(this.users,null,2) //lo convierto a string
            await fs.writeFile(path, dataToWrite); //lo imprimo en el archivo
        } catch(error) {
            console.error(`Error writing the file: ${error.message}`);
        }

    }

    async getUsers(){
        try {
            this.data = await fs.readFile(path,'utf-8'); //leo el archivo
            this.users = JSON.parse(this.data); //mis users actuales son los del archivo
            return this.users; //retorno los usuarios que lei del archivo
        } catch (error) {
            console.error(`Error in catch from readFile: ${error.message}`);
        }
    }

}

module.exports = UserManager;

/* ¿Cómo lo hacemos? Se creará una clase que permita gestionar usuarios usando fs.promises, éste deberá contar sólo con dos métodos: Crear un usuario y consultar los usuarios guardados.

El Manager debe vivir en una clase en un archivo externo llamado UsersManager.js (Como el realizado en la clase pasada).
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Edad
Curso
El método debe guardar un usuario en un archivo “Usuarios.json”, deben guardarlos dentro de un arreglo, ya que se trabajarán con múltiples usuarios

El método “ConsultarUsuarios” debe poder leer un archivo Usuarios.json y devolver el arreglo correspondiente a esos usuarios */