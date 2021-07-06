const Role = require("../models/role")
const Usuario = require("../models/usuario")

 
 
 const validarRol = async (rol = '' ) => {
    const existeRol = await Role.findOne({rol})
    if (!existeRol) {
        throw new Error(`El rol ${role} no esta registrado en la base de datos`)
    }
}

const validarEmail = async ( correo = '' ) => {
    console.log("data",correo);
    const existeEmail = await Usuario.findOne({correo});
     if (existeEmail) {
        throw new Error(`El email: ${correo} esta registrado en la base de datos`)
     }
}


const validarIdMongo = async ( id ) =>{
    const existeIdMongo = await Usuario.findById(id);
    if (!existeIdMongo) {
        throw new Error(`El id: ${id} no existe`)
    }
}


module.exports={
    validarRol,
    validarEmail,
    validarIdMongo
}