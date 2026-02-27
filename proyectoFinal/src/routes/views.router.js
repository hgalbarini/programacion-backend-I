import express from 'express'
import ProductManager from "../ProductManager.js"; 

const router = express.Router();

let productManager = new ProductManager();

router.get('/home', async (req,res) => {
    console.log('home');
    let data = await productManager.getProducts();
    res.render('home', { products: data });
}) 

router.get('/realtimeproducts', async (req,res) => {
    console.log('realtimeproducts');
    let data = await productManager.getProducts();
    res.render('realTimeProducts', { products: data });
}) 

export default router