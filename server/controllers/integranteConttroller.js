const Integrante = require("../models/integranteSchema")


const getIntegrante=async(req,res)=>{
    try {
        const integrante= await Integrante.find()

        res.status(200).json(integrante)
    } catch (error) {
        res.status(500).json({error:'error al traer integrantes o artistas'})
    }
}

const crearIntegrante=async(req,res)=>{
    try {
        const {nombre,codigo,nacimiento,nacionalidad,grupo,empresa,rol,edad,descripcion,activo,img_principal,img_gallery,subUnidad,fandom}=req.body
        
const nuevoIntegrante= new Integrante({
    nombre,codigo,nacimiento,nacionalidad,grupo,empresa,rol,edad,descripcion,activo,img_principal,img_gallery,subUnidad,fandom
})
const guardar= await nuevoIntegrante.save()
res.status(201).json(guardar)
    } catch (error) {
        res.status(500).json({error:'error al crear nuevo integrante',error})
    }
}


const getIntegranteByID=async(req,res)=>{
    try {
        const {id}=req.params
        const integrante= await Integrante.findById(id).populate('grupo').populate('empresa')
         if (!integrante) {
      return res.status(404).json({ message: "integrante no encontrado" });
    }
        res.status(200).json(integrante)

    } catch (error) {
        res.status(500).json({
        message:"error al utilizar getbyidIntegrante",
        error:error.message
        })
    }
}

module.exports={getIntegrante,crearIntegrante,getIntegrante}