const { response, request } = require("express");



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

  const usuarioPut = (req, res)=> {

    const {id}=req.params

    res.json({
        id,
        msg:'put api - controller'
    });
  }

  const usuarioPost = (req, res)=> {

    const {nombre,edad}=req.body;

    res.json({
        name:nombre,
        age:edad,
        msg:'post api - controller'
    });
  }


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