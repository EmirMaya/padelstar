import { useContext, useEffect, useState } from "react"
import CartContext from "../context/CartContext"
import './Cart.css'

const Cart = () => {
    const  [total, setTotal] = useState(0)
    const { cart, removeItem } = useContext(CartContext)
    
    useEffect(() => {
        if (cart) {
            let totalAmount = 0;
            cart.forEach((product) => {
                totalAmount = totalAmount + product.quantity * product.price
            })
            setTotal(totalAmount)
        }
    }, [cart])

    // if (cart.length === 0) {
    //     return (
    //         <h2>No hay productos en el carrito</h2>
    //     )
    // }

    return (
        <div>
            <h2>Carrito</h2>
            <ul className="cart-ul">
                {
                    cart.map(prod => <li className="cart-list" key={prod.id}>{prod.name} cantidad: {prod.quantity} precio p/u: {prod.price} subtotal: {prod.quantity * prod.price} <button className="button-cart-list" onClick={() => removeItem(prod.id)}>X</button></li>)
                }
                {total === 0 && <h2>No hay productos en el carrito</h2>}
                {total !== 0 && <li className="cart-list">Total: $ {total}</li>}

            </ul>
        </div>
    )

}

export default Cart