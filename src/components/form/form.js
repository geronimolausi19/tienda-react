

import React,{useState, useEffect} from 'react';
import { getFirestore } from '../../firebase';
import {CartContext} from "../../context/cartContext/cartContext"
import {useContext} from "react"
import "./form.css"
export const Form = () => {
  const {cart} = useContext(CartContext)







const [values, setValues] = useState ({
  name:"",
  phone:"",
  email:""
})
const [orderId, setOrderId]= useState ([])




const fire = () =>{
 


const db= getFirestore()
 const orders =db.collection("orders")
 
const newOrder={
  buyer :values,
  items:cart

}
 orders.add(newOrder).then(({id}) =>
 setOrderId(id)           )
 }


const handleSave = () =>{

 if(values["email"] === values["email-repeat"]){
   fire()
   actualizar()
 }else {
   alert("error")
 }

}










const actualizar =  async() =>{
  const db = getFirestore()


 cart.forEach((item) =>   {

  const itemSelected = db.collection("items").doc(item.id)

 itemSelected.update({stock: item.stock - item.qty })

 })
}



const handleInput = e => {
const  {id, value} = e.target

 setValues({...values, [id]:value})
}


  const handleSubmit = e => {
    e.preventDefault()

  }





  return (
<form   onSubmit={handleSubmit}>
    <h2 className="titulo-form">Formulario</h2>
<div className="wrapper">
<div className="input-data">
    
    
    <input type="text" id="name"  placeholder="Nombre" required onChange={handleInput}></input>
    <div className="underline"></div>
    
    </div>
    
<div className="input-data"  >

<input type="text" id="email"  required placeholder="Mail" onChange={handleInput}></input>
<div className="underline"></div>

</div>

<div className="input-data">

<input type="text" id="email-repeat" required placeholder="Repetir mail" onChange={handleInput}></input>  
<div className="underline"></div>

</div>

<div className="input-data">

<input  type="number" id="phone" required placeholder="Telefono"   onChange={handleInput}></input>
<div className="underline"></div>

</div>


</div>


<button onClick={handleSave} className="boton-form"> Enviar informacion </button> 

    </form>
  )
};
          







































// <form onSubmit={handleSubmit}>
// <div  >
//   <label for="name">Name</label>
// <input type="text" placeholder="Name" id="name" onChange={handleInput} >hi</input>

//  </div>
//  <div>
//   <label for="exampleEmail">Email</label>
//   <input type="text" placeholder="Email" id="email"  onChange={handleInput}> i</input>
// </div>

// <div>
//   <label for="phone">Phone</label>
//   <input type="phone" placeholder="Phone" id="phone" onChange={handleInput} >h</input>
// </div>  
// <button >Save</button>
// </form> 
// )








// export const Form = ({ id, label, value, onChange, required }) => {
//   return (
//     <div >
      
//       <label >
//         {label} {required ? '*' : ''}
//       </label>
//       <input
//         type="text"
//         onChange={({ target }) => onChange(id, target.value)}
//         value={value}
//       />
//     </div>
//   );
// };




