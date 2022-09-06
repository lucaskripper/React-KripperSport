import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
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
                    path="/item/:itemId"
                    element={<ItemDetailContainer/>}
                />
            </Routes>
        </main>
    )
}
export default Main;