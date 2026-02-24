import express from 'express'
import CartManager from '../CartManager.js'
import ProductManager from "../ProductManager.js"; 
import {upload} from '../utils/utils.js';


const router = express.Router();

const cartManager = new CartManager();

let productManager = new ProductManager();

router.get('/realtimeproducts', async (req,res) => {
    console.log('realtimeproducts');
    let data = await productManager.getProducts();
    console.log(data);
    res.render('realTimeProducts', { products: data });
}) 

router.get('/', async (req,res) => {
    console.log(`get /api/products`);
    try {
        let products = await productManager.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
})

router.get('/:pid', async (req,res) => {
    console.log(`get /api/products/:pid`);
    const {pid} = req.params;
    try {
        let product = await productManager.getProductById(pid);
        if (product) {
            res.json(product);
        } else {
            throw new Error(`Product not found with id: ${pid}`);
        }
    } catch (error) {
        res.status(404).json({success: false, error: error.message});
    }
})

router.post('/', upload.single('productImage'), async (req,res) => {
    console.log(`post /api/products`);
    console.log('POST /api/products received');
    console.log('Content-Type header:', req.headers['content-type']);
    console.log('Request body:', req.body);
    console.log('Body type:', typeof req.body);
    try {
        const { title, description, code, price, stock, category, thumbnails, status } = req.body;
        
        // Validar que los campos requeridos estén presentes
        if (!title || !description || !code || !price || !stock || !category) {
            throw new Error("Missing required fields: title, description, code, price, stock, category");
        }

        // El ID se autogenera, no se acepta del body
        await productManager.addProduct(title, description, code, price, stock, category, thumbnails || [], status !== undefined ? status : true);
        res.json({status: "Success", message: "Product added successfully"});  
    } catch (error) {
        res.status(400).json({status: "Error", error: error.message});
    }
})

router.put('/:pid', async (req,res) => {
    console.log(`put /api/products/:pid`);
    const {pid} = req.params;
    try {
        // No permitir actualizar el ID
        if (req.body.id) {
            delete req.body.id;
        }

        const updatedProduct = await productManager.updateProduct(pid, req.body);
        res.json({status: "Success", product: updatedProduct});
    } catch (error) {
        res.status(400).json({status: "Error", error: error.message});
    }
})

router.delete('/:pid', async (req,res) => {
    console.log(`delete /api/products/:pid`);
    const {pid} = req.params;
    try {
        await productManager.deleteProduct(pid);
        res.json({status: "Success", message: `Product with id ${pid} deleted successfully`});
    } catch (error) {
        res.status(404).json({status: "Error", error: error.message});
    }
})

export default router