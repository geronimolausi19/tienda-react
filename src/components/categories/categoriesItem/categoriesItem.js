
import {Link} from "react-router-dom"

export const CategoriesItem = ({item}) =>{
   

    console.log({item})
        return(
            <main>
            {item ? 
               <div>
                 <h1>{item.name}</h1>
                 <h4>{item.price}</h4>
                <img src={item. img} alt="item" />
                
                
        </div>
        
        
             : null }
                
                
                <Link to="/">
                    Volver
                </Link>
                </main>
 )}