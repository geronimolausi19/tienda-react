
import './navbar.css';
import { CartWidget } from "../cartWidget/cartWidget"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faGlobe} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { CategoriesList } from "../categoriesList/categoriesList"




export function Navbar ({itemQty=0}) {
  
return (  
  
<header className="topbar">

 <NavLink className="titulo-nav link-titulo"
  to={"/"}>Mestiza</NavLink> 
 <p><FontAwesomeIcon icon={faGlobe}/></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p> 


 <nav className="navigation">
         <ul className="links">
           <li className="link">
<NavLink
to={"/carrito/:carritoId"}
 className="link-titulo"
  activeClassName="active-nav"
  >
  <CartWidget/>({itemQty})
   </NavLink>
             </li>

<li>
<CategoriesList/>
  
</li>


         </ul>

 </nav>

</header>)
}

 