import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Carga from "../Carga/Carga";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { bd } from '../../fireBaseConfiguraciones';
const ItemListContainer = ()=>
{
    const [cargando, setCargando] = useState(true)
    const [item, setItem] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        setCargando(true);
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
            .finally(()=>
            {
                setCargando(false);
            })
    }, [categoryId]);
    return cargando ?  <Carga/> :  <ItemList listaProductos={item}/>
    
    
}
export default ItemListContainer;