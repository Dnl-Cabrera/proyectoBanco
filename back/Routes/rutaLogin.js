const express = require("express");
const rutas = express.Router();

const consulta = require("../models/comunidadBanco")

const bcrypt = require("bcrypt")

rutas.get("/obteniendoDatos", async (req, res) => {
    const datos = await consulta.find();
    res.json(datos);
})

rutas.post("/consultarUsuario", async (req, res) => {
    let body = req.body

    let usuario = await consulta.findOne({ "correo": body.correo })

    //res.send(usuario)

    if (usuario) {

        let password = req.body.pass;
        let validar_password = await bcrypt.compare(password, usuario.pass)

        if (!validar_password) {
            return (res.json({
                mensaje: "Clave equivocada",
            }))
        }
        else{
            return (res.json({ 
                mensaje: "Acceso correcto" 
            }))
        }

    }
    else {
        return (res.json({ 
            mensaje: "Correo equivocado" 
        }))
    }


})

module.exports = rutas;