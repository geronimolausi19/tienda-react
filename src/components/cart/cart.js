import "./cart.css"
import {useContext, useState} from "react"
import {CartList} from "../cartList/cartList"
import {Modal} from "../modal/modal"
import {CartContext} from "../../context/cartContext/cartContext"
import {Link} from "react-router-dom"
import React from "react"
import {GlobalStyle} from "../globalStyled/globalStyle"


export const Cart = () =>{
    const { productsCount,cart, totalPrice} = useContext(CartContext)

    const [showModal, setShowModal] = useState(false)

const openModal = () =>{
    setShowModal(true)
}


const closeModal = () =>{
    setShowModal(false)
}




    return (
<div className="cart-container">
    <h1 className="titulo-carrito">Carrito</h1>
<p className="p-carrito"> Cantidad de productos: <span>{productsCount()}</span> </p>
<div className="item-list">
{   cart.length ? (

        cart.map((items) => (
       
         <CartList  item={items} />  )  )

        
): (
    <div className="item-carrito-cart">
    <h1>Tu carrito esta vacio</h1>
    </div>
)}

</div> 
<div>
    <h1 className="p-carrito"> Precio Total: ${totalPrice()}</h1>

<button className="boton-cart" onClick={openModal} > Finalizar Compra </button>
{showModal && <Modal showModal={showModal} setShowModal={setShowModal} closeModal={closeModal}/>}


</div>


</div>
)
}






















// const db= getFirestore()
//  const itemsToUpdate= db.collection("items")
//  .where(firebase.firestore.FieldPath.documentId(), "in", items.map(i =>i.id))

//  const query =  itemsToUpdate.get()
//  const batch = db.batch()

//    const outOfStock=[]         
//    query.docs.forEach((docSnapshot, idx) =>{
//        if(docSnapshot.data().stock >= items[idx].qty){
//            batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - items[idx].qty })
//        }else {
//            outOfStock.push({...docSnapshot.data(), id:docSnapshot.id})
//        }
//    } )

//    if(outOfStock.length=== 0) {
//          batch.commit()
//    }
       
