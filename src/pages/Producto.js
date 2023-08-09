import {Link, useParams} from "react-router-dom";
import lista_productos from "../data";
import "./Productos.css";
import ItemCount from "../components/ItemCount/ItemCount";

function Producto(){

    const {productoId} = useParams();

    const producto = lista_productos.find((producto)=>producto.id == productoId);

    const {image2,title,price,description} = producto;

    //console.log(producto);

    return (
        <div className="galeria">
            <img className="imagen" src={image2} alt="producto"/>
            <div className="agregar">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h2>Precio: ${price}</h2>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
            <Link to="/catalogo">Volver</Link>
        </div>
            
            
        </div>
        
        
        
    )


}


export default Producto;