import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { getData } from '../controllers/axios/services'
import UrlBase from '../controllers/axios/UrlBase'
import { Navigate } from 'react-router-dom'
import axios from 'axios'



export const ContextGlobal=createContext()
function GlobalContext({children}) {

    const [albums,setAlbums]=useState([])
    const [idols,setIdols]=useState([])
    const [grupos,setGrupos]=useState([])
    const [empresa,setEmpresa]=useState([])
    const [input,setInput]=useState("")
    const [result,setResult]=useState([])


const search=async(valor)=>{

  
    try {
      const { data } = await UrlBase.get(`/search?q=${valor}`);
    setResult(data);
    } catch (error) {
        console.error('error al hacer busqueda',error)
    throw new Error('Error al buscar');
    }
}

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



const inputValor=(e)=>{
     const valor=e.target.value 
     setInput(valor)
}

  return (
    <ContextGlobal.Provider value={{albums,idols,empresa,grupos,input,result,inputValor,search}}>
      {children}
    </ContextGlobal.Provider>
  )
}

export default GlobalContext
