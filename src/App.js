
import './App.css';
import { Navbar } from "./components/navbar/nabvar"

import {ItemDetailContainer} from "./components/itemDetailContainer/itemDetailContainer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Home }  from "./pages/home"
import { Usuario } from "./pages/god"
import {CategoriesDetail} from "./components/categories/categoriesDetail/categoriesDetail"


function App() {

  return (
  <BrowserRouter>
  < Navbar/>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    
    <Route  path="/god/:suarioId">
<Usuario/>
    </Route>

    <Route path="/detail/:productId">
      <ItemDetailContainer/>
    </Route>
   

    <Route path="/categoria/:categoriaId">
<CategoriesDetail/>
    </Route>

   

    </Switch>
    </BrowserRouter> 
  )
} 
export default App; 



