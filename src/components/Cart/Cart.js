import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cartDetail.css'
import { Link } from 'react-router-dom'
import Form from '../Form/Form'
import { useState } from 'react'

const Cart = () => {

    const {cart, clearCart, removeItem, totalPrice} = useContext(CartContext)
    const [idCompra, setIdCompra] = useState('')

    const handleId = idCompra =>{
        setIdCompra(idCompra)
    }

    if (cart.length > 0) {
        const total = totalPrice()
        return (
            <>
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
                    <div className='total-vaciar'>
                        <p className='totalPrice'>Total: ${total}</p>
                        <button className='btnVaciar' onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                </div>
                <Form cart={cart} total={total} clearCart={clearCart} handleId={handleId}/>
            </>
          )
    } else if(cart.length === 0 && !idCompra){
        return(
            <div className='carritoVacio'>
                <h1>Upss... parece que no tienes nada en el carrito</h1>
                <Link to='/' className='irComprar'>Ir a comprar</Link>
            </div>
        )
    }else if(idCompra){
        return(
            <div className='compra'>
                <div>
                    <h1>¡Gracias por su compra!</h1>
                    <h3>ID: {idCompra}</h3>
                </div>
                <img src="https://res.cloudinary.com/tuko/image/upload/v1664049138/skate-shop/Shopping_cart_Monochromatic_2_yivv4a.png" alt="" />
            </div>
        )
    }
}

export default Cart