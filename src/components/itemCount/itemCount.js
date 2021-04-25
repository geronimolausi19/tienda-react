import React, { useState } from "react"
export const ItemCount = (props) => {
   
const stock = props.stock

const [count, setCount] = useState(1)

 function Sumar (){
return (
    <div>
    <button onClick={()=> 
        {if(stock>count){
             setCount(count + 1)}
             }
             }>
    +
</button>
</div>)
 }

 function Restar (){
    return (
    <div>
    <p>Cantidad de items en el carrito {count}</p>
    <button onClick={()=> {if(count>0){
        setCount(count - 1)}
        }
        }>
            -
            </button>
    </div>)
 }
  

    return (
<div>
        <Sumar/>
        <Restar/>
        </div>
    )
        
   }
   
  






//  function Sumar(){
//     const [count, setCount] = useState(1)
//     console.log(count)
//     return (
//     <div>
        
//     <button onClick={()=> setCount(count + 1)}>
//     +
// </button>

// <p>Cantidad de items en el carrito {count}</p>
// <button onClick={() => setCount(count - 1)}>-</button>
// </div>
//     )
    
// }

// function Resta(){
//     const [count, setCount] = useState(1)
//     console.log(count)
//     return (
//         <div>

// <button onClick={() => setCount(count - 1)}>-</button>
// </div>
// )
// }