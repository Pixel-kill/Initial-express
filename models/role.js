const {Schema, model} = require('mongoose');

const RolesShema = Schema({
    rol:{
        type:String,
        require:[ true, 'El rol es obligatorio']
    }

});


module.exports=model('Role', RolesShema)