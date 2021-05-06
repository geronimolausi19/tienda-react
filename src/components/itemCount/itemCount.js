import React, { useState } from "react"
export const ItemCount = ({stock}) => {
   


const [count, setCount] = useState(1)

const Sumar = () => {         
    if(count < stock) {     
      setCount(count + 1)   
      console.log(count)  
    }
}

const Restar = () => {        
    if(count > 1) {        
      setCount(count - 1)      
      console.log(count)
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
  

 



