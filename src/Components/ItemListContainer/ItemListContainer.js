import React,{useState, useEffect} from "react";
import productos from '../../Mock/products.data.json'
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ()=>
{
    const getProducts = new Promise((res,rej)=>
    {
        setTimeout(()=>res(productos),2000);
    });
    const [item, setItem] = new useState([]);
    useEffect(()=>
    {
        getProducts
        .then(producto=>setItem(producto))
        .catch(()=>console.log("Error"))
    },[])
    return <ItemList listaProductos={item}/>
    
}
export default ItemListContainer;