import React,{useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Load from "../Load/Load";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { bd } from '../../fireBaseConfiguraciones';
const ItemListContainer = ()=>
{
    const [Loading, setLoading] = useState(true)
    const [item, setItem] = useState([]);
    const {categoryId} = useParams();
    useEffect(() => {
        setLoading(true);
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
                setLoading(false);
            })
    }, [categoryId]);
    return Loading ?  <Load/> :  <ItemList listaProductos={item}/>
    
    
}
export default ItemListContainer;