import React, { useEffect, useState } from 'react'
import CardAlbum from '../components/cards/CardAlbum'
import GroupSection from './groupSection'
import { getAlbum } from '../controllers/axios/services'

function AlbumSection() {
const [album,setAlbum]=useState([])



useEffect(() => {
getAlbum()
.then(data=>setAlbum(data))
.catch((err)=>console.error("error:",err))
}, [])

  return (
    <div>
    <div className='container-fluid  card_section'>
      <h1 className='t-1'>Albums</h1>
      <div className='row section_albums'>

        {album.slice(11,15).map(ab=>(

           <CardAlbum key={ab._id} album={ab}/>
        ))}
         
           
        <div className="filtros">
          <button>Groups</button>
          <button>Album</button>
          <button>Idols</button>
          <button>Fandoms</button>
        </div>
      </div>
      <h1 className='t-1'>GROUPS</h1>
     </div>
     <GroupSection/>
    </div>
  )
}

export default AlbumSection
