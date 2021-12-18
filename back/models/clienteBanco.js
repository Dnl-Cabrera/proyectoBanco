const { model } = require("mongoose");
const mongoose = require("../db/conexion");

const Schema = mongoose.Schema;

const modelSchem = new Schema({
    nombre:String,
    tipoCedula:String,
    numeroCedula:Number,
    fechaSolicitud:Date,
    valorSolicitado:Number,
    fechaAprobacion:Date,
    valorAprobado:Number,
    fechaRechazo:Date,
    estadoSolicitud:String,
});

const consulta = mongoose.model("banco_cliente",modelSchem);

module.exports = consulta;