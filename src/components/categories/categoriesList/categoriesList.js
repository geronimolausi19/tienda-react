import { useState, useEffect} from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
  import { CategoriesItem } from "../categoriesDetail/categoriesDetail"


 export const CategoriesList = () => {
   const { categoriaId } = useParams()

   const [productosCategoria, setProductosCategoria] = useState(false)

  const categoryData = [ {id: '1', name: 'Nacionales'},
   {id: '2', name: 'Internacionales'}
 ]


  return (
 <div>
     <a onClick={() => setProductosCategoria(!productosCategoria)}> {categoryData.map((categoria) => (
           <Link to={`/categoria/${categoria.name}`}>{categoria.name}  </Link>
       ))}</a>


   </div>


 );

  
      
  

}



















// export const CategoriesList = () => {
//   const { categoriaId } = useParams()

//   const [productosCategoria, setProductosCategoria] = useState(false)

//   const categoryData = [ {id: '1', name: 'Nacionales'},
//   {id: '2', name: 'Internacionales'}
// ]


//   return (
// <div>
//     <a onClick={() => setProductosCategoria(!productosCategoria)}> {categoryData.map((category) => (
//           <Link to={`/category/${category.id}`}>{category.name}  </Link>
//         ))}</a>


//   </div>



// );

  
      
  

// }





// export const CategoriesList = () => {
//   const { categoriaId } = useParams()

//   const [productosCategoria, setProductosCategoria] = useState([])

  
//   const categoryData = [ {id: '1', name: 'Nacionales'},
//   {id: '2', name: 'Internacionales'}
// ]
// const getProducts  = new Promise((res, rej) => {
// setTimeout(() =>{
// res(categoryData)

// }, 2000);
// });

// useEffect(() => {
//  getProducts
//  .then((res) =>{
//      console.log(res)
// res.map((cat)=>{if(cat.id =="2"){
//       setProductosCategoria(cat)
//       console.log(cat)
//      }} )

//  console.log(productosCategoria)
  
  
//   })
 
// }
// , [categoriaId])


//   return(
// <div>

//  {productosCategoria.map((producto)=>
//  <p>{producto.name}</p>
//  )}

// </div>

//   )
//   }
  