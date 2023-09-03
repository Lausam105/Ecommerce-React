import { CartContext } from "../../context/CartContext"
import React, {useContext} from "react"



export const CartItem = ({ id, price, image, title, quantity}) => {
    const { removeItem, total } = useContext(CartContext)

    return (
        <article>
            <header>
                <h2>{title}</h2>
            </header>

            <picture>
                <img src={image} alt="product"/>
            </picture>

            <section>
                <h3>
                Precio: ${price}
                </h3>
            </section>

            <section>
                <h4>
                Cantidad: ${quantity}
                </h4>
            </section>

            <section>
                <h4>
                Subtotal: ${price * quantity}
                </h4>
            </section>

            <section>
                <h3>
                Total a pagar: ${total}
                </h3>
            </section>

            <section>
                <h3>
                <button onClick={()=> removeItem(id)}>Eliminar</button>
                </h3>
            </section>
        </article>
    )
}

