const Integrante = require("../models/integranteSchema")
const Empresa = require("../models/empresaSchema")


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
        const integrante= await Integrante.findById(id).populate({
    path: 'grupo',
    populate: {
      path: 'miembros'
    }
  }).populate('empresa') 
         if (!integrante) {
      return res.status(404).json({ message: "integrante no encontrado" });
    }
        res.status(200).json(integrante)

    } catch (error) {
        res.status(500).json({
        message:"error al utilizar getbyidIntegranteID",
        error:error.message
        })
    }
}




const filtrosIntegrante=async(req,res)=>{

    const {empresa,generacion}=req.query
    const queries= {}

    try {
       
       
    if(empresa) {
        const isObjectId= /^[a-f\d]{24}$/i.test(empresa);

        if(isObjectId){
          queries.empresa = empresa
        }else{
            const em = await Empresa.findOne({nombre:empresa.trim()})
            if (em) queries.empresa= em._id
        }
    }

    if(generacion) queries.generacion= Number(generacion)

    const resultado = await Integrante.find(queries).populate('empresa','nombre')
        res.status(200).json(resultado )

    } catch (error) {
        res.status(500).json({
        message:"error al utilizar filtros de INtegrante",
        error:error.message
        })
    }
}

module.exports={getIntegrante,crearIntegrante,getIntegranteByID,filtrosIntegrante}