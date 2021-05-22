
import {CartContext} from "../../context/cartContext/cartContext"

import {useContext} from "react"

export const CartList = ({item}) => {
    const {removeFromCart} = useContext(CartContext)

    const calculatePrice = (price, qty) => {
        return price * qty;}

    return(
<div>

<h1>{item.name}</h1>
<h2>${calculatePrice(item.price, item.qty)}</h2>
<img className="imagen" src={item.imageId} alt="producto" />

<button onClick={() =>{removeFromCart(item)}}>Remover del carrito </button>

</div>

    )
}