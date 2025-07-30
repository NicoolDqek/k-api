import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ContextGlobal } from '../context/GlobalContext'
import { getIntegranteById } from '../controllers/axios/services'

function IdolsDetails() {
  const [idol,setIdol]=useState(null)
  const [img_principal,setImgPrincipal]=useState(null)
  const {idols}=useContext(ContextGlobal)
  const {id}=useParams()
  

useEffect(() => {
getIntegranteById(id)
.then(data=>setIdol(data))
.catch(err=>console.error('error al cargar artista',err))
}, [id])

useEffect(() => {
  if (idol?.img_principal) {
    setImgPrincipal(idol.img_principal);
  }
}, [idol]);

 

const cambioImg=(img)=>{
setImgPrincipal(img)
}

if (!idol) return <p>Idol no encontrado.</p>;

  return (
    <div className='container-fluid idols'>
      <div className="row ">
        <div className="col head">
          <Link className='head' to={'/'}> <h4>K-Api</h4></Link></div>
        <div className="col head">
          <h4>{idol.nombre}</h4>
        </div>
        <div className="col head">
          <h4>{idol.grupo.nombre}</h4>

        </div>
      </div>
      <div className="row menberCard ">
       
       <div className="col-lg-4 col-md-4 col-sm-12 menber">
        <div>
          <h2>{idol.nombre}</h2>
          <div className='gm'>
            <div className='I-gallery'>
              {idol.img_gallery.map((img,i)=>(
                <img onClick={()=>cambioImg(img)} src={img} key={i} alt="" />
              ))}
            </div>
            <div className='I-img'>
             <img  src={img_principal} alt="" />
            </div>
            
          </div>

          <div className='info-idol'>
            <p><b>Nacimiento: </b> {idol?.nacimiento?.slice(0,10)}</p>
            <p><b>Edad: </b>{idol.edad}</p>
            <p><b>grupo: </b>{idol.grupo.nombre}</p>
            <p><b>rol: </b>{idol.rol.join(', ')}</p>
            <div className='menber-des'>
              <h5><b>Descripcion</b></h5>
               <p>{idol.descripcion}</p>
               <h5><b>Activo: </b>{idol.activo === true? "Se encuentra Activo":"Se encuentra Inactivo"}</h5>

            </div>
           

            
            
          </div>
        </div>

       </div>
       <div className="col-lg-4 col-md-4 col-sm-12 r-menber">
          <h3>Compañeros  de Grupo</h3>
          <div className='menbers'>
           {idol.grupo.miembros.filter(m=>m._id !== idol._id).map((m,i)=>( 
          
           
            <div className='card-m' key={i} >
              
             <Link to={`/integrante/${m._id}`}><img src={m.img_principal} alt="" /></Link> 
              <p>{m.nombre}</p>

            </div>
))}
           
          </div>
          
       </div>
       <div className="col-lg-3 col-md-4 col-sm-12 empresa">
        <h3>Empresa</h3>
        <img className='w-100' src={idol.empresa.img_principal} alt="" />
        <h4>{idol.empresa.nombre}</h4>

       </div>
      </div>
    </div>
  )
}

export default IdolsDetails
