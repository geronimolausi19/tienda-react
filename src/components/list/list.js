import { Product } from "../product/product"


export const List = (props) => {

    return props.products.map((product)=> ( 

        <Product
 title={product.title} 
 price={product.price} 
 description={product.description} 
   />
       ))
     }