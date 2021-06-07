import {useState, useEffect} from "react"
import {ItemDetail} from "../itemDetail/itemDetail"
import{useParams} from "react-router"
import {getFirestore} from "../../firebase/index"

export const ItemDetailContainer = (props) => {

    

const [item, setItem] = useState(false)
  
const { productId } =useParams()


useEffect(()=>{const db = getFirestore();
  const itemCollection = db.collection('items')
  const prod = itemCollection.doc(productId)

  prod.get().then((doc) => {
        if (!doc.exists) {
          console.log("No existe");
        }
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((err) => alert(err))
    

    }, [])






   return(
   <div>
       <ItemDetail item={item}/>
       
       
   </div>
)
}
      

    
