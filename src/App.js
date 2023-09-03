import 'bulma/css/bulma.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Catalogo from "./pages/Productos";
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import Layout from './pages/Layout';
import Producto from './pages/Producto';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

import { CartProvider } from './context/CartContext';



function App() {
  
    return (
        <BrowserRouter>
        <CartProvider>
          <Routes>
           <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="catalogo" element={<Catalogo/>}/>
           <Route path="catalogo/:productoId" element={<Producto/>}/>
           <Route path="contacto" element={<Contacto/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="*" element={<Error/>}/>
           <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
            </Route>
           
          </Routes>
          </CartProvider>
        </BrowserRouter>

        
    );
  }

  export default App;