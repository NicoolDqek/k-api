import React from 'react'

function Footer() {
  return (
    <div>
    <div className="container-fluid ">
    <div className="row footer-p1">
    <div className='col-lg-6 cl-md-4 col-sm-12 p1'>
    
   <p> K-API es un proyecto educativo diseñado para organizar y explorar<br />
  información del mundo del K-pop.<br />
  Hecho a mano con MongoDB, Node.js y React.<br />
  ¿Quieres colaborar, proponer datos o mejorar la API?<br />
  Puedes contactarnos o contribuir directamente.
</p>
    </div>    
     <div className='col-lg-6 cl-md-4 col-sm-12 p2'>
       <input type="text" placeholder='E-mail...'/>
       <button>Enviar</button>
    </div>  
    </div>    

    </div>
    <div className="container-fluid foot">
      <div className="row">
        <div className="col-lg-6 col-md-3 col-sm-12">
           <h1>K-api</h1>
           <p>Hecho con 😍 para fans del K-pop <br /> y desarrolladores curiosos.</p>

        </div>
        <div className="col-lg-6 col-md-3 col-sm-12  redes ">
        <ul>
          <li><b>Redes:</b></li>
          <i className="bi bi-github"></i>
          <i className="bi bi-envelope-at-fill"></i>
          <i className="bi bi-linkedin"></i>
        </ul>
        </div>
        
        <div className="col-12 copy">
           <p>@NicoolDayanaCuecaVelandia</p>
        </div>
        
      </div>
      </div>  
    </div>
  )
}

export default Footer
