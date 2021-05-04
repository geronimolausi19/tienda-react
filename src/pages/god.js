import { Link } from "react-router-dom"
import { useParams } from "react-router"

export function God () {
const {pantalonId} =  useParams()

const pantalones = [
    {
    name:"negro",
    apellido:"hola"
},
{
  name:"rojo",  
  apellido:"hno"
},
{
    name:"azul",
    apellido:"chau"
},]

function getPantalon(pantalonId){
    const myPantalon = pantalones.find((pantalon)=> pantalon.name ===pantalonId)
    console.log(myPantalon)
return myPantalon
}
   return(
         <div>
  <h1>Tu lompa</h1>
    <p>{getPantalon(pantalonId)}</p>
{pantalones.map((pantalon)=> (
       <button>

  <Link to={`/god/${pantalon.name}`}>pantalon {pantalon.name}</Link>
         </button>
     )
 )}

<p>Pantalon {pantalonId}</p>
    </div>
    )
}