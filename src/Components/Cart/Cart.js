import { useContext } from "react";
import { CarritoContexto } from "../../Context/CartContext";

const Cart = ()=>
{
    const {Cart}=useContext(CarritoContexto)
    return(
            <h1>Carrito</h1>
    )
}
export default Cart;