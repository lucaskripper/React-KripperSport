import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import productos from '../../Mock/products.data.json'
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { bd } from '../../fireBaseConfiguraciones';
const ItemListContainer = ()=>
{
    const [item, setItem] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        const itemCollection = collection(bd, 'productos');

        const referencia = categoryId
            ? query(itemCollection, where('categoria', '==', categoryId))
            : itemCollection;

        getDocs(referencia)
            .then((res) => {
                const products = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItem(products);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [categoryId]);

    // useEffect(()=>
    // {
    //     const getProducts = new Promise((res)=>
    //     {
    //         const productsFilter = productos.filter((producto)=>producto.categoria === categoryId)
    //         const products = categoryId ? productsFilter : productos
    //         setTimeout(()=>res(products),2000);
    //     });
    //     getProducts
    //     .then(producto=>setItem(producto))
    //     .catch(()=>console.log("Error"))
        
    // },[categoryId])
    return <ItemList listaProductos={item}/>
    
}
export default ItemListContainer;