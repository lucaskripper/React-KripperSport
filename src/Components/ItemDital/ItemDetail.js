import React from "react"
import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'
const ItemDetail = ({producto})=>
{
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
                <ItemCount></ItemCount>
            </div>
        </div>
    )
}
export default ItemDetail;