import React,{ useState, useContext } from "react"
import { CarritoContexto } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'
//Item detail es un componente que recibe un objeto y lo muestra por pantalla
const ItemDetail = ({producto})=>
{
    const [cantidad, setCantidad] = useState(0);
    const {addItem}=useContext(CarritoContexto);
    const onAdd = (cantidadSeleccionada)=>
    {
        setCantidad(cantidadSeleccionada);
        addItem(producto,cantidadSeleccionada);
    }
    return(
        <div className="Contenedor" key={producto.id}>
            <div className="imagenPequeña">
                <img src={producto.imagen} alt={producto.nombre} />
                <img src={producto.imagen} alt={producto.nombre} />
                <img src={producto.imagen} alt={producto.nombre} />
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="imagenGrande">
                <img src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="infoDetalle">
                <h2>{producto.nombre}</h2>
                <p className="descripcion">{producto.descripcion}</p>
                <p>${producto.precio}.-</p>
                {cantidad ===0 && <ItemCount stock={producto.stock} onAdd={onAdd}/>}
                <Link to="/carrito"><button className="btnCarrito">Ir al carrito</button></Link>
                {cantidad !== 0 && <Link to="/comprar"><button className="btnCarrito">Finalizar Compra</button></Link>}
            </div>
        </div>
    )
}
export default ItemDetail;