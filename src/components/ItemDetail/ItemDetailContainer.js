import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../../firebaseConfig'
import {collection, doc, getDoc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [prod,setProd]=useState({})

    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
       const itemCollection = collection(db,'productos')
       const ref = doc(itemCollection,id)
        getDoc(ref)
        .then(res=>{
            setProd({
                id:res.id,
                ...res.data()
            })
            setIsLoading(false)
        })
    },[id])


  return (
    <div>
        {isLoading ? <div className="lds-dual-ring"></div> : <ItemDetail prod={prod}/>}
    </div>
  )
}

export default ItemDetailContainer