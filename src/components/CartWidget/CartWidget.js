import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { quantity } = useContext(CartContext)
    return (
        <div>
           <Link to='/cart'>
            <FontAwesomeIcon icon={faCartShopping} style={{color:"white", fontSize:"30px"}}/>
            { quantity }
            </Link> 
             
        </div>
)
}

export default CartWidget