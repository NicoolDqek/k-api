import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getAlbum } from '../controllers/axios/services'



export const ContextGlobal=createContext()
function GlobalContext({children}) {

    const [albums,setAlbums]=useState([])
    
    useEffect(() => {
    getAlbum()
    .then(data=>{setAlbums(data)
       
    })
    .catch(err=>console.log("error al trae albuums",err))
    }, [])



  return (
    <ContextGlobal.Provider value={{albums}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default GlobalContext
