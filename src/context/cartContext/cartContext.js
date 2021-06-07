import { createContext, useState}  from "react"

export const CartContext = createContext()


export const  CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])


//Añadir al carrito
const addToCart = (id,price,imageId,stock,name, qty) => {
    console.log(name)
    const existingIndex = cart.findIndex((item) => item.id === id);
     
    
    if (existingIndex >= 0) {
        cart[existingIndex] = {
          ...cart[existingIndex],
          qty: cart[existingIndex].qty + qty,
        };
      } else {
        setCart([
        ...cart,
        
        {
            id:id,
            price:price,
         imageId:imageId,
                stock:stock,
               name:name,
                qty:qty,
          },
        ]);
      } 
    
}

//Cantidad de productos totales
const productsCount= () =>{

  let count = 0
   cart.forEach((item)=>{
count+=item.qty

   })
return count
}

const totalPrice = () =>{

  let count= 0
  cart.forEach((item) => {
count+=item.price * item.qty

  })
return count

}




//Remover del carrito
const removeFromCart = (itemInCart) => {
    const existingIndex = cart.findIndex((item) => item.id === itemInCart.id);
    const cartCopy = Array.from(cart);
console.log(existingIndex)
    if (existingIndex >= 0) {
      cartCopy.splice(existingIndex, 1);
      setCart(cartCopy);
    }
  };




  const sumar = (item) =>{

const existingIndex = cart.findIndex((product) => product.id === item.id);
console.log(cart)
if(cart[existingIndex].qty<cart[existingIndex].stock){

 const newCart = [...cart] 
 newCart[existingIndex] =
 { 
     ...cart[existingIndex],
   qty: cart[existingIndex].qty + 1,
  
}
console.log(newCart)
setCart(newCart)
}

} 


  const restar = (item) =>{
    
    const existingIndex = cart.findIndex((product) => product.id === item.id);
console.log(existingIndex)


  
  if(item.qty>1){
    
  const newCart = [...cart]
   newCart[existingIndex ]= {
      ...cart[existingIndex],
      qty: cart[existingIndex].qty - 1,
    
    }
setCart(newCart)

  } else  {
    removeFromCart(item)

  }

 }


    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart,  productsCount , totalPrice, sumar, restar}}>
         {children} 
          </CartContext.Provider>
    )
}



//gtihub de un profe  https://github.com/angelicamolero/OnlineShop

// video de firebase  https://www.youtube.com/watch?v=itNsRn1kjLU

// codigo de form     https://stackblitz.com/edit/react-gekb7j?file=src/App.js














