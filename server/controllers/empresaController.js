const Empresa = require("../models/empresaSchema")

const getEmpresa=async(req,res)=>{
    try {
       const empresa= await Empresa.find()

       res.status(200).json(empresa)
    } catch (error) {
        res.status(500).json({error:'error al traer empresas'})
    }
}


const crearEmpresa= async(req,res)=>{
    try {
        const {nombre,codigo,sede,fundacion,subsidiaria} =req.body

        const nuevaEmpresa= new Empresa({
         nombre,
         codigo,
         sede,
         fundacion,
         subsidiaria  
        })

        const guardar=await nuevaEmpresa.save()

        res.status(201).json(guardar)
    } catch (error) {
        res.status(500).json({error:'error al crear empresa'})
    }
}

module.exports={getEmpresa,crearEmpresa}