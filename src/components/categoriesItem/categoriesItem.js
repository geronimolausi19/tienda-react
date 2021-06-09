
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
    <div >

       <div>
         <h1 >{item.name}</h1>
         
         <img src={item.imageId} alt="producto" />
       <div>
          <button className="botonDetail">  <Link to={`/item/${item.id}`} 
            
            > Vamos al producto
            </Link></button>  
            </div>
</div>

</div>


    
       
</main>

)}