const User= require('../models/UserSchema.js')
const bcrypt=require('bcryptjs')
const register=async(req,res)=> {


   const {email,contraseña,nombre,apellido}= req.body
   

   try {

      if (!email || !contraseña) {
       return  res.status(400).json({message:'inputs rellenos requeridos'})
      }

      const user= await User.findOne({email})






























      if (user) {
        return res.status(400).json({message:'email existe'})
      }

      const contraeñaEncriptada= await bcrypt.hash(contraseña,10)

      const nuevoUsuario= new User({email,contraseña:contraeñaEncriptada,nombre,apellido})

       const guardar = await nuevoUsuario.save()

       res.status(201).json({message:'usuario creado',guardar})

      
   } catch (error) {
               res.status(500).json({message:'error al registrarse',error})

   }
}


const login=async(req,res)=> {

const {email,contraseña}= req.body

   try {

      if (!email || !contraseña) {
       return res.status(400).json({message:'inputs rellenos requeridos',error})
      }
     

      const user = await User.findOne({email})

if (!user) {
        return res.status(400).json({message:'email existe'})
      }


      const match= await bcrypt.compare(contraseña,user.contraseña)

      if (!match) {
          return        res.status(400).json({message:'contraseña incorrecta'})
      }

      const token =  jwt.sign(
         {id: user._id,email:user.email},
         process.env.SECRET_JWT,
         {expiresIn:'1h'}
      )
res.json({ token });
      
   } catch (error) {
      
               res.status(500).json({message:'error al ingresar al a tu perfil'})

   }
}


 module.exports={register,login}