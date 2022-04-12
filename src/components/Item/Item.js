import './Item.css'

const Item = ({name, img, stock}) => {
    return(
        <section className="item-card">
             <img className="item-image" src={img} alt={name} />
             <h3 className="item-name">{name}</h3>
             <button className="item-description">Comprar</button>
             <p className="item-stock">Stock Disponible : {stock}</p>
        </section>
    )
}

export default Item