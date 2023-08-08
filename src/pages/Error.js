import { Link } from "react-router-dom";


function Error(){
    return(
        <div>
            <h1>404</h1>
            <p>Página no encontrada</p>
            <Link to="/">Volver a la pagina principal</Link><br/>
        </div>
    )
}

export default Error;