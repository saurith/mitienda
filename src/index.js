require('./database')
const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 5001;

//Configuraciones para trabjar con peticiones HTTP post, get, delete, put
app.use(cors());
app.use(express.json());

//Rutas
app.use('/',require('./routers/rtrCliente'));
app.use("/",require("./routers/rtrCategoria"));

app.listen(PORT,(req,res) => {
    console.log("Servidor  trabajando en el puerto: ",PORT)
})

//https://www.mongodb.com/home