const { validationResult } = require("express-validator");

const validarCampos = ( req , res , next) =>{

    const errors = validationResult(req);

    console.log(errors);

    if(!errors.isEmpty()){
        return res.status(400).json( errors)
    }

    //si todo esta bien seguida a la siguiente check de las validaciones que estan en el route
    next();
}



module.exports={
    validarCampos
}