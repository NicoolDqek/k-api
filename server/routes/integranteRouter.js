const express=require('express')
const { getIntegrante, crearIntegrante, getIntegranteByID } = require('../controllers/integranteConttroller')
const router=express.Router()


router.get('/',getIntegrante)
router.post('/',crearIntegrante)
router.get('/:id',getIntegranteByID)

module.exports=router