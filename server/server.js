const express = require('express');
const conectBd = require('./config/bd'); 
require('dotenv').config();
const  grupoRouter= require('./routes/grupoRouter'); 
const  empresaRouter= require('./routes/empresaRouter'); 
const  integranteRouter= require('./routes/integranteRouter'); 

const app = express();
const PORT = process.env.PORT || 3000;

 
conectBd();
app.use(express.json());

app.use('/grupo',grupoRouter)
app.use('/empresa',empresaRouter)
app.use('/integrante',integranteRouter)

app.get('/', (req, res) => {
  res.send('API KPOP funcionando 🎤');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
