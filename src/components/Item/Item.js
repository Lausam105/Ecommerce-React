import { Link } from "react-router-dom";


const Item = ({ id, title, image1, price, stock}) =>{
    return (
        <article className="juego">
            <header>
                <h2>{title}</h2>
            </header>
            <picture>
                <img className="imagenes" src={image1} alt={title}/>
            </picture>
            <section>
                <p>Precio: ${price}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <footer>
                <Link className="masInfo" to={`/item/${id}`}>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item;