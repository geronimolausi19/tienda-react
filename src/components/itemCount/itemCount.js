import React, { useState, useEffect} from "react"
import "./itemCount.css"

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

          <p>Cantidad de items en el carrito: {qty} </p> 
    <div className="count-container" >
        <div >
           <button className="restar"  onClick={Restar} > - </button>
        </div>
        
        <div >
        <button className="sumar"  onClick={Sumar}  > + </button>
        </div>
     

        </div>
<br/>
<div>
        

     </div>
     </div>
    )
}
  

 



