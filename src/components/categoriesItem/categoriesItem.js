import {ItemCount} from "../itemCount/itemCount"
import {Link} from "react-router-dom"
import  { useContext, useState} from "react"
import {CartContext} from "../../context/cartContext/cartContext"
import "./categoriesItem.css"

export const CategoriesItem = ({ item, hasDiscount}) =>{
const [qty, setQty] = useState(1)

const {addToCart} = useContext(CartContext)

const goToPayment = () =>{
addToCart(item.id, item.price,item.imageId,item.stock, item.name, qty)
console.log(item.name)
}


return(
    <main>
    
       <div>
           {}
         <h1 >{item.name}</h1>
         <h4 className={hasDiscount ? "withDiscount" : null}  >{item.price}</h4>
         <img className="imagen" src={item.imageId} alt="producto" />
        <ItemCount stock={item.stock} initial={1} qty={qty} setQty={setQty}/>

        
          <button>  <Link to="/carrito/:carritoId"  onClick={()=>{goToPayment()
            }}
            > Añadir al carrito
            </Link></button>
       
</div>

<Link   to="/"
        onClick={() => {
          setQty(0);
        }}>
            volver
        </Link>
    
       
</main>
)}