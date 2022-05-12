import { useState, useEffect } from 'react'
import { getProductsById } from "../../asyncmock";
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

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
            // getProductsById(productId).then(prods => {
            //     setProducts(prods)
            // }).catch(error => {
            //     console.log(error);
            // })
           getDoc(doc(firestoreDb, 'products', productId)).then(response => {
               
               const products = {id: response.id, ...response.data()}
               setProducts(products)
           },[])

        //    return(() => {
        //        setProducts()
        //    })
          

        })
    
    return (
        <div className='detail-container'>
            {
                products  ? 
                <ItemDetail products={products} setCart={setCart} cart={cart}/> :
                 <h2>No existe</h2>
            } 
            
        </div>
    );

}

export default ItemDetailContainer