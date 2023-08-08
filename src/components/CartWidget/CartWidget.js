import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons"


const CartWidget = () => {
    return (
        <div>
            
            <FontAwesomeIcon icon={faCartShopping} style={{color:"white", fontSize:"30px"}}/>
             <div>0</div>
        </div>
)
}

export default CartWidget