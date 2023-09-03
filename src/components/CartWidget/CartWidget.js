import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <div>
           <Link to='/cart' style={{display: totalQuantity > 0 ? 'block' : 'none'}}>
            <FontAwesomeIcon icon={faCartShopping} style={{color:"white", fontSize:"30px"}}/>
            { totalQuantity }
            </Link> 
             
        </div>
)
}

export default CartWidget