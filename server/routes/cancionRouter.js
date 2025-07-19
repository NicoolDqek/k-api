const express = require('express');
const { getCancion, crearCancion } = require('../controllers/cancionController');
const router=express.Router()

router.get('/',getCancion)
router.post('/',crearCancion)

module.exports=router
