import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import FormularioContacto from "../Formulario/FormularioContacto";
import FormularioCompra from "../Formulario/FormularioCompra";
import Cart from "../Cart/Cart";
import {Routes, Route} from "react-router-dom";

const Main = ()=>
{
    return (
        <main>
            <Routes>
                <Route
                    path="/"
                    element={<ItemListContainer/>}
                />
                <Route 
                    path="/category/:categoryId"
                    element={<ItemListContainer/>}
                />
                <Route
                    path="/contacto"
                    element={<FormularioContacto/>}
                />
                <Route
                    path="/item/:itemId"
                    element={<ItemDetailContainer/>}
                />
                <Route
                    path="/carrito"
                    element={<Cart/>}
                />
                <Route
                    path="/comprar"
                    element={<FormularioCompra/>}
                />
            </Routes>
        </main>
    )
}
export default Main;