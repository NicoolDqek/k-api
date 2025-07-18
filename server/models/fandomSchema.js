const { default: mongoose } = require("mongoose");



const  fandomSchema= new mongoose.Schema({
nombre:{
        type:String,
        required:true,
},

grupo:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'grupo'
},
creacion:{
type:Date,
},
 
descripcion:{
type:String,
},
lema:{
    type:String
},
 lightStick:{
    type:String 
},
lightStick_img:{
type:[String]
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

const Fandom= mongoose.model('fandom', fandomSchema);
module.exports=Fandom