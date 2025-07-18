const { default: mongoose } = require("mongoose")
require('dotenv').config()



const conectBd=async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URI)
      console.log("conexion exitosa 🤩")  
    } catch (error) {
       console.error('error en la conexion',error) 
    }
}

module.exports=conectBd