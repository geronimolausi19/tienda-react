

import React,{useState, useEffect} from 'react';
import { getFirestore } from '../../firebase';
import {CartContext} from "../../context/cartContext/cartContext"
import {useContext} from "react"
import "./form.css"
import { Link } from 'react-router-dom';

export const Form = () => {
  const {cart, setCart} = useContext(CartContext)


const [values, setValues] = useState ({
  name:"",
  phone:"",
  email:"",
  emailRepeat:""
})
//numero de order
const [orderId, setOrderId]= useState (false)

//
const [linkToOrder, setLinkToOrder] = useState(false)

const [isDisableButton, setIsDisableButon] = useState(false)



const order = () => {

setLinkToOrder(true)

}
const onClick = () => {
  order()
  handleSave()
 
}

const vaciarCarrito= () =>{

  setCart([])
}



useEffect(() => {

 const newIsDisableButtom = !(
   values.name   &&
   values.phone  &&
    (values.email === values.emailRepeat)
   )
   
 
setIsDisableButon(newIsDisableButtom  )

}, [values.name, values.phone, values.email])





const fire = () =>{
 console.log("funciono")
const db= getFirestore()
 const orders =db.collection("orders")
 
const newOrder={
  buyer :values,
  items:cart

}
 orders.add(newOrder)
 .then(({id}) =>
 setOrderId(id)           )
 }




const handleSave = () =>{

 if(values["email"] === values["emailRepeat"]){
   fire()
   actualizar()
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
  <p className="p-form">El boton se activara cuando los mails sean iguales y los campos esten completos.</p>
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

<input type="text" id="emailRepeat" required placeholder="Repetir mail" onChange={handleInput}></input>  


<div className="underline"></div>

</div>

<div className="input-data">

<input  type="number" id="phone" required placeholder="Telefono"   onChange={handleInput}></input>
<div className="underline"></div>

</div>


</div>


<button disabled={isDisableButton} 
             onClick={onClick}  className="boton-form"> Enviar informacion </button> 

{linkToOrder && <div className="order"><p> Muchas gracias por comprar con nosotros, su numero de orden es: {orderId}</p> <button className="boton-vaciar" onClick={vaciarCarrito}>Vaciar Carrito </button> </div>} 


    </form>
  )
};
          















































