
import { useState, useEffect, Fragment} from "react"
import { useParams } from "react-router-dom"
import { CategoriesItem} from "../categoriesItem/categoriesItem"
import { Link} from "react-router-dom"
import { getFirestore} from "../../firebase/index"

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

 {items.length< 1 ?
 <Fragment>
   <p>Disculpe amigillo mio, los productos ya volaron!!! Ahora le toca a usted. </p>
   <Link to= "/">Vuele</Link>
 </Fragment>
 :
 items.map((item)=>
 <CategoriesItem item={item}   />
 )

 }
</div>
         )


 }





//    const getProducts  = new Promise((res, rej) => {
                 
//             res(remerasData)
                 
                 
//                });
             
            
//  useEffect(() => { 
//    getProducts   . then((res ) => {
//       console.log(res)
//     const productosFiltrados= res.filter((articulo) => 
//    articulo.category === categoriaId) 
          
//    console.log(productosFiltrados)
//           setProductosCategoria(productosFiltrados)
//           console.log(productosCategoria)
        
//       });
//    } , [categoriaId])