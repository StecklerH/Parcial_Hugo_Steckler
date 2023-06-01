import React from 'react'

const Formulario = ({usuario,setUsuario,alEnviar,mostrar}) => {
  return (
    <div className='form-container'>
        <form onSubmit={alEnviar}>
            <label>Nombre</label>
            <input type="text" disabled={mostrar} placeholder='Ingresa tu nombre' onChange={(event)=> setUsuario({...usuario,nombre: event.target.value})}/>
            <label>Animal Favorito</label>
            <input type="text" disabled={mostrar} placeholder='Ingresa tu animal favorito' onChange={(event)=> setUsuario({...usuario,animalFav: event.target.value})}/>
            <button>Registrar</button>
        </form>
    </div>
  )
}

export default Formulario