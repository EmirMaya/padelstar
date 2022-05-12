import { useContext, useEffect, useState } from "react"
import CartContext from "../context/CartContext"
import './Cart.css'
import { getDocs, writeBatch, query, where, collection, documentId, addDoc } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase/index'
const Cart = () => {
    const [loading, setLoading] = useState(false)
    const [total, setTotal] = useState(0)
    const { cart, removeItem } = useContext(CartContext)


    const createOrder = () => {
        setLoading(true)
        const objOrder = {
            items: cart,
            buyer: {
                name: "Emir Maya",
                phone: "2604393939",
                email: "emir@gmail.com"
            },
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


    return (
        <div>
            <h2>Carrito</h2>
            <ul className="cart-ul">
                {
                    cart.map(prod => <li className="cart-list" key={prod.id}>{prod.name} cantidad: {prod.quantity} precio p/u: {prod.price} subtotal: {prod.quantity * prod.price} <button className="button-cart-list" onClick={() => removeItem(prod.id)}>X</button></li>)
                }
                {total === 0 && <h2>No hay productos en el carrito</h2>}
                {total !== 0 && <li className="cart-list">Total: $ {total}</li>}
                <button className="button-cart-list" onClick={() => createOrder()}>Generar Orden</button>
            </ul>
        </div >
    )

}

export default Cart