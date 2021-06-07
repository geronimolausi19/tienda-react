
import './App.css';
import { Navbar } from "./components/navbar/nabvar"
import {Footer} from "./components/footer/footer"
import {ItemDetailContainer} from "./components/itemDetailContainer/itemDetailContainer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Home }  from "./pages/home"
import {Cart} from "./components/cart/cart"
import {CategoriesDetail} from "./components/categoriesDetail/categoriesDetail"
import { CartProvider} from "./context/cartContext/cartContext"
import { Form} from "./components/form/form"


function App() {

  return (
    
  <BrowserRouter>
  <CartProvider>
    <div className="page-container">
      <div className="content-wrap">
  < Navbar/>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    
    <Route  path="/carrito/:carritoId">
<Cart/>
    </Route>

    <Route path="/detail/:productId">
      <ItemDetailContainer />
    </Route>
   

    <Route path="/categoria/:categoriaId">
<CategoriesDetail/>
    </Route>

   <Route path="/form/formId">
    <Form/>
   </Route>

    </Switch>

    </div>    
     <Footer/>
    
    </div>
    </CartProvider>
    </BrowserRouter> 
  )
} 
export default App; 



