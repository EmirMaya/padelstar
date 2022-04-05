import ItemCounter from "../ItemCounter/ItemCounter"



const ItemListContainer = (props) => {

    const handleOnAdd = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`)
    }
    console.log(props.greeting);
    return (
        <div>
            <h2>{props.greeting}</h2>
            <ItemCounter initial="1" stock="5" onAdd={handleOnAdd} />
        </div>
    );
};

export default ItemListContainer;