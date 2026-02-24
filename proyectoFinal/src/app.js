import express from "express";
import handlebars from 'express-handlebars';
import CartManager from "./CartManager.js";
import ProductManager from "./ProductManager.js"; 
import cartsRouter from "./routes/carts.routes.js";
import productsRouter from "./routes/products.routes.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { Server } from 'socket.io';




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8080;

app.engine('handlebars', handlebars.engine() );
app.set('views', path.join(__dirname, 'views' ) );
app.set('view engine', 'handlebars');


let productManager = new ProductManager();
let cartManager = new CartManager();
app.use(express.json());
app.use(express.static(path.join(__dirname,'..','public')));


// PRODUCT ROUTES

app.use('/api/products',productsRouter)

// CART ROUTES
app.use('/api/carts',cartsRouter)

const httpServer = app.listen(PORT, () => { console.log(`Servidor con Express en el puerto ${PORT}`) })

const io = new Server(httpServer);
app.set('socketio',io);  //seteo esto para que se pueda acceder desde las rutas

io.on('connection',  socket => {
    console.log('Nuevo cliente conectado con el id ' + socket.id );
})
