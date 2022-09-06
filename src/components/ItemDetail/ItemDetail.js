import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({prod,onAdd}) => {
  return (
    <div className='item-flex'>
        <img src={prod.img} alt={prod.title} width="500px"/>
        <div className='item-right'>
            <h1>{prod.title}</h1>
            <p>{prod.description}</p>
            <p><span>${prod.price}</span></p>
            <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail