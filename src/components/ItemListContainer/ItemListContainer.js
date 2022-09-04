import React, { useEffect, useState } from 'react'
import { productos } from '../Mock/productos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({saludo}) => {

  const [items, setItems] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const {id} = useParams()

  useEffect(() => {

    const getProducts = new Promise((res, rej) => {
      const productosFiltrados = productos.filter(prod=>prod.category === id)
      setIsLoading(true)
      setTimeout(()=>{
        res(id ? productosFiltrados : productos)
      }, 2000)
    });

    getProducts
    .then(data => {
      setItems(data)
      setIsLoading(false)
    })
    .catch(error => {console.log('error ', error);})
  },[id])

  console.log(items)

  
  return (
    <div>
        <h1 className='saludo'>{saludo}</h1>
        {isLoading ? <div className="lds-dual-ring"></div> : <ItemList items={items}/>}
    </div>
  )
}

export default ItemListContainer