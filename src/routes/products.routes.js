import express from "express"
import {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProductById
} from "../controllers/products.controllers.js"
import { authentication } from "../midleware/authentication.js"

const routes = express.Router()

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create",authentication, addProduct)

routes.delete("/products/:id",authentication, deleteProduct)

//routes.put("/products/:id", editProduct)


/*

//Rutas con parametros
app.get("/product/:id",(req,res)=>{
    const {idPro}= req.params.id;
    res.send({producto:{id:idPro,nombre:"camisa"}}); 
});
//Rutas con query params
app.get('/products',(req,res)=>{
    const {category, price}= req.query;
    res.send(`Categoria: ${category}, Precio:${price}`);
});
*/
export default routes;