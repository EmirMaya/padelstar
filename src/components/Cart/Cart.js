import { useContext, useEffect, useState } from "react"
import swal from 'sweetalert';
import CartContext from "../context/CartContext"
import './Cart.css'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const [buyer, setBuyer] = useState({ name: '', email: '', phone: 0 })
    const { cart, removeItem, clearCart } = useContext(CartContext)
  
        const orderAlert = () => {

            swal("¡Orden Realizada!", `Productos:   ${cart.map(prod => prod.name )}.  Nombre: ${buyer.name} Total: $${total}`, "success");

        }
    
    const createOrder = () => {

        setLoading(true)
        const objOrder = {
            items: cart,
            data: buyer,
            total: total,
            date: new Date()
        }

        const ids = cart.map(prod => prod.id)

        const batch = writeBatch(firestoreDb)

        const collectionRef = collection(firestoreDb, 'products')

        const outOfStock = []

        getDocs(query(collectionRef, where(documentId(), 'in', ids))).then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()
                const prodQuantity = cart.find(prod => prod.id === doc.id)?.quantity

                if (dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
        }).then(() => {
            if (outOfStock.length === 0) {
                const collectionRef = collection(firestoreDb, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({ name: 'outOfStockError', products: outOfStock })
            }

        }).then(({ id }) => {
            batch.commit()
            console.log(`El id de la orden es ${id}`);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false)
        })

    }

    useEffect(() => {
        if (cart) {
            let totalAmount = 0;
            cart.forEach((product) => {
                totalAmount = totalAmount + product.quantity * product.price
            })
            setTotal(totalAmount)
        }
    }, [cart])

    // if (cart.length === 0) {
    //     return (
    //         <h2>No hay productos en el carrito</h2>
    //     )
    // }

    if (loading) {
        return (
            <h2>Se está generando su orden</h2>
        )
    }





    const handleName = (event) => {
        if (event.target.name === "name") {
            setBuyer({
                ...buyer,
                name: event.target.value
            })
        }
        else if (event.target.name === "email") {
            setBuyer({
                ...buyer,
                email: event.target.value
            })
        }
        else {
            setBuyer({
                ...buyer,
                phone: event.target.value
            })
        };

    }



    return (
        <div>
            <h2>Carrito</h2>
            <ul className="cart-ul">
                {
                    cart.map(prod => <li className="cart-list" key={prod.id}>{prod.name} cantidad: {prod.quantity} precio p/u: {prod.price} subtotal: {prod.quantity * prod.price}   <button className="button-cart-list" onClick={() => removeItem(prod.id)}>Eliminar producto</button></li>)
                }
            </ul>
            <div className="total-box">
                {total === 0 && <h2>No hay productos en el carrito</h2>}
                {total !== 0 && <li className="total">Total: $ {total}</li>}
                <form className="form">
                    <div className="input-box">
                        <label>Nombre</label>
                        <input type="text"
                            onChange={handleName}
                            name="name">
                        </input>
                    </div>
                    <div className="input-box">
                        <label>E-mail</label>
                        <input type="email"
                            onChange={handleName}
                            name="email">

                        </input>
                    </div>
                    <div className="input-box">
                        <label>Celular</label>
                        <input type="number"
                            onChange={handleName}
                            name="phone">
                        </input>
                    </div>

                </form>
                <button className="order-button" onClick={() => (createOrder(), clearCart(), orderAlert())} >Generar Orden</button>
            </div>
        </div >
    )

}

export default Cart