const { getGrupo, crearGrupo } = require("../controllers/grupoControllador")
const express = require('express');
const router=express.Router()

router.get('/',getGrupo)
router.post('/',crearGrupo)

module.exports=router


