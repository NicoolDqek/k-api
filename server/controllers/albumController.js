const Album = require("../models/albumSchema")

const getAlbum=async(req,res)=>{
    try {
        const album= await Album.find().populate('grupo')
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


const getAlbumByID=async(req,res)=>{
    try {
        const {id}=req.params
        const album= await Album.findById(id).populate('grupo')
         if (!album) {
      return res.status(404).json({ message: "Álbum no encontrado" });
    }
        res.status(200).json(album)

    } catch (error) {
        res.status(500).json({
        message:"error al utilizar getbyidalbum",
        error:error.message
        })
    }
}


const getfiltros=async(req,res)=>{
    try {
        const { grupo, tipo, generacion } = req.query;
        const filtros={}

    if (grupo) filtros.grupo=grupo
    if(tipo) filtros.tipo=tipo
    if (generacion) filtros.generacion = generacion;

    const data = await Album.find(filtros).populate('grupo');

    res.status(200).json(data);
    } catch (error) {
         res.status(500).json({
        message:"error al utilizar getFiltros",
        error:error.message
        })
    }
}


module.exports={getAlbum,crearAlbum,getAlbumByID}