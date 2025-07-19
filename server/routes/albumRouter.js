
const express = require('express');
const { getAlbum, crearAlbum } = require('../controllers/albumController');
const router=express.Router()

router.get('/',getAlbum)
router.post('/',crearAlbum)

module.exports=router