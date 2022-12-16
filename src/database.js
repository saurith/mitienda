const mongoose = require('mongoose');

mongoose
    .connect("mongodb+srv://saurith:Saurith2022@cluster0.cg2tnm0.mongodb.net/mitienda?retryWrites=true&w=majority")
    .then( db => console.log("Conecto con la base de datos"))
    .catch( err => console.log("Error con la coneccion"+err))