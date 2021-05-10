import {Item} from "../item/item"
import "../item/item.css"

import { useEffect, useState } from "react"

export function ItemList() {
   
    const [ remeras, setRemeras ] = useState([])
    const remerasData = [

      {
      name: 'Charly Garcia',
      description: 'Remeras negra con estampado',
      price: 450,
      stock: 5,
      id:"1",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGGolEK0w6xnMG6V8K-UDKnTKRLf9iW-54Q&usqp=CAU",
      category:"blanca"

      

    },{
      name: 'Ratones paranoicos',
      description: 'remera blanca con estampado',
      price: 450,
      stock: 5,
      id:"2",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWkdDezO-ta3TVkdTcNWyH9r2Xhh-We-Zpw&usqp=CAU",
      category:"color"
    },{
      name: 'El Flaco',
      description: 'Remera negra con estampado',
      price: 450,
      stock: 5,
      id:"3",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPenTcmZ3OXaxxL6niHS3hFmibPluZbBeEw&usqp=CAU",
      category:"blanca"

    },{
      name: 'Almendra',
      description: 'La mejor remera del mundo',
      price: 450,
      stock: 5,
      id:"4",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiq5prfsGu8pN3ASB0J0hdiXkBHRXD_BPTQ&usqp=CAU",
      category:"blanca"
    },{
      name: 'Sumo',
      description: 'remera negra de Luca Prodan',
      price: 450,
      stock: 5,
      id:"5",
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-u6eWKZPVEMvqQnO9t7W8DTAcgVLcTtXAw&usqp=CAU",
      category:"color"
      
    }
  ]

    const getProducts = new Promise((res, rej) => {
        
        res(remerasData)
          
     
      }); 
      useEffect(() => {
        getProducts
          .then((res) => setRemeras(res))
             
    
       },[]);

return(
 
 <div className="div-carts">
          {remeras.map( (product) => 
          
            <Item product={product} />
          
          )} 
      
        </div>





)
}