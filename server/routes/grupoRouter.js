const { getGrupo, crearGrupo, getGrupoByID, grupoFilter, grupoPaginacion } = require("../controllers/grupoControllador")
const express = require('express');
const router=express.Router()

router.get('/',getGrupo)
router.post('/',crearGrupo)
router.get('/filtros',grupoFilter)
router.get('/paginacion',grupoPaginacion)
router.get('/:id',getGrupoByID)

module.exports=router


