import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const addItem = (producto, cantidad) => {
        if (isInCart(producto.id)) {
            sumarCantidad(producto, cantidad)
        } else {
            setCart([...cart, {...producto,cantidad}])
        }
    }

    const isInCart = id => cart.some(prod => prod.id === id)
    const sumarCantidad = (item, cantidad) =>{
        const carritoActualizado = cart.map(prod => {
            if (prod.id === item.id) {
                const productoActualizado = {...prod,cantidad: prod.cantidad + cantidad}
                return productoActualizado
            } else {
                return prod
            }
        })
        setCart(carritoActualizado)
    }

    const removeItem = id => {
        const eliminarProducto = cart.filter(prod => prod.id !== id)
        setCart(eliminarProducto);
    }

    const clearCart = () => setCart([])

    const totalPrice = () =>{
        let total = 0;
        cart.forEach(element => {
            total+= element.cantidad*element.price
        })
        return total;
    }

    return(
        <CartContext.Provider value={{cart, addItem, clearCart, removeItem, totalPrice}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;