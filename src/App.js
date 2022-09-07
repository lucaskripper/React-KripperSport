import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import {CartProvider} from './Context/CartContext'
const App = ()=>
{
    return (
       
            <BrowserRouter>
                <Header/>
                <Main/>
                <Footer/>
            </BrowserRouter>
      

    );
};
export default App;