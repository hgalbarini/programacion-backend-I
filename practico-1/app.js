const Product = require('./Product.js');
const ProductManager = require('./ProductManager.js');


// check Add Product function
computadora = new Product();
computadora.setCode("A102");
computadora.setId(1);
computadora.setTitle("Computadora MAC");
console.log("Computadora created and code set to: ", computadora.getCode());
productManager = new ProductManager();
productManager.addProduct(computadora);
console.log(productManager);
lavarropas = new Product();
lavarropas.setCode("A102");
lavarropas.setId(2);
lavarropas.setTitle("Lavarropas Samsung");
productManager.addProduct(lavarropas);
console.log(productManager);
aire = new Product()
aire.setCode("A1023");
aire.setId(3);
aire.setTitle("Aire Acondicionado Samsung");
console.log("Aire created and code set to: ", aire.getCode());
productManager.addProduct(aire);
console.log(productManager);
ventilador = new Product()
ventilador.setCode("A1023444");
ventilador.setId(4);
ventilador.setTitle("Ventilador Samsung");
console.log("Ventilador created and code set to: ", ventilador.getCode());
productManager.addProduct(ventilador);
console.log(productManager);


// check Get product by id
console.log(`Starting check Get product by id`);
productManager.getProductById(1);
productManager.getProductById(222);


// check getProducts
console.log(`Starting check getProducts`);
allProducts = productManager.getProducts();
console.log(`Imprimiendo los productos: `);
allProducts.forEach(product => {
    console.log(`Producto: ${product.getTitle()}`);
});