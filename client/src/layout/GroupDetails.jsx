import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getGrupoById } from '../controllers/axios/services'
import { ContextGlobal } from '../context/GlobalContext'

function GroupDetails() {
    const [grupo,setgrupo]=useState(null)
    const {grupos}=useContext(ContextGlobal)
    const [imgActual,setImgActual]=useState(null)
    const [related,setRelated]=useState([])
    const {id}=useParams()

    useEffect(() => {
    getGrupoById(id)
    .then(data=> {setgrupo(data)
        console.log(data)})
    .catch(err=> console.error('error al traer grupo',err))
    }, [id])
 if(!grupo)  return <p>'cargando informacion del grupo'</p>


    const relacionados=grupos.filter(g=> g.empresa.nombre === grupo.empresa.nombre && g._id !== grupo._id)

    
    const cambiarImg=(img)=>{
      setImgActual(img)
    }
   

  return (
    <>
      <div className="group-header" style={{ backgroundImage: `url('${grupo.img_principal}')` }}>
        <div className="overlay"></div>
        <div className="group-details card text-bg-dark">
          <div className="card-img-overlay d-flex align-items-center justify-content-center">
            <h5 className="card-title nombre">{grupo.nombre}</h5>
          </div>
        </div>
      </div>

      <div className="container-fluid p-5 bg-black">
        <div className="row general p-4">
         
          <div className="col-lg-6 grupo-gallery p-0">
            <div className="img-group p-3">
              <div className="image">
                <img src={imgActual== null ?  grupo.img_principal : imgActual } alt="" />
              </div>
              <div className="menbers w-50 m-2">
                <p>Miembros</p>
                {grupo.miembros.map(m=>(
                    
                    <Link  to={`/integrante/${m._id}`}><img  key={m._id} src={m.img_principal} alt=""/></Link>
                ))}
              </div>
            </div>

            <div className="g-group">
              {grupo.img_galery?.map((img,index)=>(
                <img onClick={()=>cambiarImg(img)} key={index} src={img} alt="" />
              ))}
            </div>
          </div>

          {/* Detalles */}
          <div className="col-lg-6 grupo-detail">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Información del Grupo</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr><th scope="row">Nombre</th><td>{grupo.nombre}</td></tr>
                <tr><th scope="row">Debut</th><td>{grupo.debut.slice(0,10)}</td></tr>
                <tr><th scope="row">Empresa</th><td>{grupo.empresa.nombre}</td></tr>
                <tr><th scope="row">Concepto</th><td>{grupo.concepto}</td></tr>
                <tr><th scope="row">Miembros</th><td></td></tr>
                <tr><th scope="row">Fandom</th><td>{grupo.fandom?.nombre}</td></tr>
                <tr><th scope="row">Generación</th><td>{grupo.generacion}</td></tr>
                <tr><th scope="row">Status</th><td>{grupo.activo === true ? 'Grupo Activo':'Grupo Inactivo'}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <h3 className='fandom-title'>Fandom</h3>
        <div className="fandom row">
         <div className="col-lg-5 col-md-6 col-sm-12 left">
          <div className="div1">
            
          </div>
          <div className="div2">
            <h3>{grupo.fandom.nombre}</h3>
            <p>{grupo.fandom.lema}</p>
          </div>
          <div className="div3">
            <img src={grupo.fandom.lightStick_img} alt="" />
          </div>
          <div className="div4"></div>
          <div className="div5"></div>
          <div className="div6"></div>
         </div>
         <div className="col-lg-7 col-md-6 col-sm-12 right">

         </div>
        </div>
        
        <div className="related mt-5 mb-0">
          <div className="row">
            <div className="col-12">
              <h1>Grupos relacionados</h1>
            </div>
          </div>

          <div className="row">
          {relacionados.slice(0,4).map(r=>(
            <div className="col-lg-3 col-md-4 col-sm-6 mt-3" key={r._id}>
                <div
                  className="related-card"
                  style={{ backgroundImage: `url('${r.img_principal}')` }}
                >
                  <div className="card-body rounded p-0">
                    <h5 className="card-title">{r.nombre}</h5>
                    <Link  className="card-link" to={`/grupo/${r._id}`}>
                      More Info...
                    </Link>
                  </div>
                </div>
              </div>
          ))}   
        
           
          </div>
        </div>
      </div>
    </>
  )
}

export default GroupDetails
