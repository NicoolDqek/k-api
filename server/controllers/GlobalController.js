 const Integrante=require('../models/integranteSchema')
 const Album=require('../models/albumSchema')
  const Grupo=require('../models/grupoSchema')
const Empresa = require('../models/empresaSchema')
  



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




 module.exports= {buscar}




















// const filtros = async (req, res) => {
 

//     const {empresa,grupo,gen,sortBy='nombre',orden='asc',nombre_like}=req.query
//     const queries={}
//     const ordenSort=orden==='asc'? 1 : -1;
   

//   try {
//     if (empresa) queries.empresa= await Empresa.find({nombre:empresa})
//     if (grupo) queries.grupo= await Grupo.find({nombre:grupo})
//     if (gen ) queries.generacion=Number(gen)
//     if (nombre_like) queries.nombre = new RegExp(nombre_like, 'i');


//     if(sortBy) queries.SortByGrupo= await Grupo.find(queries).sort({[sortBy]:ordenSort})
//     if(sortBy) queries.SortByIntegrante= await Integrante.find(queries).sort({[sortBy]:ordenSort})
    
//     res.status(200).json(queries)
//     } catch (error) {
//     res.status(500).json({message:'error: ', error:error.message})
    
//   }
// };



// const filtros = async (req, res) => {
//   const { section, empresa, grupo, generacion, sortBy='nombre', orden='asc' } = req.query;
//   const ordenSort = orden === 'asc' ? 1 : -1;

//   try {
//     let result = [];

//     switch(section) {
//       case 'albums':
//         const albumQuery = {};
//         if(empresa) albumQuery.empresa = empresa;
//         if(grupo) albumQuery.grupo = grupo;
//         if(generacion) albumQuery.generacion = Number(generacion);
//         result = await Album.find(albumQuery).sort({[sortBy]: ordenSort});
//         break;

//       case 'grupos':
//         const grupoQuery = {};
//         if(empresa) grupoQuery.empresa = empresa;
//         if(generacion) grupoQuery.generacion = Number(generacion);
//         if(grupo) grupoQuery.nombre = grupo;
//         result = await Grupo.find(grupoQuery).sort({[sortBy]: ordenSort});
//         break;

//       case 'idols':
//         const idolQuery = {};
//         if(empresa) idolQuery.empresa = empresa;
//         if(grupo) idolQuery.grupo = grupo;
//         result = await Integrante.find(idolQuery).sort({[sortBy]: ordenSort});
//         break;

//       default:
//         result = [];
//     }

//     res.status(200).json(result);

//   } catch (error) {
//     res.status(500).json({message: 'Error', error: error.message});
//   }
// };









// const ciudadBuscar=async(city)=>{
//       return ciudad.find({ciudad:city})
// }


// const controllerCiudad=async(req,res)=>{
//     const {city}=req.query
//     if(!city){
//     return res.status(400).json('error en busqueda ciudad no tiene valor')
//    }

// try {
//    {const resultado= await ciudadBuscar(city)
//     res.status(200).json(resultado)
    
//    }      
//     } catch (error) {
//     res.status(500).json({mesage:'error controller ciudad',error:error.mesage})
        
//     }
// }


// const booleano=async(boleano)=>{
//       return ciudad.find({activo:boleano})
// }


// const controllerBooleano=async(req,res)=>{
//     const {bolean}=req.query
//     if(!bolean){
//     return res.status(400).json('error valor de activo')
//    }

// try {
//    {const resultado= await booleano(bolean)
//     res.status(200).json(resultado)
    
//    }      
//     } catch (error) {
//     res.status(500).json({mesage:'error controller estado',error:error.mesage})
        
//     }
// }

// const busquedaParcial=async(texto)=>{

//     const regexp= new RegExp(texto,'i')
//     const resultado= await Producto.find({nombre:regexp})
//       return  resultado
// }


// const controllerBusqueda=async(req,res)=>{
//     const {valor}=req.query
//     if(valor === undefined ||valor.trim() === " "){
//     return res.status(400).json('input vacio o sin valor ')
//    }

// try {
//    {const resultado= await busquedaParcial(valor.trim())
//     res.status(200).json(resultado)
    
//    }      
//     } catch (error) {
//     res.status(500).json({message:'error controller de busqueda',error:error.message})
        
//     }
// }





// const filtrosCombinados=async(ciudad,estado)=>{
// const filtros={}
//     filtros.ciudad= await Producto.find({nombre:ciudad})
//     filtros.estado= await Producto.find({nombre:estado})
//       return  filtros
// }


// const controllerfiltros=async(req,res)=>{
//     const {filter}=req.query
//     if(filter === undefined){
//     return res.status(400).json('input vacio o sin valor ')
//    }

// try {
//    {const resultado= await filtrosCombinados(filter)
//     res.status(200).json(resultado)
    
//    }      
//     } catch (error) {
//     res.status(500).json({message:'error controller de filtro',error:error.message})
        
//     }
// }



// const servicio1=async(city)=>{
//       return Producto.find({ciudad:city})
// }


// const controller1=async(req,res)=>{
//     const {ciudad}=req.query

//     if(ciudad === undefined || ciudad.trim() === ""){
//         res.status(400).json({'input vacio ingrese valor valido'})
//     }
//     try {
//         const resultado= await servicio1(ciudad.trim())
//         res.status(200).json(resultado)

//     } catch (error) {
//         res.status(500).json({message:'error en obtener ciudad',error:error.mesage})
        
//     }
// }




// const servicio2=async(estado)=>{
//     return Producto.find({activo:estado})
// }


// const controller2=async(req,res)=>{
//     const {estado}=req.query
//     try {
//         const resultado= await servicio2(Boolean(estado))
//         res.status(200).json(resultado)
        
//     } catch (error) {
//         res.status(500).json({message:'error en obtener estado de producto',error:error.mesage})
        
//     }

// }



// const servicio3=async(paabra)=>{
      
// }


// const controller3=async(req,res)=>{
//     const {ciudad}=req.query

//     if(ciudad === undefined || ciudad.trim() === ""){
//         res.status(400).json({'input vacio ingrese valor valido'})
//     }
//     try {
//         const resultado= await servicio1(ciudad.trim())
//         res.status(200).json(resultado)

//     } catch (error) {
//         res.status(500).json({message:'error en obtener ciudad',error:error.mesage})
        
//     }
// }

