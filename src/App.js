
import './App.css';
import { Navbar } from "./components/navbar/nabvar"

import {ItemDetailContainer} from "./components/itemDetailContainer/itemDetailContainer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Home }  from "./pages/home"
import { Usuario } from "./pages/carrito"
import {CategoriesDetail} from "./components/categoriesDetail/categoriesDetail"
import { CartProvider} from "./context/cartContext/cartContext"

function App() {

  return (
  <BrowserRouter>
  <CartProvider>
  < Navbar/>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    
    <Route  path="/carrito/:carritoId">
<Usuario/>
    </Route>

    <Route path="/detail/:productId">
      <ItemDetailContainer/>
    </Route>
   

    <Route path="/categoria/:categoriaId">
<CategoriesDetail/>
    </Route>

   

    </Switch>
    </CartProvider>
    </BrowserRouter> 
  )
} 
export default App; 



