const { Router } = require("express");
const { check } = require("express-validator");
const { usuariosGet,
        usuarioPut, 
        usuarioPost,
        usuarioDelete } = require("../controllers/usuario");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();


router.get('/', usuariosGet)


router.put('/:id', usuarioPut )



router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','EL password debe de ser mas de 6 letras').isLength(6),
    check('correo', 'El correo no es valido').isEmail(),
    check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']),
    validarCampos
] , usuarioPost )


router.delete('/:id', usuarioDelete)


module.exports=router;
  
        
          