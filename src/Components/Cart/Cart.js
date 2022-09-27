import { useContext } from "react";
import { CarritoContexto } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './cart.css'
import CartDetail from "../CartDetail/CartDetail";
import { useState } from "react";

const Cart = ()=>
{
    const [idCompra, setIdCompra] = useState('')
    const {cart,totalPrice,clear}=useContext(CarritoContexto)
    const handleId = (id) => {
        setIdCompra(id);
    };

    if (idCompra) {
        return <h1>Gracias por comprar tu id es: {idCompra}</h1>;
    }
    return(
        cart.length===0?
        <>
        <h1>El carrito esta vacio</h1>
        <Link to='/'><button className="btnCarrito">Seguir Comprando</button></Link>
        </>
        : <>
            <h1>Tu Carrito</h1> 
            <div className="categoriaDetalleCarritoProducto">
                <h2>Producto</h2>
                <h2>Cantidad</h2>
                <h2>Precio unitario</h2>
            </div>
            {cart.map((producto)=>
                <CartDetail key={producto.id} producto={producto}/>
            )}
            <h3>Total: ${totalPrice()}.-</h3>
            <button onClick={()=>clear()} className="btnCarrito">Limpiar Carrito</button>
            <Link to="/comprar"><button className="btnCarrito" handleid={handleId}>Finalizar Compra</button></Link>
        </>
    )
}
export default Cart;