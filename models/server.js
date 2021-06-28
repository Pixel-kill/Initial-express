const express = require('express')
var cors = require('cors');
const { dbConnection } = require('../database/config');


class Server{

    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.usuariosPath='/api/usuarios'

        //Cnectar a base de datos
        this.conectarDB();
      
        //middlewards
        this.middlewars();

        //rutas
        this.routes();

    }

    middlewars(){

        //lectura y parseo de body
        this.app.use(express.json());
        
        //cors
        this.app.use(cors());
        
        //Directorio publico
        this.app.use(express.static('public'));
    }

    async conectarDB(){
        await dbConnection()
    }

    routes(){

        this.app.use('/api/usuarios', require('../routes/usuario'))

    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo en el server: ', this.port);
        })
    }
}

module.exports=Server;