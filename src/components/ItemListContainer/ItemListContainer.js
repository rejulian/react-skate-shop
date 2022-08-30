import React, { useEffect, useState } from 'react'
import { productos } from '../Mock/productos'
import ItemList from './ItemList'

const ItemListContainer = ({saludo}) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(()=>{
        res(productos)
      }, 2000)
    });

    getProducts
    .then(data => {setItems(data)})
    .catch(error => {console.log('error ', error);})
  },[])

  console.log(items)

  
  return (
    <div>
        <h1 className='saludo'>{saludo}</h1>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer