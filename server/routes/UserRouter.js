const express= require('express')
const { login, register } = require('../controllers/userController')
const router= express.Router()


router.get('/loguin',login)
router.post('/register',register)

module.exports= router

