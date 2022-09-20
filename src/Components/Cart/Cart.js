import { useContext } from "react";
import { CarritoContexto } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import './cart.css'

const Cart = ()=>
{
    const {cart,totalPrice,clear,removeItem}=useContext(CarritoContexto)
    console.log(cart)
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
                <div className="detalleCarritoProducto" key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <h3>{producto.cantidad}</h3>
                    <h3>${producto.precio}.-</h3>
                    <div className="btnDetalleCarritoProdcuto">
                        <button className="btnCarrito">+</button>
                        <button className="btnCarrito">-</button>
                        <button onClick={()=>removeItem(producto)} className="btnCarrito"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                </div>
            )}
            <h3>${totalPrice()}.-</h3>
            <button onClick={()=>clear()} className="btnCarrito">Limpiar Carrito</button>
        </>
    )
}
export default Cart;