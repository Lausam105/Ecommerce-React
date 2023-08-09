import './ItemCount.css'
import { useState } from 'react';


function ItemCount({stock, initial, onAdd}) {
    const [quantity, setQuantity] = useState(initial)

    const increment = ()=> {
        if(quantity < stock){
            setQuantity(quantity+1)
        }
    }

    const decrement = ()=>{
        if(quantity > 1){
            setQuantity(quantity-1);
        }
    }
    return(
        <div className="Counter">
           <div className="IncreDecre">
            <button onClick={decrement}>-</button>
            <h4>{quantity}</h4>
            <button onClick={increment}>+</button>
            </div> 
        <div className="agregar">
            <button onClick={()=>onAdd(quantity)}>Agregar al carrito</button>
        </div>
        </div>
    )
}

export default ItemCount;