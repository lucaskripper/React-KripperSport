import React from "react"
import ItemCount from "../itemCount/ItemCount"
import './itemDetail.css'
const ItemDetail = ({producto})=>
{
    return(
        <div className="contenedorDetail">
            <div className="tarjetaDetail">
                <img src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>{producto.descripcion}</p>
                <select name="talles" id="talles">
                        <option value="value1">XL</option>
                        <option value="value2" selected>L</option>
                        <option value="value3">M</option>
                        <option value="value4">S</option>
                        <option value="value5">XS</option>
                    </select>
                <p>${producto.precio}.-</p>
                <ItemCount talles={producto.talles}/>
            </div>
        </div>
    )
}
export default ItemDetail;