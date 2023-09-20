import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({ id, title, imgage2, description, price, stock}) =>{
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    return (
    <article>
        <header>
        <h2>{title}</h2>
        </header>
        <picture>
            imagen
            <img src={imgage2} alt={title}/>
        </picture>
        
        <section>
        
        <p>
        Descripcion: {description}
        </p>
        <p>
        Precio: {price}
        </p>
        <p>
        Stock: {stock} 10
        </p>
        </section>
        <footer>
            {quantityAdded > 0 ? ( <Link to='/cart'>Terminar compra</Link>) : (
                    <ItemCount initial={1} stock={10} onAdd={handleOnAdd}/>
                )
            }
        </footer>

    </article>
    )
}

export default ItemDetail;