const express=require('express')
const { getIntegrante, crearIntegrante, getIntegranteByID, filtrosIntegrante } = require('../controllers/integranteConttroller')
const router=express.Router()

router.get('/filtros',filtrosIntegrante)
router.get('/',getIntegrante)
router.post('/',crearIntegrante)
router.get('/:id',getIntegranteByID)

module.exports=router