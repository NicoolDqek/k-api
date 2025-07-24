
const express = require('express');
const { getAlbum, crearAlbum, getAlbumByID } = require('../controllers/albumController');
const router=express.Router()

router.get('/',getAlbum)
router.post('/',crearAlbum)
router.get('/:id',getAlbumByID)

module.exports=router