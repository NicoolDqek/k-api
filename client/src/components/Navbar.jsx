import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ContextGlobal } from '../context/GlobalContext'

function Navbar() {

 const { input, inputValor, search } = useContext(ContextGlobal);
  const navigate = useNavigate();

  const formValor = async (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      await search(input);
      navigate(`/result?q=${input}`);
    }
  };
  return (
    <div>
      <nav className="navbar bg-black navbar-expand-lg border-bottom border-body" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={"/"} className="nav-link " aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/all"} className="nav-link" href="#">All</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link  " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Notices
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to={'/newData'} className="nav-link " aria-disabled="true">Nuevo</Link>
        </li>
      </ul>
      <form onSubmit={formValor}  className="d-flex" role="search">
        <input value={input} onChange={(e)=>inputValor(e)} className="form-control me-2" type="search" placeholder="Search..." aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
 
    </div>
  )
}

export default Navbar
