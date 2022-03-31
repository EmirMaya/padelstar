const ItemListContainer = (props) => {
    console.log(props.greeting);
    return(
        <h2>{props.greeting}</h2>
    );
};

export default ItemListContainer;