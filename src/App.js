import 'bulma/css/bulma.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import Contacto from './pages/Contacto';
import Error from './pages/Error';
import Layout from './pages/Layout';
import Cart from './components/Cart/Cart'
import Producto from './pages/Producto';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {
  
    return (
        <BrowserRouter>
        <CartProvider>
         
          <Routes>
           <Route path="/" element={<Layout/>}>
           <Route index element={<Home/>}/>
           <Route path="categoryId" element={<ItemListContainer/>}/>
           <Route path="contacto" element={<Contacto/>}/>
           <Route path="/cart" element={<Cart/>}/>
           <Route path="*" element={<Error/>}/>
           <Route path="/item/:productoId" element={<Producto/>}/>
            </Route>
           
          </Routes>
          
          </CartProvider>
        </BrowserRouter>

        
    );
  }

  export default App;