const { default: mongoose } = require("mongoose");



const grupoSchema= new mongoose.Schema({
nombre:{
        type:String,
        required:true,
},
debut:{
type:Date
},
codigo: {
    type: String,
    unique: true,    
    required: true,  
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
required:true
},
subUnidades:[{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'subunidad'
    
}],
fandom:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'fandom'
}

});

const Grupo= mongoose.model('grupo',grupoSchema);
module.exports=Grupo