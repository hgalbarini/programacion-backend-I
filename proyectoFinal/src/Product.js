//Falta modificar thumbnail getter y seter para array

class Product {

    constructor (id,title,description,code,price,stock,category,thumbnail){
        this.id = id;
        this.title = title;
        this.description = description;
        this.code = code;
        this.price = price;
        this.stock = stock;
        this.category = category;
        this.thumbnail = thumbnail;
        
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

    setDescription (description){
        this.description = description;
    }

    getDescription () {
        return this.description;
    }

    setCode (code){
        this.code = code;
    }

    getCode () {
        return this.code;
    }

    setPrice (price){
        this.price = price;
    }

    getPrice () {
        return this.price;
    }

    setCategory (category){
        this.category = category;
    }

    getCategory () {
        return this.category;
    }

    setThumbnail (thumbnail){
        this.thumbnail = thumbnail;
    }

    getThumbnail () {
        return this.thumbnail;
    }

    setStock (stock){
        this.stock = stock;
    }

    getStock () {
        return this.stock;
    }

}

export default Product
/*
title: String

description: String

code: String

price: Number

status: Boolean

stock: Number

category: String

thumbnails: Array de Strings (rutas donde están almacenadas las imágenes del producto).
*/