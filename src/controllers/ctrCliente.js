const ctrCliente = {};
const cliente = require('../models/cliente');
const categoria = require("../models/categoria");
//Funcion CRUD
//Create = Insert into document 
ctrCliente.guardar = async (req,res) => {
    await cliente
    .create(req.body)
    .then(data => res.json(data))
    .catch( err => res.json(err))
}

//Funcion CRUD
//Read
ctrCliente.listar = async (req,res) => {
    await cliente 
    .find()
    .then( data => res.json(data))
    .catch( err => res.json(err))
}

//Read buscar por id
ctrCliente.buscarId = async (req,res) =>{
    await cliente
    .findById(req.params.id)
    .then( data => res.json(data))
    .catch( err => res.json(err))
}

//Read buscar por caracter nombre
ctrCliente.buscarNom = async (req,res) => {
    await cliente
    .find({nombre : RegExp(req.params.nom,'i')})
    .then( data => res.json(data))
    .catch( err => res.json(err))
}

//Update = Actualizar Datos
ctrCliente.actualizar = async (req,res) => {
    const {_id, ...body } = req.body;
    await cliente
    .updateOne({_id : _id},{ $set : body})
    .then( data => res.json(data))
    .catch( err => res.json(err))
} 

//Delete
ctrCliente.eliminar = async (req,res) => {
    await cliente
    .deleteOne({_id:req.params.id})
    .then( data => res.json(data))
    .catch( err => res.json(err))
}


module.exports = ctrCliente
