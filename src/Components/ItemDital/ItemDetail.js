import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'
const ItemDetail = ({producto})=>
{
    const [cantidad, setCantidad] = useState(0);
    const onAdd = (cantidadSeleccionada)=>
    {
        setCantidad(cantidadSeleccionada);
    }
    return(
        <div className="Contenedor">
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
                {cantidad===0 ? <ItemCount stock={producto.stock} onAdd={onAdd}/>
                : <Link to="/carrito"><button className="btnCarrito">Ir al carrito</button></Link>}
            </div>
        </div>
    )
}
export default ItemDetail;