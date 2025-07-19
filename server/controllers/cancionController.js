
const Cancion = require("../models/cancionSchema")

const getCancion=async(req,res)=>{
    try {
        const cancion= await Cancion.find()
        res.status(200).json(cancion)
    } catch (error) {
         res.status(500).json({error:'error al traer cancion',error})

    }

}

const crearCancion=async(req,res)=>{
    try {
        const {titulo,codigo,grupo,lanzamiento,album,genero,descripcion,productor,escritor,img_principal,img_galery,video_galery,subUnidad}=req.body

        const nuevoAlbum= new Cancion({
           titulo,codigo,grupo,lanzamiento,album,genero,descripcion,productor,escritor,img_principal,img_galery,video_galery,subUnidad})

        const nueva= await nuevoAlbum.save()

        res.status(201).json(nueva)
    } catch (error) {
        res.status(500).json({error:'error el crear cancion',error})
    }
}


module.exports={getCancion,crearCancion}