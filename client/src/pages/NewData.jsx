import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/cards/Footer'
import { fieldsByType } from '../controllers/data'
import { getData } from '../controllers/axios/services'


function NewData() {

    const [formulario,setFormulario]=useState({})
    const [tipo,setTipo]=useState("")
    const [fields,setFields]= useState([])
    const [loanding,setLoading]=useState(true)
 const [selectData, setSelectData] = useState({}) 

  useEffect(() => {
    if (tipo) {
      setFields(fieldsByType[tipo])
      setFormulario({})
      setSelectData({}) 
    }
  }, [tipo])



useEffect(() => {
getData(tipo)
.then(data=> setSelectData(data))
.catch(err =>console.log("error al traer data",err))
}, [tipo])



useEffect(() => {
console.log("nueva data",fields)
}, [fields])

const handleChange = (e)=> {
const {name,value}=e.target
setFormulario(
  (prev)=>( 
    {...prev,
    [name]:value}))
}


const handleSubmit = (e)=> {
 e.preventDefault();
 console.log("Datos a enviar:", formulario);
}


const renderInput = (file) => {
  switch (file.type) {
    case "text":
      return (
        <label>
          {file.label}
          <input
            type="text"
            name={file.name}
            value={formulario[file.name] || ""}
            onChange={handleChange}
            className="inputF"
            style={{ width: "100%", padding: "4px" }}
          />
        </label>
      );

    case "textarea":
      return (
        <label>
          {file.label}
          <textarea
            name={file.name}
            value={formulario[file.name] || ""}
            onChange={handleChange}
            className="textArea"
            style={{ width: "100%", height: "80px" }}
          />
        </label>
      );

    case "select":
      return (
        <label>
          {file.label}
          <select
            name={file.name}
            value={formulario[file.name] || ""}
            onChange={handleChange}
            className="inputF"
            style={{ width: "100%", padding: "4px" }}
          >
            <option value="">Seleccione una opción</option>
            {file.options?.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      );

    default:
      return null;
  }
};

  return (
    <div >
    <Navbar/>
<h3>Añador nueva data de: {tipo || "ninguna"}</h3>

<div style={{ padding: "2rem" }}>
    <div className='seleccionar'>
         <select value={tipo} onChange={(e)=> setTipo(e.target.value)}>
            <option value= "">Selecciona...</option>
            <option value="album">Album</option>
            <option value="grupo">Grupo</option>
            <option value="integrante">Artista</option>
            <option value="empresa">Empresa</option>
         </select>
    </div>

    <div className="formulario">
     

     {fields?.length > 0 ? (
       <form onSubmit={handleSubmit}
       style={{ marginBottom: "1rem" }}>


  {fields?.map((file)=>(
      <div key={file.name}>
        {file.type === "textarea" ? (
          <label htmlFor="">{file.label}
          <textarea 
          name={file.name}
           value={formulario[file.name] || ""}
           onChange={handleChange}
           className='textArea'
           style={{ width: "100%", height: "80px" }}
          >

          </textarea></label>
        ):(
          <label htmlFor="">{file.label}
         
          <input type="text" name={file.name}
           value={formulario[file.name] || ""}
           onChange={handleChange}
           className='inputF'style={{ width: "100%", padding: "4px" }} /></label>
        )}
 
      </div>
       ))}
        <button type="submit">Guardar</button>
       </form>
  ): (
    <div>
      <h1>selecciona un formulario</h1>
    </div>
  )}
    </div>
</div>
    <Footer/>
    </div>
    
  )
}

export default NewData