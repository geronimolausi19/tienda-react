import {useState, useEffect} from "react"
import {ItemDetail} from "../itemDetail/itemDetail"
import{useParams} from "react-router-dom"

export const ItemDetailContainer = () => {
    const remerasData = [
        {
        name: 'Charly Garcia',
        description: 'Remeras negra con estampado',
        price: 450,
        stock: 5,
        id:1,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGGolEK0w6xnMG6V8K-UDKnTKRLf9iW-54Q&usqp=CAU"

      },{
        name: 'Ratones paranoicos',
        description: 'remera blanca con estampado',
        price: 450,
        stock: 5,
        id:2,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUWkdDezO-ta3TVkdTcNWyH9r2Xhh-We-Zpw&usqp=CAU"
      },{
        name: 'El Flaco',
        description: 'Remera negra con estampado',
        price: 450,
        stock: 5,
        id:3,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXPenTcmZ3OXaxxL6niHS3hFmibPluZbBeEw&usqp=CAU"
      },{
        name: 'Almendra',
        description: 'La mejor remera del mundo',
        price: 450,
        stock: 5,
        id:4,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCiq5prfsGu8pN3ASB0J0hdiXkBHRXD_BPTQ&usqp=CAU"
      },{
        name: 'Sumo',
        description: 'remera negra de Luca Prodan',
        price: 450,
        stock: 5,
        id:5,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Qug4b4ps2G8sc65RNFqUWcytFQtMuaXrYQ&usqp=CAU"
        
      }
    ]

const { productId } =useParams()
const [ detalle , setDetalle] =  useState([])


const getProducts = (data) =>{ 
    return new Promise((res, rej) => {
     setTimeout(() =>{
     res(data)
     
     }, 2000);
   });
 }

 useEffect(() => {
    getProducts(remerasData)
      . then((res ) => {
        res. forEach((articulo) => {
            console.log(articulo)
          if (articulo.id === productId) {
            setDetalle(articulo);
          } 
        });
      })
  
  }, []);

   return(
   <div>
       <ItemDetail item={detalle}/>
   </div>
)
}
   

    

    
