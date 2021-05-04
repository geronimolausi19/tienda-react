
import './navbar.css';
import { CartWidget } from "../cartWidget/cartWidget"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faGlobe} from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"

export function Navbar () {
  
return (  
<header className="topbar">

  <p className="logo"><span className="titulo-nav">Mestiza</span></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p> 


 <nav className="navigation">
         <ul className="links">
           <li className="link">
<NavLink
to={"/god/:pantalonId"}
 className="link-titulo"
  activeClassName="active-nav"
  >
  <CartWidget/>
   </NavLink>
             </li>




         </ul>

 </nav>

</header>)
}

 