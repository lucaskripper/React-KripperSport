import React, {useEffect,useState} from "react"
import ItemDetail from '../ItemDital/ItemDetail'
import { useParams } from "react-router-dom"
import {bd} from '../../fireBaseConfiguraciones'
import { getDoc, doc, collection } from 'firebase/firestore'
import Carga from "../Carga/Carga";

const ItemDetailContainer = ()=>
{
   const [cargando, setCargando] = useState(true)
   const {itemId} = useParams();
   const [item, setItem]= useState([]);
   
   useEffect(() => {
      const itemCollection = collection( bd, 'productos');
      const ref = doc(itemCollection, itemId);
      getDoc(ref)
        .then((res) => {
            setItem({ id: res.id, ...res.data() });
         })
        .catch((error)=>console.log(error))
        .finally(()=>{
            setCargando(false);
         })
  }, [itemId]);
   return cargando? <Carga/> :<ItemDetail producto = {item}/>

}
export default ItemDetailContainer;