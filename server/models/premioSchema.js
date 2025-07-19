const { default: mongoose } = require("mongoose");



const  cancionSchema= new mongoose.Schema({
titulo:{
        type:String,
        required:true,
},
codigo: {
    type: String,
    unique: true,    
    required: true,  
  },

grupo:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'grupo'
},
lanzamiento:{
type:Date,
},

album:{
type:(mongoose.Schema.Types.ObjectId),
ref:'album'
},
genero:{
      type:String,
},

descripcion:{
type:String,
},
productor:{
    type:String
},
 escritor:{
    type:String
},
img_principal:{
    type:String,
},
img_galery:[{
    type:String
}],
video_galery:[{
    type:String
}]

});

const Cancion= mongoose.model('cancion', cancionSchema);
module.exports=Cancion