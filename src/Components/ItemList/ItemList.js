import React from "react";
import Item from '../Item/Item'
const ItemList = ({listaProductos})=>
{
    return (listaProductos.map((producto)=>
    {
        return (<Item key={producto.id} producto={producto}/>)
    }))
}

export default ItemList