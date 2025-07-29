import UrlBase from './UrlBase.js'; 





export const getData=async(ruta)=>{
try {
    const res= await UrlBase.get(`/${ruta}`)
    const modelo= res.data.map((prev)=>({...prev,p:ruta}))
    return modelo
} catch (error) {
    console.error('error al traer la data',error)
    throw Error
}
}




export const getAlbumById=async(id)=>{
try {
    const res= await UrlBase.get(`/album/${id}`)
    return res.data
} catch (error) {
    console.error('error al traer la data de albums',error)
    throw new Error('Error al traer álbum');
}
}

export const getGrupoById=async(id)=>{
try {
    const res= await UrlBase.get(`/grupo/${id}`)
    return res.data
} catch (error) {
    console.error('error al traer la data del grupo',error)
    throw new Error('Error al traer grupo');
}
}

export const getIntegranteById=async(id)=>{
try {
    const res= await UrlBase.get(`/integrante/${id}`)
    return res.data
} catch (error) {
    console.error('error al traer la data del idol',error)
    throw new Error('Error al traer integrante');
}
}


