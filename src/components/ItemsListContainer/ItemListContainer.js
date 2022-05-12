// import ItemCounter from "../ItemCounter/ItemCounter"
import { useState, useEffect } from "react";
import { getCategories, getProducts } from "../../asyncmock";
import { getDocs, collection, query, where, getDoc } from "firebase/firestore";
import ItemList from "../ItemList/ItemList";
import '../../index.css'
import { useParams, NavLink } from "react-router-dom";
import { firestoreDb } from "../../services/firebase";

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
        // getDocs(collection(firestoreDb, 'products')).then(response => {
        //     const categories = response.docs.map( doc =>{
        //         return{category: doc.category}
        //     })
        //     setCategories(categories)
        // })
    }, [])

    useEffect(() => {
        const collectionRef = categoryId ? query(collection(firestoreDb, 'products'), where('category', '==', categoryId)) : collection(firestoreDb, 'products');
        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return { id: doc.id, ...doc.data() }
            })
            setProducts(products)
        })

    }, [categoryId])
    
    if (products.length === 0) {
        return(
            <h2>No hay productos</h2>
        )
    }

    console.log(props.greeting);
    return (
        <div>

            <h2>{props.greeting}</h2>
            <div>
                {categories.map(cat => <NavLink className="category-link" key={cat.id} to={`/list/${cat.id}`}>{cat.description}</NavLink>)}
            </div>

            <ItemList products={products} />
        </div>
    );
};

export default ItemListContainer;