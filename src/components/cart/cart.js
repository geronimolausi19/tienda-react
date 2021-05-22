
import {useContext} from "react"
import {CartList} from "../cartList/cartList"
import {CartContext} from "../../context/cartContext/cartContext"
import {Link} from "react-router-dom"
import React from "react"

export const Cart = () =>{
    const { productsCount,cart} = useContext(CartContext)

    return (
<div>
<h1> Tu Carrito contiene <span>{productsCount()}</span> productos</h1>

{   cart.length ? (

        cart.map((items) => (
       
         <CartList  item={items} />   )  )

        
): (
    <h1>No hay items en el carrito</h1>
)}
</div>
)
}