import { FaOpencart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import { NavLink } from 'react-router-dom'
const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    return (
        <div className="cart-box">
            <button className="cartButton">
                <NavLink className={({ isActive }) => isActive ? 'paletas-link' : 'nav-link'} to='/Cart'><FaOpencart className="cartWidget" /></NavLink>
            </button>
            <p className="cart-num">{getQuantity()}</p>
        </div>
    )
}

export default CartWidget;