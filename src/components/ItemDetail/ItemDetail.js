import Detail from '../Detail/Detail'
import './ItemDetail.css'
import ItemCounter from '../ItemCounter/ItemCounter';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const ItemDetail = ({ products }) => {
    const [quantity, setQuantity] = useState(0)
    const handleOnAdd = (count) => {
      setQuantity(count)
    }


    return (
        <div className='item-detail'>
            <Detail key={products.id} {...products} />
            {quantity > 0 ? <Link className='link-compra' to='/cart'>Ir al carrito</Link> : <ItemCounter initial="0" stock={products.stock} onAdd={handleOnAdd} /> }
            <h4>Descripción</h4>
            <p>
                {products.description}
            </p>


        </div>
    )

}

export default ItemDetail