import { useState, useEffect } from 'react'
import { getProductsById } from "../../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
const ItemDetailContainer = () => {
    const [products, setProducts] = useState([])

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
            getProductsById(1).then(prods => {
                setProducts(prods)
            }).catch(error => {
                console.log(error);
            })
        })
    
    console.log(products);
    return (
        <div className='detail-container'>
      
            <ItemDetail products={products}/>
        </div>
    );

}

export default ItemDetailContainer