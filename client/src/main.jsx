
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GlobalContext from './context/GlobalContext.jsx'

createRoot(document.getElementById('root')).render(
  <GlobalContext>
  <BrowserRouter>
   <App />
  </BrowserRouter>
  </GlobalContext>
   
  
)
