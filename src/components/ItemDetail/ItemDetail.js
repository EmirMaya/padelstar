import Item from '../Item/Item'
import './ItemDetail.css'
const ItemDetail = ({ products }) => {
    console.log(products);
    return (
        <ul className='item-detail'>
            <Item key={products.id} {...products} />
            <h4>Descripción</h4>
            <h5>$ {products.price}</h5>
            <ul>
                <li>Material: fibra de carbono y goma eva04</li>
                <li>Peso: 370 g </li>
                <li>Balance: alto </li>
                <li>Color: gris, negro y naranja </li>
            </ul>
            <p>La adidas adipower, paleta oficial del n°1 Alejandro Galán, es perfecta para las personas que quiere
             quieren empezar a tomarse más en serio el padel y meterse de lleno en la competicion. Ideal para jugadores agresivos y ofensivos.
            </p>


        </ul>
    )

}

export default ItemDetail