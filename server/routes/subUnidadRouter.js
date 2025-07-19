const express=require('express')
const { getSubUnidad, crearsubUnidad } = require('../controllers/subUnidadController')
const router=express.Router()



router.get('/',getSubUnidad)
router.post('/',crearsubUnidad)


module.exports=router