const { Router } = require("express");
const { usuariosGet,
        usuarioPut, 
        usuarioPost,
        usuarioDelete } = require("../controllers/usuario");

const router = Router();


router.get('/', usuariosGet)


router.put('/:id', usuarioPut )


router.post('/', usuarioPost )


router.delete('/:id', usuarioDelete)


module.exports=router;
  
        
          