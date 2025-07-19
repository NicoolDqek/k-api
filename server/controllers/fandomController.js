const Fandom = require("../models/fandomSchema")

const getFamdon=async(req,res)=>{
    try {
       const fandom= await Fandom.find().populate('grupo', 'nombre debut empresa')

       res.status(200).json(fandom)
    } catch (error) {
        res.status(500).json({error:'error al traer fandom',error})
    }
}

const crearFandom=async(req,res)=>{
    try {
        const {nombre,grupo,codigo,creacion,descripcion,lema,lightStick,lightStick_img,img_principal,img_galery,video_gallery}=req.body

        const nuevoFandom= new Fandom({
            nombre,codigo,grupo,creacion,descripcion,lema,lightStick,lightStick_img,img_principal,img_galery,video_gallery
        })

        const guardar= await nuevoFandom.save()

        res.status(201).json(guardar)

    } catch (error) {
        res.status(500).json({error:'error al crear fandom',error})
        
    }
}

module.exports={getFamdon,crearFandom}



