import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../Mock/productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [prod,setProd]=useState({})

    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(()=>{
        const getProd = new Promise((res,rej)=>{
            const unicoProducto = productos.find(prod=>prod.id=== Number(id))
            setTimeout(()=>{
                res(unicoProducto)
            },2000)
        })

        getProd
        .then(unicoProducto=>{
            setProd(unicoProducto)
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