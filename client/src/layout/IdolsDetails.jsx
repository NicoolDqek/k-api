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
}, [])

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
          <h4>Lee Felix</h4>
        </div>
        <div className="col head">
          <h4>Stray Kids</h4>

        </div>
      </div>
      <div className="row menberCard ">
       
       <div className="col-lg-4 col-md-4 col-sm-12 menber">
        <div>
          <h2>{idol.nombre}</h2>
          <div className='gm'>
            <div className='I-gallery'>
              {idol.img_gallery.map(img=>(
                <img onClick={()=>cambioImg(img)} src={img}  alt="" />
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
           
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>
            </div>
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>

            </div>
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>

            </div>
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>

            </div>
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>

            </div>
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>

            </div>
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>

            </div>
            <div className='card-m'>
              <img src="https://img.wattpad.com/b508bc48825ef9b8e4bce53157a814f92581d2d1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f685a36425a5a396e4a43617831413d3d2d3639363331363032362e313663313564373662366136313766613634333132313738303439302e6a7067?s=fit&w=720&h=720" alt="" />
              <p>Bang Chan</p>

            </div>
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
