const { response, request } = require("express");
let bcrypt = require('bcryptjs');

const Usuario = require('../models/usuario')


/* ============================= GET ========================================= */

 const usuariosGet= (req =request, res = response) => {

    const {q,nombre,apikey,page=1,limit} = req.query
    res.json({
        q,
        nombre,
        apikey,
        page,
        limit,
        msg:'get api - controller'
    });
  }

  /* ============================= PUT ========================================= */

  const usuarioPut = (req, res)=> {

    const {id}=req.params

    res.json({
        id,
        msg:'put api - controller'
    });
  }

  /* ============================== POST ======================================== */

  const usuarioPost = async (req, res)=> {
    
    const {nombre, correo, password,rol}=req.body;
    const usuario = new Usuario({nombre,correo,password,rol})

    //Verificar si el correo existe
     const existeEmail = await Usuario.findOne({correo});
     if (existeEmail) {
       return res.status(400).json({
         msg:'Ese correo ya esta registrado'
       });
     }


    //ENCRIPTAR PASSWORD
    const sal= bcrypt.genSaltSync(); //dentro del parentesis un number que seria el tamano del hash por defecto tiene 10
    usuario.password=bcrypt.hashSync( password, sal)

    await usuario.save()
    
    res.json({
      usuario
    })
  }

  /* ========================== DELETE ============================================ */

  const usuarioDelete = (req, res)=> {
    const {id} = req.params
    res.json({
        id,
        msg:'delete api - controller'
    });
  }


module.exports={
    usuariosGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete
}