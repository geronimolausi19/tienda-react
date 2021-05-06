
import './App.css';
import { Navbar } from "./components/navbar/nabvar"

import {ItemDetailContainer} from "./components/itemDetailContainer/itemDetailContainer"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { Home }  from "./pages/home"
import { God } from "./pages/god"
import { CategoriesList} from "./components/categoriesList/categoriesList"


function App() {

  return (
  <BrowserRouter>
  < Navbar/>
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    
    <Route  path="/god/:pantalonId">
<God/>
    </Route>

    <Route path="/detail/:productId">
      <ItemDetailContainer/>
    </Route>
    <Route path="/categories/:categoriaId">
<CategoriesList/>

    </Route>

    </Switch>
    </BrowserRouter> 
  )
} 
export default App; 



