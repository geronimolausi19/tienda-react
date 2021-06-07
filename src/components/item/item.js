import "./item.css"

import {Link} from "react-router-dom"

export const Item = ({item}) => {
  

  return(
  <div >

    <h1 clasname="letter">{item.name}</h1>
  
  <div >
    <img  src={item.imageId} alt="producto" />
    </div>

    <button className="boton"><Link to={`/detail/${item.id}`} > Vamos al producto</Link></button> 

    
    </div>

    
  )
    

}




        








// https://challenge-meli-backend.herokuapp.com/api



// //Componente
// export const Item  =  () => {
//     //Estado
// const [buzos, setBuzos] = useState([])

// //Funcion del boton (contenedora)
// const handleClick = async () => {
//     //solicitamos el buzp
// const solicitudDeBuzo2 = async (buzo) => {
//     console.log("ya vuelvo")

// //Aca guardamos los datos
// const respuesta = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${buzo}`)

// //Se lo pasamos a esta variable y lo guardamos en forma de json
// const bodyRespuesta=  respuesta.json( )
// return bodyRespuesta  
// }
// // Guardamos todas las opcioens con el nombre de gin
// const miBuzo = await solicitudDeBuzo2("mojito")
// console.log(miBuzo)
// //Modiicamos el estado
// setBuzos(miBuzo.drinks)
// console.log(buzos)
// }
// return (
// <div>
//    <button onClick={handleClick}>Buzos con gin</button> 
//    <h1>{buzos}</h1>

//       {buzos && buzos.length > 0 ?  (
//         buzos.map((buzo) => <p>{buzo.strDrinks}</p> ) ): ( <p>Todavia no tengo tragos</p>) }  *
// </div>
// )
// }

// const recibiMiBuzo = ( buzos ) => {
//     setBuzos(buzos)
//     console.log("recibi",buzos)
// }
// const noLoRecibi = ( error ) => {
//     console.log(" e pa trago no haber aqui")
//     setBuzos(error)
// }

