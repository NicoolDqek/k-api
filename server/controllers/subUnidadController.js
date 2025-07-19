const SubUnidad = require("../models/subUnidadSchema")

const getSubUnidad=async(req,res)=>{
      try {
        const sub= await SubUnidad.find()
        res.status(200).json(sub)
      } catch (error) {
        res.status(500).json({error:'error al traer sub unidad',error})
      }
}


const crearsubUnidad=async(req,res)=>{
    try {
        const {nombre,grupo,codigo,debut,album,rol,descripcion,integrante,canciones,img_principal,img_galery,video_galery}=req.body

        const nuevaSub= new SubUnidad({
           nombre,codigo,grupo,debut,album,rol,descripcion,integrante,canciones,img_principal,img_galery,video_galery 
        })

        const guardar= await nuevaSub.save()

        res.status(201).json(guardar)
    } catch (error) {
        res.status(500).json({error:'error al crear subUnidad',error})
    }
}

module.exports={getSubUnidad,crearsubUnidad}