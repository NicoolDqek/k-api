const Grupo = require("../models/grupoSchema")



const getGrupo=async(req,res)=>{
    try {
        const grupo = await Grupo.find()
        res.status(200).json(grupo)
    } catch (error) {
         res.status(500).json({ error: 'Error al obtener grupos' })
    }
}

const crearGrupo=async(req,res)=>{

    try {
        const {nombre,debut,empresa,generacion,concepto,descripcion,miembros,activo,subUnidades,fandom}=req.body

        const nuevoGrupo= new Grupo({
           nombre,
           debut,
           empresa,
           generacion,
           concepto,
           descripcion,
           miembros,
           activo,
           subUnidades,
           fandom 
        })

        const guardar= await nuevoGrupo.save()

        res.status(201).json(guardar)

    } catch (error) {
          res.status(500).json({ error: 'Error al crear grupo' })
    }
}


module.exports={getGrupo,crearGrupo}