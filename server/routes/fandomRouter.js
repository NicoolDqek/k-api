const express = require('express');
const { getFamdon, crearFandom } = require('../controllers/fandomController')
const router=express.Router()


router.get('/',getFamdon)
router.post('/',crearFandom)


module.exports=router