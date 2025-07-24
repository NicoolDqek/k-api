const { default: mongoose } = require("mongoose");



const grupoSchema= new mongoose.Schema({
nombre:{
        type:String,
        
},
debut:{
type:Date
},
codigo: {
    type: String,
    unique: true,    
      
  },
empresa:{
type:(mongoose.Schema.Types.ObjectId),
ref:'empresa'
},
generacion:{
type:Number,
min:1,
max:5,
},
concepto:{
 type:String,
},
descripcion:{
type:String,

},miembros: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'integrante',
  }
],
activo:{
type:Boolean,

},
subUnidades:[{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'subunidad'
    
}],
fandom:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'fandom',
    required:false,
    default: null,
},
img_principal:{
    type:String,
},
img_galery:[String],
video_galery:[String]


});

const Grupo= mongoose.model('grupo',grupoSchema);
module.exports=Grupo