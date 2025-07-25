import React, { useEffect, useState } from 'react'
import CardAlbum from '../components/cards/CardAlbum'
import GroupSection from './groupSection'
import {  getData } from '../controllers/axios/services'

function AlbumSection() {
const [album,setAlbum]=useState([])


useEffect(() => {
getData("album")
.then(data=>setAlbum(data))
.catch((err)=>console.error("error:",err))
}, [album])


const valorFiltro=async(value)=>{
  await getData(value)
}
  return (
    <div>
    <div className='container-fluid  card_section'>
      <h1 className='t-1'>Albums</h1>
      <div className='row section_albums'>
<div className='row section_albums'>
        {album.slice(11,15).map(ab=>(

           <CardAlbum key={ab._id} album={ab}/>
        ))}
         
         </div> 
      </div>
      <h1 className='t-1'>GROUPS</h1>
     </div>
     <GroupSection/>
    </div>
  )
}

export default AlbumSection
