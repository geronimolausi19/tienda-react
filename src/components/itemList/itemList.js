
import {Item} from "../item/item"
import "./itemList.css"
import {getFirestore} from "../../firebase/index"

import { useEffect, useState } from "react"

export function ItemList() {
   
    
const [items, setItems ] = useState([])



useEffect( async ()=> 
{const db = getFirestore();
  const items = db.collection("items").where("stock",">",0);

  await items.get().then((snapshot) => {
    const data =  snapshot.docs.map((doc) => ({id: doc.id,...doc.data()}))
      setItems(data)});
      
    },[])
return(

 <div className="div-container">

          {items.map( (item) => 
          
           <div className="carts"> <Item item={item} /> </div>
            
          )} 
      
        </div>
        
 ) 
        
}




