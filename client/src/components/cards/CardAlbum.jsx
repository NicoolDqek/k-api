import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CardAlbum({album}) {
   
  return (
    <div className='card_album'  style={{ backgroundImage: `url('${album.img_principal}')` }}
>
     <div className="overlay"></div>
     <div>
      <img src={album.img_principal} alt={album.titulo}/>
     </div>
     <div className='info_album' >
      <h5>{album.titulo || album.nombre}</h5>
      <p>{album.descripcion ? album.descripcion.slice(0, 60) : album.sede}</p>
      <h6>{album.concepto}</h6>
       <h6>{album.tipo}</h6>
       <Link to={`/${album.p}/${album._id}`}><button> more Info </button></Link>
     </div>
        
    </div>
  )
}

export default CardAlbum
