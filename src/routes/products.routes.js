import express from "express"
import {
    addProduct,
    deleteProduct,
    getAllProducts,
    getProductById,
    documentation
} from "../controllers/products.controllers.js"
import { authentication } from "../midleware/authentication.js"

const routes = express.Router()

routes.get("/doc",documentation)

routes.get("/products", getAllProducts)

routes.get("/products/:id", getProductById)

routes.post("/products/create",authentication, addProduct)

routes.delete("/products/:id",authentication, deleteProduct)

export default routes;