import React from 'react'
import './cart.css'
import {useContext} from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

  const {cart} = useContext(CartContext)
  let suma = 0
  
  cart.forEach(prod => {
    suma += prod.cantidad
  });


  return (
    <div className='cartIcon'>
       <span className="material-symbols-outlined">shopping_cart</span>
       {suma > 0 ? <p>{suma}</p> : ''}
    </div>
  )
}

export default CartWidget