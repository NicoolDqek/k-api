const { default: mongoose } = require("mongoose");


const empresaSchema= new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    sede:{
        type:String,
        required:false
    },
    codigo: {
    type: String,
    unique: true,    
    required: true,  
  },
    fundacion:{
        type:Date,
        required:false
    },
    subsidiaria:{
        type:(mongoose.Schema.Types.ObjectId),
        ref:'empresa',
        required:false
    }

})


const  Empresa= mongoose.model('empresa',empresaSchema)

module.exports=Empresa