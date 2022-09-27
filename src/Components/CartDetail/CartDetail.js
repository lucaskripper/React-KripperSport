import { useState } from "react";
import { useContext } from "react";
import { CarritoContexto } from "../../Context/CartContext";
import './cartDetail.css';
const CartDetail=({producto})=>
{
    const {removeItem,fewerProducts}=useContext(CarritoContexto)
    const [cantidad, setCantidad]=useState(producto.cantidad)
    const restar=()=>
    {
        cantidad > 0 && setCantidad(cantidad-1);
        console.log(cantidad)
        fewerProducts(producto,cantidad)
    }
    const sumar=()=>
    {
        cantidad < producto.stock && setCantidad(cantidad+1);
        console.log(cantidad)
        fewerProducts(producto,cantidad)
    }
    return(
        <div className="detalleCarritoProducto">
            <img src={producto.imagen} alt={producto.nombre} className="imagenCartDetail"/>
            {producto.cantidad===producto.stock?<h3 style={{color:"red"}} id>{producto.nombre}</h3>:<h3>{producto.nombre}</h3>}
            <h3>{producto.cantidad}</h3>
            <h3>${producto.precio}.-</h3>
            <div className="btnDetalleCarritoProdcuto">
                <button className="btnCarrito" onClick={sumar}>+</button>
                <button className="btnCarrito" onClick={restar}>-</button>
                <button onClick={()=>removeItem(producto)} className="btnCarrito"><span className="material-symbols-outlined">delete</span></button>
            </div>
        </div>
    )
}
export default CartDetail;