const express=require('express')
const { getIntegrante, crearIntegrante } = require('../controllers/integranteConttroller')
const router=express.Router()


router.get('/',getIntegrante)
router.post('/',crearIntegrante)

module.exports=router