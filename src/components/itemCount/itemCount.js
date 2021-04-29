import React, { useState } from "react"
export const ItemCount = (props) => {
   
const stock = props.stock

const [count, setCount] = useState(1)

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
        <button onClick={Sumar} > + </button>
        <p>Cantidad de items en el carrito {count}</p>
        <button onClick={Restar} > - </button>
    </div>
    )
   }
  

 



