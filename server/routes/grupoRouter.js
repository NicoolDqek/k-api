const { getGrupo, crearGrupo, getGrupoByID } = require("../controllers/grupoControllador")
const express = require('express');
const router=express.Router()

router.get('/',getGrupo)
router.post('/',crearGrupo)
router.get('/:id',getGrupoByID)

module.exports=router


