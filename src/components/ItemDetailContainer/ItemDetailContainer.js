import { useState, useEffect } from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = ({setCart, cart}) => {
    const [products, setProducts] = useState([])
    const {productId} = useParams()

 
        useEffect(() => {
       
           getDoc(doc(firestoreDb, 'products', productId)).then(response => {
               
               const products = {id: response.id, ...response.data()}
               setProducts(products)
           },[])

      
          

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