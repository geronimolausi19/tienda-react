import React, { useState, useEffect} from "react"
import {Link} from "react-router-dom"
export const ItemCount = ({stock, initial, qty, setQty}) => {
   


const Sumar = () => {         
    if(stock > qty ) {     
      setQty(qty + 1)   
     
    }
}

const Restar = () => {        
    if(qty > 1) {        
      setQty(qty - 1)       
     
    }
}


useEffect(() => {
  console.log(qty)
}, [qty])


return (   
  <div>        
    <div>
        <button onClick={Sumar} > + </button>
        <p>Cantidad de items en el carrito, {qty} </p>
        <button onClick={Restar} > - </button>
        </div>
<br/>
<div>
        

     </div>
     </div>
    )
}
  

 



