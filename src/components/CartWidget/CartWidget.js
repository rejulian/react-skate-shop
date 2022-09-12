import React from 'react'
import './cart.css'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {cart} = useContext(CartContext)

  return (
    <div className='cartIcon'>
       <span className="material-symbols-outlined">shopping_cart</span>
       {cart.length > 0 ? <p>{cart.length}</p> : ''}
    </div>
  )
}

export default CartWidget