import React from 'react'

const CartBuy = ({idCompra}) => {
  return (
    <div className='compra'>
         <div>
            <h1>¡Gracias por su compra!</h1>
            <h3>ID: {idCompra}</h3>
         </div>
        <img src="https://res.cloudinary.com/tuko/image/upload/v1664049138/skate-shop/Shopping_cart_Monochromatic_2_yivv4a.png" alt="" />
    </div>
  )
}

export default CartBuy