import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";


function Layout(){
    return(
        <div>
             <nav>{<NavBar/>}</nav>
           
            <Outlet/>
            <footer>
          &copy; 2023 - Todos los derechos reservados
         </footer>
        </div>
    )
}

export default Layout;