
import {CartContext} from "../../context/cartContext/cartContext"
import {useContext, useEffect,useState} from "react"
import "./cartList.css"
import {ItemCount} from "../itemCount/itemCount"

export const CartList = ({item}) => {
    const {removeFromCart, cart,sumar,restar} = useContext(CartContext)
    
    useEffect(() => {
        console.log(cart)
        }, [])
    
        const calculatePrice = (price, qty) => {
        return price * qty;}

    return(

<div className="item-carrito">

<img className="imagen" src={item.imageId} alt="producto" />
<h1 className="item-name">{item.name}</h1>
{/* 
<ItemCount stock={item.stock} initial={qty} qty={qty} setQty={setQty}/> */}
<button className="boton-cart-list" onClick={()=>{restar(item)}}>-</button>

<h2>${calculatePrice(item.price, item.qty)}</h2>
<button className="boton-cart-list" onClick={()=>{sumar(item)}}>+</button>



<button className="boton-cart-list" onClick={() =>{removeFromCart(item)}}>Remover del carrito </button>

</div>

    )
}





{/* <p>cantidad a comprar{item.qty}, stock restante{item.stock}</p> */}