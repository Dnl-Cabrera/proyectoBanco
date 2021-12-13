const express=require("express");
const cors=require("cors");

const rutas=require("./Routes/rutasAdministrador")

const app=express();
const puerto=8080;

corsConfig={
    origin:"*",
}

app.listen(puerto,()=>{
    console.log("Servidor conectado");
})

app.get("/",(req,res)=>{
     res.json({
         mensaje:"Probando servidor"
     })
})

app.use("/crearUsuario/",express.json(),cors(corsConfig),rutas);

app.use("/obteniendoDatos/",rutas);