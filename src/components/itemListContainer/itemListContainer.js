import './itemListContainer.css';
import {ItemCount} from "../itemCount/itemCount"

export const ItemListContainer = () => {
return(
   <div>
   <p className="texto">Remeras de tus bandas preferidas de todo el rock Nacional</p>

<ItemCount stock="5"/>
</div>
)


}
