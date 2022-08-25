import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({items}) => {
  return (
    <div className='card-container'>
        {
            items.map((item)=><Item item={item} key={item.id}/>)
        }
    </div>
  )
}

export default ItemList