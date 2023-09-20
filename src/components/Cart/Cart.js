import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { CartItem } from "../CartItem/CartItem";




const Cart = ()=>{
    const { cart, clearCart, quantity, total} = useContext(CartContext)

    if(quantity === 0) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <Link to='/'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p}/>)}
            <h3>Total: ${total}</h3>
            <button onClick={()=> clearCart()}>Limpiar Carrito</button>
            <Link to='/checkout'>Checkout</Link>
            <Link to='/catalogo'>Volver</Link>
        </div>
    )

}





export default Cart;