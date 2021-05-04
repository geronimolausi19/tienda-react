import './itemListContainer.css';
import {ItemCount} from "../itemCount/itemCount"
import {ItemList} from "../itemList/itemList"

export function ItemListContainer () {
return(
   <div className="body">
   <p className="texto">Remeras de tus bandas preferidas de todo el rock Nacional</p>

<ItemCount stock="5"/>
<ItemList/>
</div>
)


}
