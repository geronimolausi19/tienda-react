import {ItemCount} from "../itemCount/itemCount"
import {Link} from "react-router-dom"

export const ItemDetail = ({ item }) =>{

    
return(
    <main>
    {item ? 
       <div>
         <h1>{item.name}</h1>
         <h4>{item.price}</h4>
        <img src={item. img} alt="item" />
        
        <ItemCount count={item.stock}/>
</div>


     : null }
        
        
        <Link to="/">
            Volver
        </Link>
 


</main>
)}