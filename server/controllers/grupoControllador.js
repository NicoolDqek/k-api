const Grupo = require("../models/grupoSchema")
const Empresa = require("../models/empresaSchema")
const Album = require("../models/albumSchema")



const getGrupo=async(req,res)=>{
    try {
        const grupo = await Grupo.find().populate('fandom').populate('empresa').populate('miembros')
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
        const grupo= await Grupo.findById(id).populate('fandom').populate('empresa').populate('miembros')
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




const grupoFilter = async (req, res) => {
    const { empresa, generacion } = req.query;
    const queries = {};

    try {
        if (empresa) {
            const isObjectId = /^[a-f\d]{24}$/i.test(empresa);

            if (isObjectId) {
                queries.empresa = empresa;
            } else {
        const em = await Empresa.findOne({ nombre: empresa.trim() });
                if (!em) return res.status(404).json({ message: "Empresa no encontrada",em});
                queries.empresa = em._id;
            }
        }

        if (generacion) queries.generacion = Number(generacion);

        const resultado = await Grupo.find(queries).populate('empresa', 'nombre');
        res.status(200).json(resultado);

    } catch (error) {
        res.status(500).json({
            message: "Error al utilizar filtros de grupo",
            error: error.message
        });
    }
};


const grupoPaginacion = async(req,res)=>{

    let {pagina, limit}=req.query
    pagina= parseInt(pagina) || 1
    limit=parseInt(limit) || 6
    const skip = (pagina - 1) * limit

    const [grupos,total]= await Promise.all([
        Grupo.find().skip(skip).limit(limit),
        Grupo.countDocuments()
    ])

    res.status(200).json({
        data:grupos,
        pagina,
        total,
        totalPaginas:Math.ceil(total/limit)
    })
    try {
        
    } catch (error) {
        res.status(500).json({error:'error paginacioin grupo'})
        
    }
}

module.exports={getGrupo,crearGrupo,getGrupoByID,grupoFilter,grupoPaginacion}