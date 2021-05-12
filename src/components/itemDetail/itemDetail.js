import {ItemCount} from "../itemCount/itemCount"
import {Link} from "react-router-dom"
import React, { useState, useEffect} from "react"

export const ItemDetail = ({ item }) =>{
const [qty, setQty] = useState(0)
const [finishButton, setFinishButton] = useState (false)

const onAdd = (qty) => {
    setQty(qty)
}

useEffect(() => {
 if( qty!==0) {
     setFinishButton(true)
 }
 console.log(qty)
}, [qty])

return(
    <main>
    
       <div>
         <h1>{item.name}</h1>
         <h4>{item.price}</h4>
        <img src={item. img} alt="item" />
        
        <ItemCount stock={item.stock} initial={1}  onAdd={onAdd}/>

        {finishButton ? (
            <Link to="/carrito/:carritoId"  onClick={()=>{setQty(0)
            }}
            > vamo a pagar
            </Link>
        )  : null }  
</div>

<Link   to="/"
        onClick={() => {
          setQty(0);
        }}>
            volver
        </Link>
    
       
 


</main>
)}