import { CartContext } from '../../context/CartContext';
import React from 'react';
import { useContext } from 'react';




export const CartItem = ({ id, price, image1, title, quantity }) => {
    const { removeItem} = useContext(CartContext)

     const total = price * quantity;
    return (
        <div className='container'>
            <picture>

                <img src={image1} alt={title} className="imgContainer"/>

            </picture>
            <div className='productsCategorie'>
                <h2>
                    {title}
                </h2>
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Subtotal: {quantity * price}
                </p>
                <section>
                    <h3>Total a pagar: ${total}</h3>
                </section>
                <button onClick={() => removeItem(id)}>Eliminar</button>
                
            </div>
        </div>

    )
};

