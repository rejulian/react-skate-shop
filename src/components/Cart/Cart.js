import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cartDetail.css'
import { Link } from 'react-router-dom'

const Cart = () => {

    const {cart, clearCart, removeItem} = useContext(CartContext)

    if (cart.length > 0) {
        return (
            <div className='cartContainer'>
                {cart.map(prod => (
                    <div className='prodCart' key={prod.id}>
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
                ))}
                <button className='btnVaciar' onClick={clearCart}>Vaciar Carrito</button>
            </div>
          )
    } else {
        return(
            <div className='carritoVacio'>
                <h1>Upss... parece que no tienes nada en el carrito</h1>
                <Link to='/' className='irComprar'>Ir a comprar</Link>
            </div>
        )
    }
}

export default Cart