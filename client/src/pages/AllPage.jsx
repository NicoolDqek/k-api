import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../context/GlobalContext';
import Navbar from '../components/Navbar'
import CardAlbum from '../components/cards/CardAlbum'
function AllPage() {

    
    const {albums,idols,empresa,grupos}=useContext(ContextGlobal)
    const [value,setValue]=useState(null)
    const [valor,setValor]=useState('')


    const render=(valor,value)=>{
    setValue(valor)
    setValor(value)
    }

  return (
    <div className='container-fluid all'>
    
      <div className="row">
        <div className="col-lg-2 side-bar bg-black ext-white p-3 vh-100">
          <h3 className='text-center'><Link to="/" className="text-white text-decoration-none">K-Api</Link></h3>
          <ul className="list-unstyled mt-4">
            <li><button  onClick={()=>render(grupos,'grupos')} className="btn btn-outline-light w-100 my-2">Grupos</button></li>
            <li><button  onClick={()=>render(idols,'Artistas')} className="btn btn-outline-light w-100 my-2">Idols</button></li>
            <li><button onClick={()=>render(albums,'Albums')} className="btn btn-outline-light w-100 my-2">Albums</button></li>
            <li><button onClick={()=>render(empresa,"empresas")} className="btn btn-outline-light w-100 my-2">Empresas</button></li>
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
              <div className='container-fluid  card_section'>

              {value ? value.map(a=>(

              <CardAlbum key={a._id} album={a}/>
            )):(
              albums.map(a=>(

              <CardAlbum key={a._id} album={a}/>
            ))
            )}</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllPage;
