const { Router } = require("express");
const { check } = require("express-validator");
const { usuariosGet,
        usuarioPut, 
        usuarioPost,
        usuarioDelete } = require("../controllers/usuario");
const { validarEmail, validarIdMongo, validarRol } = require("../helpers/db_validators");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();


router.get('/', usuariosGet)


router.put('/:id',[
    check('id','No es id valido ').isMongoId(), //Para saber si es un id mongo 
    check('id').custom(id => validarIdMongo(id)),
    check('rol').custom(rol => validarRol(rol)),
    validarCampos
], usuarioPut )



router.post('/',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','EL password debe de ser mas de 6 letras').isLength(6),
    /* check('correo', 'El correo no es valido').isEmail(), */
    check('correo').custom(correo => validarEmail(correo)),
    /* check('rol','No es un rol valido').isIn(['ADMIN_ROLE','USER_ROLE']), */
    check('rol').custom( rol => validarRol(rol)),
    validarCampos
] , usuarioPost )


router.delete('/:id', usuarioDelete)


module.exports=router;
  
        
          