import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ContextGlobal } from '../../context/GlobalContext';
import { getGrupoById } from '../../controllers/axios/services';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';


function CardDetailsGroups() {
   
      const [grupo, setGrupo] = useState(null);
      const [imgPrincipal, setImgPrincipal] = useState("");
      const {grupos}=useContext(ContextGlobal)
      const { id } = useParams(); 

 
useEffect(() => {
  if (grupo && grupo.img_principal) {
    setImgPrincipal(grupo.img_principal);
  }
}, [grupo]);
 
 
      useEffect(() => {
   getGrupoById(id)
     .then(data => {setGrupo(data)})
     .catch(err => console.error(err));
 }, [id]);
 
 const imgCambiar=(img)=>{
 setImgPrincipal(img)
 }
 
   if (!grupos || !grupos || grupos.length === 0 || !grupo.img_galery) {
     return <div>Cargando...</div>;
   }
 
   const related = grupos.filter(
     a => a.empresa._id === grupo.empresa._id
   );
 
   return (
     <div className='container-fluid page-d'>
       <div className="row details">
       <div className="col d1 ">
         <Link to={'/'} className='home'>K-api</Link>
       </div>
       <div className="col d1">
         <h5>{grupo.nombre}</h5>
        </div>
       <div className="col d1">
       <h4>{ grupo.empresa.nombre}</h4>
       </div>
       </div>
       <div className="row d2">
         <div className="col-lg-5 col-md-4 col-sm-12">
          <div className='card-d1'>
 
 
             <div className='over'>
             <div className="overlay" style={{backgroundImage: `url(${grupo.img_principal})`,}} ></div> 
             <img src={imgPrincipal} alt="img" />
             </div>
              
              
              <div className="container card-gallery">
                 <div className="row">
                     {grupo?.fandom.img_galery?.map((img,index)=>(
                          <div className='col img-g' key={img}>
                             <img onClick={()=>imgCambiar(img)} src={img} alt="" />
 
                          </div>
                     ))}
                 </div>
              </div>
               
               
          </div>
         
         </div>
          <div className="col-lg-4 col-md-4 col-sm-12 info">
           <h1>{grupo.titulo}</h1>
           <h4><b>Debut:</b>{grupo.debut.slice(0,10)}</h4>
           <h6><b>Fandom:</b>{grupo.fandom?.nombre || "ninguno"}</h6>
           <h6><b>concepto:</b>{grupo.concepto}</h6>
 
             <span><b>Descripcion:</b></span>
           <p>{grupo.descripcion}</p>
 
           <span>
             <button>Empresa</button>
             <button>Integrantes</button>
           </span>
 
         </div>
          <div className="col-lg-3 col-md-4 col-sm-12 related">
             <h4>Grupos Relacionados</h4>
             <div className="container">
 
                {related.slice(0,2).map(r=>(
                 <Link to={`/grupo/${r._id}`} className='link'>
                     <div key={r._id} className='row r-card'> 
                    <img src={r.img_principal} alt="" />
                    <p>{r.titulo}</p>
                 </div></Link> 
              ))} 
             </div>
              
         </div>
       </div>
     </div>
  )
}

export default CardDetailsGroups
