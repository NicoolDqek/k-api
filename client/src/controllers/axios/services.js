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


export const filtrosAlbums= async ({ grupo,concepto,ordenar }) => {
  try {
    const params = {};
     
   if (grupo) params.grupo = grupo;
    if (concepto) params.concepto = concepto;
    if (ordenar) params.ordenar = ordenar; 

    const res = await UrlBase.get('/album/filtros', { params});
    const modelo= res.data.map((prev)=>({...prev,p:'album'}))

    return modelo;
  } catch (error) {
    console.error('Error en filtrosAlbum', error);
    throw error;
  }
};


export const filtrosGrupos= async ({ empresa,generacion }) => {
  try {
    const params = {};
     
   if (empresa) params.empresa = empresa;
    if (generacion) params.generacion = generacion;
     

    const res = await UrlBase.get('/grupo/filtros', { params});
    const modelo= res.data.map((prev)=>({...prev,p:'grupo'}))

    return modelo;
  } catch (error) {
    console.error('Error en filtrosGrupo', error);
    throw error;
  }
};


export const filtrosIdols= async ({ empresa,generacion }) => {
  try {
    const params = {};
     
   if (empresa) params.empresa = empresa;
    if (generacion) params.generacion = generacion;
     

    const res = await UrlBase.get('/integrante/filtros', { params});
    const modelo= res.data.map((prev)=>({...prev,p:'integrante'}))

    return modelo;
  } catch (error) {
    console.error('Error en filtrosGrupo', error);
    throw error;
  }
};



// export const filtrosAllPage = async ({ empresa, grupo, orden, sortBy, generacion }) => {
//   try {
//     const params = {};
//     if (empresa) params.empresa = empresa;
//     if (grupo) params.grupo = grupo;
//     if (generacion) params.generacion = generacion;
//     if (orden) params.orden = orden;
//     if (sortBy) params.sortBy = sortBy;

//     const res = await UrlBase.get('/search/filtros', { params });
    
//     return res.data;
//   } catch (error) {
//     console.error('Error en filtrosAllPage', error);
//     throw error;
//   }
// };

// export const filtrosAllPage = async ({ section, empresa, grupo, orden, sortBy, generacion }) => {
//   try {
//     const params = { section };
//     if (empresa) params.empresa = empresa;
//     if (grupo) params.grupo = grupo;
//     if (generacion) params.generacion = generacion;
//     if (orden) params.orden = orden;
//     if (sortBy) params.sortBy = sortBy;

//     const res = await UrlBase.get('/search/filtros', { params });
//     return res.data;
//   } catch (error) {
//     console.error('Error en filtrosAllPage', error);
//     throw error;
//   }
// };


