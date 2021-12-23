const express=require("express");
const rutas=express.Router();

const consulta=require("../models/solicitudCredito")

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

rutas.post("/consultarClienteAC", async(req,res)=>{

    let cedula = req.body.cedula;

    let usuario = await consulta.findOne({"numeroCedula":cedula})

    res.json(usuario)

    
})

rutas.put("/aprobarSolicitud", async(req,res)=>{
    let cedula = req.body.identificacion

    let usuario = await consulta.findOne({"numeroCedula":cedula})

      
    usuario.numeroCedula = req.body.identificacion
    usuario.valorSolicitado = req.body.valorSolicitado
    usuario.numeroCuotas = req.body.numeroCuotas
    usuario.estado = req.body.valorEstado
    usuario.tipoUsuario = req.body.tipoUsuario
    
    console.log(usuario)

    await usuario.save()

    res.json({
        mensaje:"Usuario actualizado",
    })
})

rutas.delete("/eliminarCliente/:cedula", async(req,res)=>{

    let cedula = req.params.cedula

    try {
        let usuario = await consulta.findOne({"numeroCedula":cedula})

        await usuario.delete()

        res.json({
            mensaje:"Usuario Eliminado"
        })
    } catch (error) {
        res.json({
            mensaje:"Error Eliminando"
        })
    }

    

})

module.exports = rutas;