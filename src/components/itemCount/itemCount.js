import React, { useState } from "react"
import {Link} from "react-router-dom"

export const ItemCount = ({stock, initial, onAdd}) => {
   
const [count, setCount] = useState(initial)

const Sumar = () => {         
    if(count < stock) {     
      setCount(count + 1)   
     
    }
}

const Restar = () => {        
    if(count > 1) {        
      setCount(count - 1)      
      
    }
}
  
return (   
  <div>        
    <div>
        <button onClick={Sumar} > + </button>
        <p>Cantidad de items en el carrito, {count} </p>
        <button onClick={Restar} > - </button>
        </div>
<br/>
<div>
        <button >
    <Link onClick={ () => onAdd(count) } >añadir al carrito</Link></button>
    </div>
     </div>
    )
}
  

 



