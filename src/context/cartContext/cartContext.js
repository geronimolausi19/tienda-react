import { createContext, useState}  from "react"

export const CartContext = createContext()

export const  CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    const [quantity, setQuantity] = useState (0)

const addToCart = (item) => {
    setCart ([...cart, item])
    setQuantity(cart.length)
    console.log(cart)
    
}


const removeFromCart = (itemId) =>{
const newCart = cart.filter(item=>item.id !== itemId)

    setCart (newCart)
}

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, quantity }}>
         {children} {console.log(cart)}
          </CartContext.Provider>
    )
}