
import { useState, useEffect, Fragment} from "react"
import { useParams } from "react-router-dom"
import { CategoriesItem} from "../categoriesItem/categoriesItem"
import { Link} from "react-router-dom"
import { getFirestore} from "../../firebase/index"
import "./categoriesDetail.css"
import {useContext} from "react"


 export const CategoriesDetail = () => {
  const cart = useContext

  const [items, setItems ] = useState([])
            const { categoriaId } =useParams()
 
            
            
useEffect(()=> 
{const db = getFirestore();
  const items = db.collection("items");
  const itemsFiltrados = items.where(`categoryId`, `==`, categoriaId )

  itemsFiltrados.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({id: doc.id,...doc.data()
      
      ,}
      ))

     setItems(data)
        });
          
      console.log(items)
    },[categoriaId])

         return (



           <div>
<h1 className="titulo"> Rock {categoriaId}</h1>

<div className="div-container">
 {items.length< 1 ?
 <Fragment>
   <p>Disculpe amigillo mio, los productos ya volaron!!! Ahora le toca a usted. </p>
 
 </Fragment>
 :
 
 items.map((item)=>
 <div className="carts"><CategoriesItem item={item}   /> </div>
 )

 }
 
</div>
<Link to= "/"><button className="botonVolver">Volver</button></Link>    
         </div>
         )
 }




