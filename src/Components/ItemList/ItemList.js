import React from "react";
import Item from '../Item/Item'

const ItemList = ({listaProductos})=>
{
    return (listaProductos.map((producto)=>
    {
        // console.log(producto);
        return (<Item key={producto.id} producto={producto}/>)
        
    }))
}

export default ItemList