import { useContext } from "react";
import { CarritoContexto } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './cart.css'

const Cart = ()=>
{
    const {cart,totalPrice,clear,removeItem}=useContext(CarritoContexto)
    
    return(
        cart.lenght===0?
        <>
        <h3>El carrito esta vacio</h3>
        <Link to='/'><button>Seguir Comprando</button></Link>
        </>
        : <>
            <h3>Tu Carrito</h3> 
            {cart.map((producto)=>
            {
                <div className="DetalleCarritoProducto" key={producto.id}>
                    <h3>Producto: {producto.nombre}</h3>
                    <h3>Cantidad: {producto.cantidad}</h3>
                    <h3>Precio unitario: {producto.precio}</h3>
                    <button>+</button>
                    <button>-</button>
                    <button onClick={()=>removeItem(producto.id)}><span class="material-symbols-outlined">delete</span></button>
                </div>
            })}
            <h3>${totalPrice()}.-</h3>
            <button onClick={()=>clear()}>Limpiar Carrito</button>
        </>
    )
}
export default Cart;