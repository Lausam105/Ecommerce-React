import CartWidget from "../CartWidget/CartWidget";
import logo from "../../img/logo.png"


function NavBar(){
    return (
        <nav className="NavBar">
            <img style={{width:"200px"}} src={logo} alt="logo"/>
        <div>
             <button className="button is-dark boton">Productos</button>
             <button className="button is-dark boton">Ofertas</button>
             <button className="button is-dark boton">Contacto</button>
        </div>
     <CartWidget/>
     </nav>
    )
}

export default NavBar;