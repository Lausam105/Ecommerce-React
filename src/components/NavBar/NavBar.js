import CartWidget from "../CartWidget/CartWidget";
function NavBar(){
    return (
        <nav className="NavBar">
            <h3>Start Game</h3>
        <div>
             <button>Productos</button>
             <button>Ofertas</button>
             <button>Contacto</button>
        </div>
     <CartWidget/>
     </nav>
    )
}

export default NavBar;