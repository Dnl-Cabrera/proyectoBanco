const {model} = require("mongoose");
const mongoose = require("../db/conexion");

const Schema = mongoose.Schema;

const modelSchemSolicitudCredito = new Schema({
    numeroCedula:Number,
    valor_solicitado:Number,
    numero_cuotas:Number,
    estado:String,
    tipoUsuario:String,
    
});

const solicitudCredito = mongoose.model('solicitud_creditos',modelSchemSolicitudCredito);

module.exports = solicitudCredito;