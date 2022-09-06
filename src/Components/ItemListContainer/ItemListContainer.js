import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import productos from '../../Mock/products.data.json'
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ()=>
{
    const [item, setItem] = useState([]);
    const {categoryId} = useParams();
    useEffect(()=>
    {
        const getProducts = new Promise((res)=>
        {
            const productsFilter = productos.filter((producto)=>producto.categoria === categoryId)
            const products = categoryId ? productsFilter : productos
            setTimeout(()=>res(products),2000);
        });
        getProducts
        .then(producto=>setItem(producto))
        .catch(()=>console.log("Error"))
        
    },[categoryId])
    return <ItemList listaProductos={item}/>
    
}
export default ItemListContainer;