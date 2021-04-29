



export const Item = (props) => {
   
   const products = props.product
  
  return(
    <h1>{products.name}</h1>
  )
    

}









// useEffect(() => {
//     getBuzos( buzosData )

//     .then(result => {
//         console.log(result)
//         setBuzos(result);
//     });
// }, [])








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


// let solicitudDeBuzo = new Promise ((resolve, rejected) =>{
// console.log("waaxxs me traes algo asi medio, descampanante")
// setTimeout(() => {
//     resolve("caipirosshca")
// }, 2000)
// })
// .then(recibiMiBuzo)
// .catch(noLoRecibi)