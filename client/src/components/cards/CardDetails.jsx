import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAlbumById } from '../../controllers/axios/services';
import { useContext } from 'react';
import { ContextGlobal } from '../../context/GlobalContext';

function CardDetails() {
    
     const [album, setAlbum] = useState(null);
     const [imgPrincipal, setImgPrincipal] = useState("");
     const {albums}=useContext(ContextGlobal)
     const { id } = useParams(); 


useEffect(() => {
  if (album?.img_principal) {
    setImgPrincipal(album.img_principal);
  }
}, [album]);


     useEffect(() => {
  getAlbumById(id)
    .then(data => {setAlbum(data)})
    .catch(err => console.error(err));
}, [id]);

const imgCambiar=(img)=>{
setImgPrincipal(img)
}

  if (!album || !albums || albums.length === 0) {
    return <div>Cargando...</div>;
  }

  const related = albums.filter(
    a => a.grupo._id === album.grupo._id &&
         a.tipo === album.tipo &&
         a._id !== album._id

  );

 

  return (
    <div className='container-fluid page-d'>
      <div className="row details">
      <div className="col d1 ">
        <Link to={'/'} className='home'>K-api</Link>
      </div>
      <div className="col d1">
        <h5>{album.titulo}</h5>
       </div>
      <div className="col d1">
      <h4>{album.grupo.nombre}</h4>
      </div>
      </div>
      <div className="row d2">
        <div className="col-lg-5 col-md-4 col-sm-12">
         <div className='card-d1'>


            <div className='over'>
            <div className="overlay" style={{backgroundImage: `url(${album.img_principal})`,}} ></div> 
            <img src={imgPrincipal} alt="img" />
            </div>
             
             
             <div className="container card-gallery">
                <div className="row">
                    {album.img_galery.map((img,index)=>(
                         <div className='col img-g' key={img}>
                            <img onClick={()=>imgCambiar(img)} src={img} alt="" />

                         </div>
                    ))}
                </div>
             </div>
              
              
         </div>
        
        </div>
         <div className="col-lg-4 col-md-4 col-sm-12 info">
          <h1>{album.titulo}</h1>
          <h4><b>Lanzamiento:</b>{album.lanzamiento.slice(0,10)}</h4>
          <h6><b>Tipo:</b>{album.tipo}</h6>
             <h6><b>concepto:</b>{album.concepto}</h6>

            <span><b>Descripcion:</b></span>
          <p>{album.descripcion}</p>

          <span>
            <button>Canciones</button>
            <button><Link className='link-grupo' to={`/grupo/${album.grupo._id}`}>Grupo</Link> </button>
          </span>

        </div>
         <div className="col-lg-3 col-md-4 col-sm-12 related">
            <h4>Albums Relacionados</h4>
            <div className="container">

               {related.slice(0,2).map(r=>(
                <Link  to={`/album/${r._id}`} className='link'>
                    <div key={r._id} className='row r-card'> 
                   <img src={r.img_principal} alt="" />
                   <p>{r.titulo}</p>
                </div></Link> 
             ))} 
            </div>
             
        </div>
      </div>
    </div>
  )
}

export default CardDetails
