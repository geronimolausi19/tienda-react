import {Link} from "react-router-dom"
import{useParams} from "react-router"


import React from "react"

export function Usuario () {

    const {id} = useParams()


const handleKeyDown = (e) => {
const vocals = ["a" , "e" , "i", "o" , "u"]

    
vocals.map((vocal) => 
{if(e.key.toLowerCase()==
vocal.toLowerCase()){
    e.preventDefault()
}}
)
}
return (

    <div>
        <input type="text" onKeyDown={(e) => handleKeyDown(e) 
        } placeholder="input"></input> 


<h3>{id}</h3>
    </div>
    
)


}