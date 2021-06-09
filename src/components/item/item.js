import "./item.css"

import {Link} from "react-router-dom"

export const Item = ({item}) => {
  

  return(
  <div >

    <h1 clasname="letter">{item.name}</h1>
  
  <div >
    <img  src={item.imageId} alt="producto" />
    </div>

    <button className="boton"><Link to={`/item/${item.id}`} > Vamos al producto</Link></button> 

    
    </div>

    
  )
    

}




        










