const express = require('express');
const conectBd = require('./config/bd'); 
require('dotenv').config();
const  grupoRouter= require('./routes/grupoRouter'); 
const  empresaRouter= require('./routes/empresaRouter'); 
const  integranteRouter= require('./routes/integranteRouter'); 
const  fandomRouter= require('./routes/fandomRouter'); 
const  subUnidadRouter= require('./routes/subUnidadRouter'); 
const  albumRouter= require('./routes/albumRouter'); 
const  cancionRouter= require('./routes/cancionRouter');
const  globalSearchRouter= require('./routes/globlaRouter');
 
 
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

 
conectBd();
app.use(express.json());

app.use('/grupo',grupoRouter)
app.use('/empresa',empresaRouter)
app.use('/integrante',integranteRouter)
app.use('/fandom',fandomRouter)
app.use('/subUnidad',subUnidadRouter)
app.use('/album',albumRouter)
app.use('/cancion',cancionRouter)
app.use('/search',globalSearchRouter)

  

app.get('/', (req,res) => {
  res.send('API KPOP funcionando 🎤');
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en http://0.0.0.0:${PORT}`);
});