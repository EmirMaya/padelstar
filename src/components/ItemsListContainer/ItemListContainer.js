// import ItemCounter from "../ItemCounter/ItemCounter"
import { useState, useEffect } from "react";
import { getCategories, getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import '../../index.css'
import { useParams, NavLink } from "react-router-dom";


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const {categoryId} = useParams()
    
    useEffect(() => {
        getCategories().then(categories => {
            setCategories(categories)
        })
    },[])
     
    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error);
        })
    },[categoryId])

   
    console.log(props.greeting);
    return (
        <div>
           
            <h2>{props.greeting}</h2>
            <div>
                {categories.map(cat => <NavLink className="category-link" key={cat.id} to={`/list/${cat.id}`}>{cat.description}</NavLink>)}
            </div>
            
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;