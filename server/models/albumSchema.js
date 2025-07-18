const { default: mongoose } = require("mongoose");



const  albumSchema= new mongoose.Schema({
titulo:{
        type:String,
        required:true,
},

grupo:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'grupo'
},
lanzamiento:{
type:Date,
},
tipo:{
      type:String,
},
canciones:[{
 type:(mongoose.Schema.Types.ObjectId),
 ref:'cancion'
}],
descripcion:{
type:String,
},
concepto:{
    type:String
},
 
img_principal:{
    type:String,
},
img_galery:[String],
video_galery:[String]

});

const Album= mongoose.model('album', albumSchema);
module.exports=Album