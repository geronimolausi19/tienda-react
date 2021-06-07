
import "./footer.css"




export const Footer = () =>{





return(
<div className="main-footer">
<hr className="hr" />
<div  className="container">

<div  className="row">
{/* {columna 1} */}
<div className="grid-container">
<div className="col">
    <p className="titulo-footer">Nosotros</p>
<ul className="list-unstyled">
<li>1164398089</li>
<li>Buenos Aires, Argentina</li>
<li>1923 Calle Cortazar</li>
 </ul>
</div>
{/* {columna 2} */}
<div className="col">
<p  className="titulo-footer" >Ayuda</p>
<ul className="list-unstyled">
<li>Preguntas Frecuentes</li>
<li>Envio y seguimiento</li>
<li>Boton de arrepentimiento</li>
</ul>
</div>
{/* {columna 3} */}
<div className="ccl">
<p className="titulo-footer"  >Seguinos</p>
<ul className="list-unstyled">
<li>Instagram</li>

<li>Facebook</li>

</ul>
</div>
</div>

</div>
<hr className="hr"></hr>
<div className="row">

    <p className="col-sm">
        &copy;{new Date().getFullYear()} MESTIZA INC || Terminos de servicio || Privacy
    </p>


</div>

</div>

</div>
)
}