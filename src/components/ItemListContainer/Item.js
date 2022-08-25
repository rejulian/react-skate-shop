import React from 'react'

const Item = ({item}) => {
  return (
    <div className="card" style={{width: "18rem"}}>
        <h5 className="card-title">{item.title}</h5>
        <img src={item.img} className="card-img-top" alt="Imagen del producto"/>
        <div className="card-body">
            <p className="card-text">{item.description}</p>
            <p className="card-text"><span className='stock'>Stock: {item.stock}</span></p>
            <p className="btn btn-dark detalle">${item.price}</p>
            <p className='categoria'>{item.category}</p>
        </div>
    </div>
  )
}

export default Item

