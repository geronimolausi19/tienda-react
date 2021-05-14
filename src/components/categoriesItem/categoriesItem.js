


import {useContext} from "react"
import { CartContext} from "../../context/cartContext/cartContext"

import {Link} from "react-router-dom"

export const CategoriesItem = ({item}) =>{
    
    
     const cart = useContext(CartContext)


    console.log("cart=>" ,cart)
        return(
            <main>
            {item ? 
               <div>
                 <h1>{item.name}</h1>
                 <h4>{item.price}</h4>
                <img src={item. img} alt="item" />
                
                
        </div>
        
        
             : null }
                
                
                <Link to="/">
                    Volver
                </Link>
                </main>
 )}