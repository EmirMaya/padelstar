import { useContext } from "react"
import CartContext from "../context/CartContext"
import './Cart.css'

const Cart = () => {

    const { cart, removeItem } = useContext(CartContext)
    let total = 0
    if (cart.length === 0) {
        return (
            <h2>No hay productos en el carrito</h2>
        )
    }

    return (
        <div>
            <h2>Carrito</h2>
            <ul className="cart-ul">
                {
                    cart.map(prod => <li className="cart-list" key={prod.id}>{prod.name} cantidad: {prod.quantity} precio p/u: {prod.price} subtotal: {prod.quantity * prod.price} <button className="button-cart-list" onClick={() => removeItem(prod.id)}>X</button></li>)
                }
                {
                    cart.map(prod => <li className="cart-list" key={prod.id}>  total: {total += (prod.quantity * prod.price)} </li>)
                }

            </ul>
        </div>
    )

}

export default Cart