const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    nombre : { type : String, required: true},
    identificacion : { type: Number, required: true},
    correo : String,
    cedular : String,
    genero : { type : String, default :'Femenino'},
    nacimiento : { type: Date, default: Date.now()}
},{
    timestamps:true
})

module.exports =mongoose.model('cliente',clienteSchema)