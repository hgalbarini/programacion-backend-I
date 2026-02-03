import express from 'express'
import CartManager from '../CartManager.js'
import ProductManager from "../ProductManager.js"; 


const router = express.Router();

const cartManager = new CartManager();

let productManager = new ProductManager();

router.post('/', async (req,res) => {
    console.log(`post /api/carts`);
    try {
        const newCart = await cartManager.createCart();
        res.json({status: "Success", cart: newCart});
    } catch (error) {
        res.status(500).json({status: "Error", error: error.message});
    }
})

router.get('/:cid', async (req,res) => {
    console.log(`get /api/carts/:cid`);
    const {cid} = req.params;
    try {
        const cart = await cartManager.getCartById(cid);
        res.json({status: "Success", cart: cart});
    } catch (error) {
        res.status(404).json({status: "Error", error: error.message});
    }
})

router.post('/:cid/product/:pid', async (req,res) => {
    console.log(`post /api/carts/:cid/product/:pid`);
    const {cid, pid} = req.params;
    try {
        // Verificar que el producto exista
        const product = await productManager.getProductById(pid);
        if (!product) {
            throw new Error(`Product with id ${pid} not found`);
        }

        // Verificar que el producto esté activo
        if (product.status === false) {
            throw new Error(`Product with id ${pid} is not available`);
        }

        const updatedCart = await cartManager.addProductToCart(cid, pid);
        res.json({status: "Success", cart: updatedCart});
    } catch (error) {
        res.status(400).json({status: "Error", error: error.message});
    }
})

export default router