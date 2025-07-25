import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getData } from '../controllers/axios/services'



export const ContextGlobal=createContext()
function GlobalContext({children}) {

    const [albums,setAlbums]=useState([])
    const [idols,setIdols]=useState([])
    const [grupos,setGrupos]=useState([])
    const [empresa,setEmpresa]=useState([])



    useEffect(() => {
    getData('album')
    .then(data=>setAlbums(data))
    .catch(err=>console.log("error al trae albums",err))
    }, [albums])

    useEffect(() => {
    getData('integrante')
    .then(data=>setIdols(data))
    .catch(err=>console.log("error al traer artistas",err))
    }, [idols])

        useEffect(() => {
    getData('grupo')
    .then(data=>setGrupos(data))
    .catch(err=>console.log("error al traer grupos",err))
    }, [grupos])

        useEffect(() => {
    getData('empresa')
    .then(data=>setEmpresa(data))
    .catch(err=>console.log("error al trae empresas",err))
    }, [empresa])

  return (
    <ContextGlobal.Provider value={{albums,idols,empresa,grupos}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default GlobalContext
