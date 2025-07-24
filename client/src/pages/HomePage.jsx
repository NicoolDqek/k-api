import React, { useEffect, useState } from 'react'
import Header from '../layout/Header';
import AlbumSection from '../layout/AlbumSection';
import Footer from '../components/cards/Footer';
import LabelSection from '../layout/LabelSection';
import Navbar from '../components/Navbar';

function HomePage() {
  const [grupo, setGrupo] = useState([])

const getdata=async()=>{
  try {
    const res= await fetch("http://localhost:3000/fandom");
    const data= await res.json()
    return data
  } catch (error) {
    console.error("error al traer los grupos")
  }
}

useEffect(() => {
getdata()
.then(data=>setGrupo(data))
.catch(err=>console.error("error:",err))
}, [])


  return (
    <div className='home back'>
     <Header/>
     <Navbar/>
     <AlbumSection/>
     <LabelSection/>
     <Footer/>
      
    </div>
  )
}

export default HomePage
