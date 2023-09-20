import {Link, useParams} from "react-router-dom";
import products from "../data";
import "./Productos.css";
import ItemCount from "../components/ItemCount/ItemCount";
import { CartContext } from "../context/CartContext";
import { useState, useContext } from "react";






function Producto({ id}){
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    const {productoId} = useParams();
     
    const producto = products.find((producto)=> producto.id == productoId);

    const {image2,title,price,description,stock} = producto;
    
    

    return (
        <div className="galeria" key={`id`}>
            <img className="imagen" src={image2} alt="producto"/>
            <div className="agregar">
            <h1>{title}</h1>
            <h2>{description}</h2>
            <h2>Precio: ${price}</h2>
            <h2>Stock: {stock}</h2>
            <footer>
            {quantityAdded > 0 ? ( <Link to='/cart'>Terminar compra</Link>) : (
                    <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                )
            }
        </footer>
            <Link to="/categoryId">Volver</Link>
            
            
        </div>
            
            
        </div>
        
        
        
    )


}


export default Producto;