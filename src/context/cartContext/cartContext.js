import { createContext } from "react"



const itemExample =     {
    name: 'Charly Garcia',
    description: 'Remeras negra con estampado',
    price: 450,
    stock: 5,
    id:"1",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGGolEK0w6xnMG6V8K-UDKnTKRLf9iW-54Q&usqp=CAU",
    category:"blanca"

    

  }


export const CartContext = createContext([itemExample])

export const CartProvider = CartContext.Provider