class Product {

    constructor (){
        this.id = 0;
        this.title = "";
        this.price = 0;
        this.thumbnail = "";
        this.code = "";
        this.stock = 0;
    }

    setId (id){
        this.id = id;
    }

    getId () {
        return this.id;
    }

    setTitle (title){
        this.title = title;
    }

    getTitle () {
        return this.title;
    }

    setPrice (price){
        this.price = price;
    }

    getPrice () {
        return this.price;
    }

    setThumbnail (thumbnail){
        this.thumbnail = thumbnail;
    }

    getThumbnail () {
        return this.thumbnail;
    }

    setCode (code){
        this.code = code;
    }

    getCode () {
        return this.code;
    }

    setStock (stock){
        this.stock = stock;
    }

    getStock () {
        return this.stock;
    }

}

module.exports = Product;

/*Cada producto gestionado debe contar con las siguientes propiedades:
title (nombre del producto)

description (descripción del producto)

price (precio)

thumbnail (ruta de imagen)

code (código identificador)

stock (número de piezas disponibles)*/