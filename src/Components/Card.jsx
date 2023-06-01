import React from 'react'

function Card({usuario}) {
  const {nombre,animalFav} = usuario
  return (
    <div className='card-container'>
        <h2>Tarjeta de bienvenida</h2>
        <h2>Hola {nombre}</h2>
        <h2>Tu animal Favorito es el: {animalFav}</h2>
    </div>
  )
}

export default Card