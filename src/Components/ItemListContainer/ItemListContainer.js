import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
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
    return <ItemList listaProductos={item}/>
    
}
export default ItemListContainer;