import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <h5 className="card-title">{item.title}</h5>
        <img src={item.img} className="card-img-top" alt="Imagen del producto"/>
        <div className="card-body">
            <div className='card-text-flex'>
              <p className="card-text"><span className='stock'>${item.price}</span></p>
              <p className="card-text"><span className='stock'>Stock: {item.stock}</span></p>
            </div>
            <Link to={`/item/${item.id}`} className="btn btn-dark detalle">Ver detalle</Link>
            <p className='categoria'>{item.category}</p>
        </div>
    </div>
  )
}

export default Item

