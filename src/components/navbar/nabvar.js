
import './navbar.css';
import { CartWidget } from "../cartWidget/cartWidget"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faGlobe} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { CategoriesList } from "../categoriesList/categoriesList"
import {CartContext} from "../../context/cartContext/cartContext"
import {useContext} from "react"


export function Navbar () {
        const {productsCount} = useContext(CartContext)
return (  
  
<header className="topbar">

 <NavLink className="titulo-nav link-titulo"
  to={"/"}>Mestiza</NavLink> 
  
  <p><FontAwesomeIcon icon={faGlobe}/></p>   


<CategoriesList/>

<p><FontAwesomeIcon icon={faGlobe}/></p> 

 <nav className="navigation">
         <ul className="links">
           <li className="link">
<NavLink
to={"/carrito/:carritoId"}
 className="link-titulo cart"
 
  >
  <CartWidget/> {productsCount()}
   </NavLink>
             </li>



         </ul>

 </nav>

</header>)
}

 