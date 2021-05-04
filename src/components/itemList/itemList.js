import {Item} from "../item/item"
import { useEffect, useState } from "react"

export const ItemList =  () => {
   
    const [ remeras, setRemeras ] = useState([])
    const remerasData = [
        {
        name: 'Charly Garcia',
        description: 'Remeras negra con estampado',
        price: 450,
        stock: 5,
        id:1
      },{
        name: 'Ratones paranoicos',
        description: 'remera blanca con estampado',
        price: 450,
        stock: 5,
        id:2
      },{
        name: 'El Flaco',
        description: 'Remera negra con estampado',
        price: 450,
        stock: 5,
        id:3
      },{
        name: 'Almendra',
        description: 'La mejor remera del mundo',
        price: 450,
        stock: 5,
        id:4
      },{
        name: 'Sumo',
        description: 'remera negra de Luca Prodan',
        price: 450,
        stock: 5,
        id:5
        
      }
    ]

    const getProducts = (data) =>{ 
       return new Promise((res, rej) => {
        setTimeout(() =>{
        res(data)
          
        }, 2000);
      });
    }

      useEffect(() => {
        getProducts( remerasData )
          .then(res =>{ 
              setRemeras(res)
             
      })
       },[]);

return(
 
 <div>
          {remeras.map( (product) => 
          
            <Item product={product} />
          
          )} 
      
        </div>





)
}