import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './cartDetail.css'
import Form from '../Form/Form'
import { useState } from 'react'
import CartDetail from './CartDetail'
import EmptyCart from './EmptyCart'
import CartBuy from './CartBuy'

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
                        <CartDetail key={prod.id} prod={prod} removeItem={removeItem}/>
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
            <EmptyCart/>
        )
    }else if(idCompra){
        return(
            <CartBuy idCompra={idCompra}/>
        )
    }
}

export default Cart