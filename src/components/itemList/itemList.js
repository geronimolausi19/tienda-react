import {Item} from "../item/item"
import { useEffect, useState } from "react"

export const ItemList =  () => {
   
    const [ buzos, setBuzos ] = useState([])
    const buzosData = [
        {
        name: 'hodie',
        description: 'Buzo abrigado',
        price: 450,
        stock: 5,
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
        getProducts( buzosData)
          .then(res =>{ 
            console.log(res)
              setBuzos(res)
              console.log(buzos)
              console.log(res)
            
      })}, []);

return(
 
 <div>
          {buzos.map( (product) => 
          
            <Item product={product} />

          )} 
      
        </div>





)
}