
const express = require('express');
const { getAlbum, crearAlbum, getAlbumByID, albumFiltros } = require('../controllers/albumController');
const router=express.Router()
router.get('/filtros',albumFiltros)
router.get('/',getAlbum)
router.get('/:id',getAlbumByID)
router.post('/',crearAlbum)


module.exports=router