const express=require("express");
const rutas=express.Router();

const consulta=require("../models/comunidadBanco")

const bcrypt=require("bcrypt")


rutas.get("/obteniendoDatos", async (req,res)=>{
    const datos = await consulta.find();
    res.json(datos);
})

rutas.post("/crear", async(req,res)=>{
    let body = req.body

    let salto = await bcrypt.genSalt(10)

    let password = await bcrypt.hash(body.pass,salto)

    body.pass = password

    let usuario = new consulta(body)

    await usuario.save()

    res.json({
        registro:"registrado"
    })
})

module.exports = rutas;