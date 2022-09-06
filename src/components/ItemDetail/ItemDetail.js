import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({prod}) => {

  const [contador, setContador] = useState(0)

  const onAdd = (count) => {
    count > 1 ? alert(`Se agregaron al carrito ${count} productos`) : alert(`Se agrego al carrito ${count} producto`)
    setContador(count)
  }

  return (
    <div className='item-flex'>
        <img src={prod.img} alt={prod.title} width="500px"/>
        <div className='item-right'>
            <h1>{prod.title}</h1>
            <p>{prod.description}</p>
            <p><span>${prod.price}</span></p>
            {
              contador === 0 ? <ItemCount initial={1} stock={prod.stock} onAdd={onAdd}/> : <Link to='/cart' className='cart-link'>Ir al carrito</Link>
            }
        </div>
    </div>
  )
}

export default ItemDetail