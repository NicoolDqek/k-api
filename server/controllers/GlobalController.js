 const Integrante=require('../models/integranteSchema')
 const Album=require('../models/albumSchema')



const buscar=async(req,res)=>{
try {
    const {q} = req.query

    const reget= new RegExp(q,'i')
    const idols= await Integrante.find({nombre:reget})
    const albums= await Album.find({titulo:reget})

    res.status(200).json({idols,albums})
   

} catch (error) {
    res.status(500).json({message:'error al obtener data filtro', error:error.message})
}


}

module.exports= buscar