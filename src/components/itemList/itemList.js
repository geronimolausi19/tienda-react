import {Item} from "../item/item"
import "../item/item.css"
import {getFirestore} from "../../firebase/index"

import { useEffect, useState } from "react"

export function ItemList() {
   
    
const [items, setItems ] = useState([])
const [withoutItems, setWithoutItems] = useState ([false])


useEffect(()=> 
{const db = getFirestore();
  const items = db.collection("items");

  items.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({id: doc.id,...doc.data()
      ,}
      ))
      setItems(data)});
      
    },[])





return(
<div>
  
 

 <div className="div-carts">

          {items.map( (item) => 
          
            <Item item={item} />
            
          )} 
      
        </div>
 ) 
        </div>


       
)
}




