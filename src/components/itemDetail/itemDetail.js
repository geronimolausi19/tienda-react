import {ItemCount} from "../itemCount/itemCount"
import {Link} from "react-router-dom"

export const ItemDetail = ({ item }) =>{

return(
    <main>
<div>
        <h2>{item.name}</h2>
        <h4>${item.price}</h4>
        <img src={item. img} alt="item" />

        </div>
        <Link to="/">
            Volver
        </Link>

<div>
<ItemCount stock="5"/>
</div>

</main>
)}