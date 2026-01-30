import express from "express";
import CartManager from "./CartManager.js";
import Product from "./Product.js";
import ProductManager from "./ProductManager.js"; 

const app = express();
const PORT = 8080;
let productManager = new ProductManager();
let cartManager = new CartManager();
app.use(express.json());


// PRODUCT ROUTES

app.get('/api/products', async (req,res) => {
    console.log(`get /api/products`);
    try {
        let products = await productManager.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({success: false, error: error.message});
    }
})

app.get('/api/products/:pid', async (req,res) => {
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

app.post('/api/products', async (req,res) => {
    console.log(`post /api/products`);
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

app.put('/api/products/:pid', async (req,res) => {
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

app.delete('/api/products/:pid', async (req,res) => {
    console.log(`delete /api/products/:pid`);
    const {pid} = req.params;
    try {
        await productManager.deleteProduct(pid);
        res.json({status: "Success", message: `Product with id ${pid} deleted successfully`});
    } catch (error) {
        res.status(404).json({status: "Error", error: error.message});
    }
})

// CART ROUTES

app.post('/api/carts', async (req,res) => {
    console.log(`post /api/carts`);
    try {
        const newCart = await cartManager.createCart();
        res.json({status: "Success", cart: newCart});
    } catch (error) {
        res.status(500).json({status: "Error", error: error.message});
    }
})

app.get('/api/carts/:cid', async (req,res) => {
    console.log(`get /api/carts/:cid`);
    const {cid} = req.params;
    try {
        const cart = await cartManager.getCartById(cid);
        res.json({status: "Success", cart: cart});
    } catch (error) {
        res.status(404).json({status: "Error", error: error.message});
    }
})

app.post('/api/carts/:cid/product/:pid', async (req,res) => {
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

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});