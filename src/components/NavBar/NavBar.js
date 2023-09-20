import CartWidget from "../CartWidget/CartWidget";
import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom";



function NavBar(){
    return (
        <nav className="NavBar">
            <img style={{width:"200px"}} src={logo} alt="logo"/>
        <div>
             <Link to="/" className="button is-dark boton">Home</Link>
             <NavLink to={`/categoryId`} className="button is-dark boton">Catálogo</NavLink>
             <Link to="contacto" className="button is-dark boton">Contacto</Link>
        </div>
     <CartWidget/>
     </nav>
    )
}

export default NavBar;