import { Link } from "react-router-dom";
import lista_productos from "../data";
import "./Productos.css";


function Catalogo(){
    return(
        <div>
            <h1>Pagina de Catálogo</h1>
            <Link to="/">Volver a la pagina principal</Link>  
            <div className="productos">
               {lista_productos.map((producto)=>{
                return(
                    <article className="juego">
                        <h5>{producto.title}</h5>
                        <img className="imagenes" src={producto.image1} alt="productos"/>
                        <Link className="masInfo" to={`/catalogo/${producto.id}`}>Mas Info</Link>         
                    </article>
                )
               })}
            </div>     
            </div>
    )
}

export default Catalogo;