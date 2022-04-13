import Detail from '../Detail/Detail'
import './ItemDetail.css'
const ItemDetail = ({ products }) => {
    console.log(products);
    return (
        <div className='item-detail'>
            <Detail  key={products.id} {...products} />
            <h4>Descripción</h4>
            <p>
                {products.description}
            </p>


        </div>
    )

}

export default ItemDetail