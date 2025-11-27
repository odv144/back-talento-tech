import express from  "express";
import cors from "cors"
import rutasProductos from "./src/routes/products.routes.js";
import rutasLogin from "./src/routes/auth.routes.js";
import { documentation } from "./src/controllers/products.controllers.js";

const app= express();
const PORT = process.env.PORT||3000;
app.use(express.json());

//configuracion de CORS
const corsConfig = {
    origin: ['http://localhost:3000', 'https://midominio.com'], // dominios permitidos
    methods: ['GET', 'POST', 'PUT', 'DELETE'],                  // métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],          // cabeceras permitidas
    exposedHeaders: ['Content-Length'],                         // cabeceras visibles al cliente
    credentials: true,                                          // habilitar credenciales
    maxAge: 600,                                                // cache preflight
    optionsSuccessStatus: 204                                   // respuesta preflight exitosa
}

app.use(cors(corsConfig))

app.use("/auth",rutasLogin);

//Middleware de registro
app.use((req,res,next)=>{
    console.log("Datos de la peticion",req.method, req.url);
    next();
})
app.use("/api",rutasProductos);
app.use("/",documentation);


//Manejo de rutas no definidas
app.use((req, res, next) => {
   
    res.status(404).send('Recurso no encontrado o ruta inválida');
});


app.listen(PORT,()=>{
    console.log(`escuachando en http://localhost:${PORT}`);
})