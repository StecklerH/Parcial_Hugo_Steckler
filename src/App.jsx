import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Formulario from './Components/Formulario'


function App() {

  const [usuario,setUsuario] =  useState({
    nombre: '',
    animalFav: ''
  })
  const [mostrar,setMostrar] = useState(false)
  const [err,setErr] = useState(false)

  
  const alEnviar = (event) =>{
    event.preventDefault()
    if(usuario.nombre.trim().length > 3 && usuario.animalFav.trim().length >=6){
      setMostrar(true)
      setErr(false)
    }else{
      setErr(true)
    }
  }

  return (
    <>
      <div>
        <h1>Registro amantes de animales</h1>
        <Formulario usuario={usuario} setUsuario={setUsuario} alEnviar={alEnviar} mostrar={mostrar}/>
        {mostrar && <Card usuario={usuario}/>}
        {err && <h4 style={{color: "red"}}>Algunos de los datos ingresados es incorrecto</h4>}
      </div>
    </>
  )
}

export default App
