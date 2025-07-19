const Album = require("../models/albumSchema")

const getAlbum=async(req,res)=>{
    try {
        const album= await Album.find()
        res.status(200).json(album)
    } catch (error) {
         res.status(500).json({error:'error al traer album',error})

    }

}

const crearAlbum=async(req,res)=>{
    try {
        const {titulo,grupo,codigo,lanzamiento,tipo,canciones,descripcion,concepto,img_principal,img_galery}=req.body

        const nuevoAlbum= new Album({
           titulo,grupo,lanzamiento,codigo,tipo,canciones,descripcion,concepto,img_principal,img_galery 
        })

        const nueva= await nuevoAlbum.save()

        res.status(201).json(nueva)
    } catch (error) {
        res.status(500).json({error:'error el crear album',error})
    }
}


module.exports={getAlbum,crearAlbum}