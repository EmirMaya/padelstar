import Detail from '../Detail/Detail'
import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import CartContext from '../context/CartContext';

const ItemDetail = ({ products }) => {
 

    const { addItem, isInCart } = useContext(CartContext)

    const handleOnAdd = (count) => {
       
        const objProd = [
            products.id, products.name, products.price
        ]

        addItem({ ...objProd, quantity: count })
    }


    return (
        <div className='item-detail'>
            <Detail key={products.id} {...products} />
            {isInCart(products.id) ? <Link className='link-compra' to='/cart'>Ir al carrito</Link> : <ItemCounter initial="0" stock={products.stock} onAdd={handleOnAdd} />}
            <h4>Descripción</h4>
            <p>
                {products.description}
            </p>


        </div>
    )

}

export default ItemDetail