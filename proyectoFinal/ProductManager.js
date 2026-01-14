//Falta modificar

class ProductManager {

    constructor (){
        this.products = [];
        this.codeAlreadyExist = false;
        this.idExists = false;
    }

    addProduct (Product){
        this.codeAlreadyExist = this.products.some(product => product.getCode() === Product.getCode());
        console.log(`Code ${Product.getCode()} from ${Product.getTitle()} already exist? ${this.codeAlreadyExist}`);
        if (!this.codeAlreadyExist) this.products.push(Product);
    }

    getProducts(){
        return this.products;
    }

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

module.exports = ProductManager;


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