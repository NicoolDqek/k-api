const Grupo = require("../models/grupoSchema")



const getGrupo=async(req,res)=>{
    try {
        const grupo = await Grupo.find().populate('fandom').populate('empresa')
        res.status(200).json(grupo)
    } catch (error) {
         res.status(500).json({ error: 'Error al obtener grupos' })
    }
}

const crearGrupo=async(req,res)=>{

    try {
        const {nombre,debut,codigo,empresa,generacion,concepto,descripcion,miembros,activo,subUnidades,fandom,img_principal,img_gallery,video_gallery}=req.body

        const nuevoGrupo= new Grupo({
           nombre,
           codigo,
           debut,
           empresa,
           generacion,
           concepto,
           descripcion,
           miembros,
           activo,
           subUnidades,
           fandom,
           img_principal,
           img_gallery,
           video_gallery
        })

        const guardar= await nuevoGrupo.save()

        res.status(201).json(guardar)

    } catch (error) {
          res.status(500).json({ error: 'Error al crear grupo',error })
    }
}

const getGrupoByID=async(req,res)=>{
    try {
        const {id}=req.params
        const grupo= await Grupo.findById(id).populate('fandom').populate('empresa')
         if (!grupo) {
      return res.status(404).json({ message: "grupo no encontrado" });
    }
        res.status(200).json(grupo)

    } catch (error) {
        res.status(500).json({
        message:"error al utilizar getbyidGrupo",
        error:error.message
        })
    }
}

module.exports={getGrupo,crearGrupo,getGrupoByID}