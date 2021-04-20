
import './App.css';
import { Navbar } from "./components/navbar/nabvar"
import { List } from "./components/list/list"
import { ItemListContainer } from "./components/itemListContainer/itemListContainer"

function App() {
const products = [
  {
    title:"playstation 6",
    price:"240000",
  description:"divertida",
 },
 {
  title:"playstation 5",
  price:"200000",
description:"divertidisima",
},
{
  title:"playstation 4",
  price:"12000",
description:"Messirve",
},
{
  title:"playstation 3",
  price:"35000",
description:"Maquina de matar",
},
{
  title:"playstation 2",
  price:"25000",
description:"La mejor play",
},
{
  title:"playstation 1",
  price:"30000",
description:"la nueva era comienza",
}
]
  return (
    <div className="App">

     < Navbar/>
  <ItemListContainer/>
     <List products={products} />
    </div>
  )
} 
export default App; 



