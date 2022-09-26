import React from 'react'

const CartDetail = ({prod,removeItem}) => {
  return (
    <div className='prodCart'>
        <img src={prod.img} className='imgCart' alt="" /> 
        <div>
            <h1>{prod.title}</h1>
            <div className='textCartContainer'>
                <div>
                     <p>Cantidad: {prod.cantidad}</p>
                     <p>Precio: ${prod.price}</p>
                </div>
                <button className='eliminarBtn' onClick={()=>removeItem(prod.id)}>Eliminar</button>
            </div>
       </div> 
    </div>
  )
}

export default CartDetail