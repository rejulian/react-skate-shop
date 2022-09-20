import React, { useEffect, useState } from 'react'
// import { productos } from '../Mock/productos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from '../../firebaseConfig'


const ItemListContainer = ({saludo}) => {

  const [items, setItems] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  const {id} = useParams()

  useEffect(()=>{
    const itemCollection = collection(db,'productos');
    const q = id ? query(itemCollection, where('category', '==', id)) : itemCollection
    
    getDocs(q)
    .then(res=>{
      const products = res.docs.map(prod=>{
        return{
          id:prod.id,
          ...prod.data()
        };
      })
      setItems(products)
    })
    .catch(error=>{
      console.error(error)
    })
    .finally(()=>{
      setIsLoading(false)
    })

  },[id])
  
  return (
    <div>
        <h1 className='saludo'>{saludo}</h1>
        {isLoading ? <div className="lds-dual-ring"></div> : <ItemList items={items}/>}
    </div>
  )
}

export default ItemListContainer