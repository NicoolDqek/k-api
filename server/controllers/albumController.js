const Album = require("../models/albumSchema")
const Grupo = require("../models/grupoSchema")

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





const albumFiltros=async(req,res)=>{
    const {grupo,concepto,ordenar='asc'}=req.query

    const queries={}
     
    try {
    

        // filtro por grupo usando ref


        if (grupo) {
           const objectId= /^[a-f\d]{24}$/i.test(grupo)
           
           if( objectId){
             queries.grupo=objectId
           }else{
            const g= await Grupo.findOne({nombre:grupo})
            if (g) queries.grupo=g._id
           }
        }


        if (concepto) queries.concepto= new RegExp (concepto,'i')

             let resultado = await Album.find(queries)
      .populate("grupo", "nombre")

        if (ordenar === 'asc' || ordenar === 'desc') {
        const orden= ordenar === 'asc'? 1:-1;   
        resultado= resultado.sort((a,b)=> 
        a.titulo.localeCompare(b.titulo) * orden
        )}

        res.status(200).json(resultado)
        
        
    } catch (error) {
         res.status(500).json({
        message:"error al utilizar FiltrosAlbum",
        error:error.message
        })
    }
}

module.exports={getAlbum,crearAlbum,getAlbumByID,albumFiltros}