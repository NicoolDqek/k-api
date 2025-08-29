import React from 'react'

function MusicCard({cancion,album}) {
  return (
    <div className='card-music p-0 row col-lg-3 col-md-5 col-sm-6 col-xsm-6'>
      <div className='desc p-0 col text-center'>
        <img className='imgp' src={cancion.img_principal} alt="principal img"/>
    
        <div className='overflay'>
        
        <h1>{cancion.titulo}</h1>
        <p>{cancion.descripcion}</p>
        <img  src={album.img_principal} alt="" />
        <h6>{album.titulo}</h6>
        </div>
        
        
       
      </div>
    </div>
  )
}

export default MusicCard
