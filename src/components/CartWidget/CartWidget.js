import { FaOpencart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../context/CartContext";
const CartWidget = () => {

    const {getQuantity} = useContext(CartContext)

    return (
        <div className="cart-box">
            <button className="cartButton"><FaOpencart className="cartWidget" /></button>
                  <p className="cart-num">{getQuantity()}</p>
        </div>
    )
}

export default CartWidget;