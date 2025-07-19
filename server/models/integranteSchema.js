const { default: mongoose } = require("mongoose");



const integranteSchema= new mongoose.Schema({
nombre:{
        type:String,
        required:true,
},
codigo: {
    type: String,
    unique: true,    
    required: true,  
  },

nacimiento:{
    type:Date,
},
nacionalidad:{
type:String

},
grupo:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'grupo'
},
empresa:{
type:(mongoose.Schema.Types.ObjectId),
ref:'empresa'
},rol:[ String,],
edad:{
 type:Number,
 min:1
},
descripcion:{
type:String,

},
activo:{
type:Boolean,
required:true
},
img_principal:{
    type:String,
},
img_gallery:[{
    type:String
}],
subUnidad:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'subunidad'
    
},
fandom:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'fandom'
}

});

const Integrante= mongoose.model('integrante', integranteSchema);
module.exports=Integrante