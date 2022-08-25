import React, { useState } from 'react'
import './ItemCount.css'
const ItemCount = ({initial,stock,onAdd}) => {

    const [count, setCount] = useState(initial)    

    const decrementar = () => {
        count > initial ? setCount(count - 1) : alert('No puede elegir menor cantidad')
    }

    const incrementar = () => {
        count < stock ? setCount(count + 1) : alert('No puede elegir mas cantidad')
    }

  return (
      <div className='itemContainer'>
        <div>
            <button className='btn-primary' onClick={decrementar}>-</button>
            <input type="number" value={count} readOnly/>
            <button className='btn-primary' onClick={incrementar}>+</button>
        </div>
        <button className='btn-buy' onClick={() => {onAdd(count)}}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount