
import {Link} from "react-router-dom"
import  { useContext, useState, useEffect} from "react"
import {CartContext} from "../../context/cartContext/cartContext"
import "./itemDetail.css"
import {ItemCount} from "../itemCount/itemCount"
export const ItemDetail = ({ item }) =>{
  
const [qty, setQty] = useState(1)
  
const {addToCart} = useContext(CartContext)

const goToPayment = () =>{

addToCart(item.id, item.price,item.imageId,item.stock, item.name, qty)

}


return(
    <main>
    <h1 className="titulo-detail">Informacion sobre el producto</h1>
       <div className="detail" >


       <img className="imagen-detail" src={item.imageId} alt="producto" />
       
          <h1>{item.name}</h1>
         <h2>Precio: ${item.price}</h2>
         <h3>{item.description}</h3> 
         
          <ItemCount stock={item.stock} qty={qty} setQty={setQty} />

         <button onClick={goToPayment} className="boton-detail">  <Link to="/carrito"  
            > Añadir al carrito
            </Link></button>

            </div>



         <div>
    
  <div>
   
            </div>
            </div>


<Link   to="/"
        onClick={() => {
          setQty(0);
        }}><button className="boton-detail-volver">volver</button>
           
        </Link>
</main>

)}