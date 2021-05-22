
import { useState, useEffect, Fragment} from "react"
import { useParams } from "react-router-dom"
import { CategoriesItem} from "../categoriesItem/categoriesItem"
import { Link} from "react-router-dom"

import {useContext} from "react"


 export const CategoriesDetail = () => {

  
  const cart = useContext

                const remerasData = [
            
                    {
                    name: 'Charly Garcia',
                    description: 'Remeras negra con estampado',
                    price: 450,
                    stock: 5,
                    id:"1",
                    imageId:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGGolEK0w6xnMG6V8K-UDKnTKRLf9iW-54Q&usqp=CAU",
                    category:"Nacionales"
            
                    
            
                  },{
                    name: 'Ratones paranoicos',
                    description: 'remera blanca con estampado',
                    price: 450,
                    stock: 5,
                    id:"2",
                    imageId:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWkdDezO-ta3TVkdTcNWyH9r2Xhh-We-Zpw&usqp=CAU",
                    category:"Nacionales"
                  },{
                    name: 'El Flaco',
                    description: 'Remera negra con estampado',
                    price: 450,
                    stock: 5,
                    id:"3",
                    imageId:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPenTcmZ3OXaxxL6niHS3hFmibPluZbBeEw&usqp=CAU",
                    category:"Internacionales"
            
                  },{
                    name: 'Almendra',
                    description: 'La mejor remera del mundo',
                    price: 450,
                    stock: 5,
                    id:"4",
                    imageId:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiq5prfsGu8pN3ASB0J0hdiXkBHRXD_BPTQ&usqp=CAU",
                    category:"Nacionales"
                  },{
                    name: 'Sumo',
                    description: 'remera negra de Luca Prodan',
                    price: 450,
                    stock: 5,
                    id:"5",
                    imageId :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA-u6eWKZPVEMvqQnO9t7W8DTAcgVLcTtXAw&usqp=CAU",
                    category:"Internacionales"
                    
                  }
                ]
            
            const { categoriaId } =useParams()
            const [productosCategoria, setProductosCategoria] =  useState([])
            const [categoriesWithDiscount] = useState (["Nacionales"])
            
            const getProducts  = new Promise((res, rej) => {
                 
            res(remerasData)
                 
                 
               });
             
            
 useEffect(() => { console.log(productosCategoria) 
   getProducts     . then((res ) => {
      console.log(res)
    const productosFiltrados= res.filter((articulo) => 
   articulo.category === categoriaId) 
          
   console.log(productosFiltrados)
          setProductosCategoria(productosFiltrados)
          console.log(productosCategoria)
        
      });
   } , [categoriaId])
           
   
   const hasDiscounts = (categoriaId) => categoriesWithDiscount.some(category=> category ===categoriaId)
            
         return (
<div>
{hasDiscounts(categoriaId)&& <p>Todo en esta Categoria esta con descuento del 30% </p>}
 {productosCategoria.length< 1 ?
 <Fragment>
   <p>Disculpe amigillo mio, los productos ya volaron!!! Ahora le toca a usted. </p>
   <Link to= "/">Vuele</Link>
 </Fragment>
 :
 productosCategoria.map((item)=>
 <CategoriesItem item={item} hasDiscount={hasDiscounts(categoriaId)}  />
 )

 }
</div>
         )


 }





