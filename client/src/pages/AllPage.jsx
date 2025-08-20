import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../context/GlobalContext';
import Navbar from '../components/Navbar'
import CardAlbum from '../components/cards/CardAlbum'
import { useEffect } from 'react';
import { filtrosAlbums, filtrosGrupos, filtrosIdols } from '../controllers/axios/services';
 
function AllPage() {

    
    const {albums,idols,empresas,grupos}=useContext(ContextGlobal)
  
    const [value,setValue]=useState(albums)
    const [valor,setValor]=useState("albums")
    const [empresa,setEmpresa]=useState("")
    const [sortBy,setSort]=useState("")
    const [grupo,setGrupo]=useState("")
    const [concepto,setConcepto]=useState("")
    const [filters, setFilters] = useState([]);
    const [generacion, setGeneracion] = useState([]);
     





useEffect(() => {
  const fetchData = async () => {
    try {
      let data = [];

      if (valor === 'albums') {
        data = await filtrosAlbums({ grupo, concepto, ordenar: sortBy });
      } else if (valor === 'grupos') {
        data = await filtrosGrupos({ empresa, generacion });
      } else if (valor === 'artistas') {
        data = await filtrosIdols({ empresa, generacion });
      }

      setFilters(data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
}, [valor, grupo, concepto, sortBy, empresa, generacion]);

    const render=(valor,value)=>{
    setValue(valor)
    setValor(value)
    setFilters(undefined)
    }



    const generaciones= [...new Set(grupos.map(g=> g.generacion)) ]
    const conceptos= [...new Set(albums.map(g=> g.concepto )) ]

  return (
    <div className='container-fluid all'>
    
      <div className="row">
        <div className="col-lg-2 side-bar bg-black ext-white p-3 vh-100">
          <h3 className='text-center'><Link to="/" className="text-white text-decoration-none">K-Api</Link></h3>
          <ul className="list-unstyled mt-4">
            <li><button  onClick={()=>render(grupos,'grupos')} className="btn btn-outline-light w-100 my-2">Grupos</button></li>
            <li><button  onClick={()=>render(idols,'artistas')} className="btn btn-outline-light w-100 my-2">Idols</button></li>
            <li><button onClick={()=>render(albums,'albums')} className="btn btn-outline-light w-100 my-2">Albums</button></li>
            <li><button onClick={()=>render(empresas,"empresas")} className="btn btn-outline-light w-100 my-2">Empresas</button></li>
          </ul>
        </div>

        
        <div className="col-lg-10 right ">
          <div className="card">
            <img
              src="https://wallpapercave.com/wp/wp15515625.jpg"
              className="card-img"
              alt="K-pop"
              
            />
            
          </div>
          <Navbar/>
          <div className="mt-4 result">
            <h4>{valor? valor:"ALBUMS"}</h4>
            <div>
               {valor !== 'albums' && valor !== 'empresas' && value !== albums ?(<div className='filtros'>
                <div className='fill'>
                  <select value={empresa} onChange={(e)=>setEmpresa(e.target.value)} name="" id="">
                <option value="">Empresa</option>
                {empresas.map((e,i)=>(
                  <option  key={i} value={e.nombre}>{e.nombre}</option>
                ))}

              </select>
              <select  value={generacion} onChange={(e)=>setGeneracion(e.target.value)} name="" id="">
                <option value="">Generacion</option>
                {generaciones.map((g,i)=>(
                  <option key={i} value={g}>{g}</option>
                ))}
                
              </select>
                </div>
              <div className='sort'>
              <i onClick={()=>setSort('asc')} class="bi bi-sort-alpha-up"></i>
              <i  onClick={()=>setSort('desc')} class="bi bi-sort-alpha-down"></i>
              </div>
              
              </div> ):(<div className='filtros'>
                <div className='fill'>
                  <select value={grupo} onChange={(e)=>setGrupo(e.target.value)} name="" id="">
                <option value="">Grupo</option>
                {grupos.filter(g=>g.miembros.length > 0).map((g)=>(
                  <option key={g._id} value={g.nombre}>{g.nombre}</option>
                ))}

              </select>
              <select onChange={e => setConcepto(e.target.value)}  >
                {/* agregar filtro de concepto */}
                <option value="">Concepto</option>
                {conceptos.map((c,index)=>(
                  <option key={index} value={c}>{c}</option>
                ))}
                
              </select>
                </div>
              <div className='sort'>
              <i onClick={()=>setSort('asc')} className="bi bi-sort-alpha-up"></i>
              <i  onClick={()=>setSort('desc')} className="bi bi-sort-alpha-down"></i>
              </div>
              
              </div>)}
              
              <div className='container-fluid  card_section'>
               

{filters === undefined ? (
 
  value?.map(a => (<CardAlbum key={a._id} album={a} />))
) : filters.length > 0 ? (

  filters.map(a => (<CardAlbum key={a._id} album={a} />))
) : (
   <div className='none'>
    <img src="/music.gif" alt="" />
<p>No hay elementos con concepto {concepto}</p>

   </div>
  
)}





               
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPage;
