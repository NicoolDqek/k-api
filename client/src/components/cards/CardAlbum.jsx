import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CardAlbum({album}) {
  const {id}=useParams()
  return (
    <div className='card_album col-lg-5 col-md-4 col-sm-12'  style={{ backgroundImage: `url('${album.img_principal}')` }}
>
     <div className="overlay"></div>
     <div>
      <img src={album.img_principal} alt={album.titulo}/>
     </div>
     <div className='info_album' >
      <h5>{album.titulo}</h5>
      <p>{album.descripcion}</p>
      <h6>{album.concepto}</h6>
       <h6>{album.tipo}</h6>
       <Link to={`/details/${album._id}`}><button> more Info </button></Link>
     </div>
        
    </div>
  )
}

export default CardAlbum
