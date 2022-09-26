import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='carritoVacio'>
        <h1>Upss... parece que no tienes nada en el carrito</h1>
        <Link to='/' className='irComprar'>Ir a comprar</Link>
    </div>
  )
}

export default EmptyCart