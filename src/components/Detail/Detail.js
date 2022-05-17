import './Detail.css'

const Detail = ({ name, img, stock, price }) => {
    return (
        <section className="item-card-detail">
            <img className="image-detail" src={img} alt={name} />
            <div>
                <h3 className="name-detail">{name}</h3>
                <p className="price-detail">$ {price}</p>
              
                <p className="stock-detail">Stock Disponible : {stock}</p>
            </div>
        </section>
    )
}

export default Detail