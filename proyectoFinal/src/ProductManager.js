import fs from 'fs/promises';
import Product from './Product.js';

class ProductManager {

    constructor (){
        this.products = [];
        this.codeAlreadyExist = false;
        this.idExists = false;
        this.path = 'data/products.json';
    }

    async addProduct (id,title,description,code,price,stock,category,thumbnail){

        //leer
        try{
            let existingProducts = await fs.readFile(this.path,'utf-8'); //leo el archivo
            this.products = JSON.parse(existingProducts); // mis products actuales son ahora los que ya estaban en el archivo
        }catch (error){
            console.error (`Error in read file from addProduct: ${error.message}`)
        }

        //escribir
        try {
            let product = new Product(id,title,description,code,price,stock,category,thumbnail);
            this.products.push(product); //agrego el current product a los que estaban en el archivo
            let dataToWrite = JSON.stringify(this.products,null,2) //lo convierto a string
            await fs.writeFile(this.path, dataToWrite); //lo imprimo en el archivo
        }catch(error) {
            console.error(`Error writing the file in addProduct: ${error.message}`);
        }
    }


    async getProducts(){
        try {
            let existingProducts = await fs.readFile(this.path,'utf-8'); //leo el archivo
            this.products = JSON.parse(existingProducts); // mis products actuales son ahora los que ya estaban en el archivo
            return this.products
        } catch (error){
            console.error (`Error in getProducts: ${error.message}`)
        }
        
    }

    /* async getUsers(){
        try {
            this.data = await fs.readFile(path,'utf-8'); //leo el archivo
            this.users = JSON.parse(this.data); //mis users actuales son los del archivo
            return this.users; //retorno los usuarios que lei del archivo
        } catch (error) {
            console.error(`Error in catch from readFile: ${error.message}`);
        }
    } */

    getProductById(id){
        this.idExists = this.products.some(product => product.getId() === id);
        if (!this.idExists) {
            console.error(`Id ${id} not found.`)
        } 
        else {
            const productFound = this.products.find(product => product.getId() === id);
            console.log(`Returning product ${productFound.getTitle()}`);
            return productFound;
        } 
    }

}

export default ProductManager


/*Actividad Práctica: Clases con ECMAScript y ECMAScript Avanzado
Las actividades prácticas estan pensadas para que llevar a la práctica los temas vistos en la Unidad.

¿Por qué son importantes? Porque te ayudan a ir construyendo tu proyecto final.

Recomendamos que las realices a medida que avanzas en el curso.

Consigna
Crear una clase llamada ProductManager que gestione un conjunto de productos.

Aspectos a Incluir
La clase debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.

Cada producto gestionado debe contar con las siguientes propiedades:
title (nombre del producto)

description (descripción del producto)

price (precio)

thumbnail (ruta de imagen)

code (código identificador)

stock (número de piezas disponibles)


Métodos a Implementar
addProduct
Este método debe agregar un producto al arreglo de productos inicial.

Debe validar que no se repita el campo code y que todos los campos sean obligatorios.

Al agregar un producto, debe crearse con un id autoincrementable.


getProducts
Este método debe devolver el arreglo con todos los productos creados hasta el momento.


getProductById
Este método debe buscar en el arreglo el producto que coincida con el id.

En caso de no encontrar ningún id coincidente, debe mostrar en consola el error "Not found".*/