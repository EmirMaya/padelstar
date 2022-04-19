import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./ItemCounter.css"
const ItemCounter = ({ initial, stock, onAdd }) => {
    const [count, setCount] = useState(0)

    console.log(stock)

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    return (
        <div className="cardBox">
            <div className="countBox">
                <button onClick={decrement} className="countButton">-</button>
                <p>{count}</p>
                <button onClick={increment} className="countButton">+</button>
            </div>

            <button onClick={() => onAdd(count)} className="cartButton2">
                Agregar al carrito
            </button>

        </div>
    )


}

export default ItemCounter