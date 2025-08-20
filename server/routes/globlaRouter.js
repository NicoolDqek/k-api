const express=require('express')
const {buscar} = require('../controllers/GlobalController')
const router=express.Router()



router.get('/',buscar)




module.exports=router