import React from "react"
import ItemCount from "../itemCount/ItemCount"
import './itemDital.css'
const ItemDital = ({producto})=>
{
    return(
        <div>
            <fieldset className="fildsetBorder">
                <div className="divDitail">
                    <section className="itemDitailLeft">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h2>{producto.nombre}</h2>
                        <p>{producto.descripcion}</p>
                    </section>
                    <section className="itemDitailRight">
                        <select name="talles" id="talles">
                            <option value="value1">XL</option>
                            <option value="value2" selected>L</option>
                            <option value="value3">M</option>
                            <option value="value4">S</option>
                            <option value="value5">XS</option>
                        </select>
                        <ItemCount talles={producto.talles}/>
                    </section>
                </div>
            </fieldset>
        </div>
    )
}
export default ItemDital;