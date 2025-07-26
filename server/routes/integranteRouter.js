const express=require('express')
const { getIntegrante, crearIntegrante } = require('../controllers/integranteConttroller')
const { getIntegranteById } = require('../../client/src/controllers/axios/services')
const router=express.Router()


router.get('/',getIntegrante)
router.post('/',crearIntegrante)
router.post('/:id',getIntegranteById)

module.exports=router