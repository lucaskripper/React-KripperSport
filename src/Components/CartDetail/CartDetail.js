import { useContext } from "react";
import { CarritoContexto } from "../../Context/CartContext";
import './cartDetail.css';
const CartDetail=({producto})=>
{
    const {removeItem,fewerProducts,moreProducts}=useContext(CarritoContexto)
    const restar=()=>
    {
        producto.cantidad > 0 && fewerProducts(producto,producto.cantidad-1)
    }
    const sumar=()=>
    {
        producto.cantidad < producto.stock && moreProducts(producto,producto.cantidad+1)
    }
    return(
        <div className="detalleCarritoProducto">
            <img src={producto.imagen} alt={producto.nombre} className="imagenCartDetail"/>
            {producto.cantidad===producto.stock?<h3 style={{color:"red"}} id>{producto.nombre}</h3>:<h3>{producto.nombre}</h3>}
            <div className="cantidadProducto">
                <button className="btnCarritoDetail" onClick={sumar}>+</button>
                <h3>{producto.cantidad}</h3>
                <button className="btnCarritoDetail" onClick={restar}>-</button>
            </div>
            <h3>${producto.precio}.-</h3>
            <button onClick={()=>removeItem(producto)} className="btnCarritoDetail"><span className="material-symbols-outlined">delete</span></button>
        </div>
    )
}
export default CartDetail;