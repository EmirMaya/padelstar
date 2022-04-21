import { useState, useEffect } from 'react'
import { getProductsById } from "../../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({setCart, cart}) => {
    const [products, setProducts] = useState([])
    const {productId} = useParams()

    // useEffect(() => {
        // fetch('https://api.mercadolibre.com/sites/MLA/search?q=paleta')
        // .then(response => {
        //     response.json()
        // })
        // .then(res => {
        //     setProducts(res.results)
        // })
        // }, [4000])
        useEffect(() => {
            getProductsById(productId).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error);
            })
        })
    
    return (
        <div className='detail-container'>
            <ItemDetail products={products} setCart={setCart} cart={cart}/>
        </div>
    );

}

export default ItemDetailContainer