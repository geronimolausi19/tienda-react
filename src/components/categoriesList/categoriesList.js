import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import "./categoriesList.css"

import { NavLink } from "react-router-dom"

 export const CategoriesList = () => {
   const { categoriaId } = useParams()

   const [productosCategoria, setProductosCategoria] = useState(false)

  const categoryData = [ {id: '1', name: 'Nacional'},
   {id: '2', name: 'Internacional'}
 ]


  return (
 
     <a onClick={() => setProductosCategoria(!productosCategoria)}><div className="grids"> {categoryData.map((categoria) => (


          <div> <Link to={`/categoria/${categoria.name}`}> <p className="links"> {categoria.name} </p>  </Link>
          </div>
       ))} </div>    </a>



 );

  
      
  

}



















