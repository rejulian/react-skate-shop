import React, { useEffect, useState } from 'react'
import { productos } from '../Mock/productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [prod,setProd]=useState({})

    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const getProd = new Promise((res,rej)=>{
            const unicoProducto = productos.find(prod=>prod.id===1)
            setTimeout(()=>{
                res(unicoProducto)
            },2000)
        })

        getProd
        .then(unicoProducto=>{
            setProd(unicoProducto)
            setIsLoading(false)
        })

    },[])
    
    const onAdd = (count) => {
        count > 1 ? alert(`Se agregaron al carrito ${count} productos`) : alert(`Se agrego al carrito ${count} producto`)
      }


  return (
    <div>
        {isLoading ? <div className="lds-dual-ring"></div> : <ItemDetail prod={prod} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetailContainer