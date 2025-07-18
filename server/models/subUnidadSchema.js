const { default: mongoose } = require("mongoose");



const  subUnidadSchema= new mongoose.Schema({
nombre:{
        type:String,
        required:true,
},

grupo:{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'grupo'
},
debut:{
type:Date,
},

album:{
type:(mongoose.Schema.Types.ObjectId),
ref:'album'
},
rol:[String,
],

descripcion:{
type:String,
},
integrantes:[{
type:(mongoose.Schema.Types.ObjectId),
ref:'integrante'
}],
canciones:[{
    type:(mongoose.Schema.Types.ObjectId),
    ref:'cancion'
}],

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

const SubUnidad= mongoose.model('subunidad', subUnidadSchema);
module.exports=SubUnidad