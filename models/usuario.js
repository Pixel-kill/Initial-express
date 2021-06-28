const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    nombre:{
        type:String,
        required:[true, 'El nombre es obligatorio']
    },
    correo:{
        type:String,
        required:[true, 'El correo es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        required:[true, 'El contrasena es obligatorio'],
    },
    img:{
        type:String,
    },
    rol:{
        type:String,
        required:true,
        enum:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
        default:true,
    },
    google:{
        type:Boolean,
        default:false
    }
});

//Exportamos como modelo con nombre Usuario
module.exports= model('Usuario', UsuarioSchema);