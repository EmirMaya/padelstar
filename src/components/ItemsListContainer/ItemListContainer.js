import ItemCounter from "../ItemCounter/ItemCounter"
import { useState, useEffect } from "react";
import { getProducts } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import '../../index.css'
const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
     
    useEffect(() => {
        getProducts().then(prods => {
            setProducts(prods)
        }).catch(error => {
            console.log(error);
        })
    })

    // const handleOnAdd = (quantity) => {
    //     console.log(`Se agregaron ${quantity} productos al carrito`)
    // }
    console.log(props.greeting);
    return (
        <div>
            <h2>{props.greeting}</h2>
            {/* <ItemCounter initial="1" stock="5" onAdd={handleOnAdd} /> */}
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;