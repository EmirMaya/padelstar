import './Item.css'

import {Link} from 'react-router-dom'
const Item = ({id, name, img, stock}) => {
 


    return(
        <section className="item-card">
             <img className="item-image" src={img} alt={name} />
             <h3 className="item-name">{name}</h3>
             <button className="item-description">
                 <Link className='link' to={`/detail/${id}`}>Ver descripción</Link>
             </button>
             <p className="item-stock">Stock Disponible : {stock}</p>
        </section>
    )
}

export default Item