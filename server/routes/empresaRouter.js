const { getEmpresa, crearEmpresa } = require("../controllers/empresaController")
const express = require('express');
const router=express.Router()


router.get('/',getEmpresa)
router.post('/',crearEmpresa)



module.exports=router