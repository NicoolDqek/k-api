import UrlBase from "./UrlBase"



export const getAlbum=async()=>{
try {
    const res= await UrlBase.get('/album')
    return res.data
} catch (error) {
    console.error('error al traer la data de albums',error)
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