import * as productService from "../services/products.services.js"
import path from 'path';
import { fileURLToPath } from 'url';

export const addProduct = async (req, res) => {
    try{
        const product = req.body;
        const newProduct = await productService.addProductService(product)
        res.status(200).json(newProduct);
    }catch(error){
        res.status(500).send()
    }
}

export const deleteProduct = async (req, res) => {
    try{
        const id = req.params.id;
        if(id){
            await productService.deleteProductService(id)
            res.sendStatus(200)//status(200)//.send()
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }  
}

/*
export const editProduct = async (req, res) => {
    try{
        const id = req.params.id
        const product = req.body
        if (id && product){
            const newProduct = await productService.editProductService(id, product)
            res.status(200).json(newProduct);
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }
}*/
// Define __filename y __dirname para módulos ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const documentation = async (req, res) => {
    try {
        // Ahora puedes usar '__dirname' como lo harías en CommonJS
        // Ajusta la ruta '..' y 'data' según tu estructura real
        const filePath = path.join(__dirname, '..', 'data', 'documentation.html');
        
        console.log("Ruta del archivo intentando enviar:", filePath); // Para depuración

        res.sendFile(filePath);
    } catch (error) {
        console.error("Error al servir la documentación:", error);
        res.status(500).send("Error interno del servidor al cargar la documentación.");
    }
};

export const getAllProducts = async (req, res) => {
    try{
        console.log("paso1")
        const products = await productService.getAllProductsService()
        console.log(products)
        res.status(200).json(products);
    }catch(error){
        res.status(500).send()
    }

};

export const getProductById = async (req, res) => {
    try{
        const id = req.params.id;
        if (id){
            const product = await productService.getProductByIdService(id)
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ message: 'Producto no encontrado' });
            }
        }else{
            res.status(400).json(error)
        }
    }catch(error){
        res.status(500).send()
    }

};