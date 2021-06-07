import React from "react"
import "./modal.css"
import {Form} from "../form/form"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import{faTimes} from "@fortawesome/free-solid-svg-icons"
export const Modal = ({showModal, setShowModal, closeModal}) => {

const handleModalDialogClick = e=>{
    e.stopPropagation()
}



    return (
    
        <div className={`modal ${showModal && "modal-open"}`} onClick={closeModal}>
            <div className="modal-dialog" onClick={handleModalDialogClick}>
            <button className="boton-cerrar" onClick={closeModal}><FontAwesomeIcon icon={faTimes}/></button>
                <Form></Form>
              
                </div>
             </div>
    
   
      
            
    )
}