import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getAlbumById } from '../../controllers/axios/services';

function CardDetails() {
    
      const [album, setAlbum] = useState(null);
     const { id } = useParams(); 

     useEffect(() => {
  getAlbumById(id)
    .then(data => setAlbum(data))
    .catch(err => console.error(err));
}, [id]);


if (!album) return <div>Cargando...</div>;

  return (
    <div className='container-fluid'>
      <div className="row">
      <div className="col">
        <Link>K-api</Link>
      </div>
      <div className="col">
        
        {album.titulo}</div>
      <div className="col">

      </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
        
        </div>
         <div className="col-lg-4 col-md-4 col-sm-12">

        </div>
         <div className="col-lg-4 col-md-4 col-sm-12">

        </div>
      </div>
    </div>
  )
}

export default CardDetails
