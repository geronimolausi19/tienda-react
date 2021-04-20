
import './navbar.css';
import { CartWidget } from "../cartWidget/cartWidget"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faGlobe} from "@fortawesome/free-solid-svg-icons"

export const Navbar = () => {
  
return (  
<header className="topbar">

 <p className="logo"><span className="titulo-nav">Mestiza</span></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p>
 <p><FontAwesomeIcon icon={faGlobe}/></p>

 <nav className="navigation">
         <ul className="links">
           <li className="link">
           <a className="link-titulo" href="https://www.youtube.com/watch?v=rUGi44utwCA"><CartWidget/></a>
             </li>
           <li className="link">
           <a className="link-titulo" href="https://www.youtube.com/watch?v=zCNoy6rOBYA">Carrito</a>
             </li>
         </ul>

 </nav>

</header>)
}

 