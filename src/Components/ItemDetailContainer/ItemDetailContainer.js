import React, {useEffect,useState} from "react"
import ItemDetail from '../ItemDital/ItemDetail'
import { useParams } from "react-router-dom"
import {bd} from '../../fireBaseConfiguraciones'
import { getDoc, doc, collection } from 'firebase/firestore'
import Load from "../Load/Load"
const ItemDetailContainer = ()=>
{
   const [Loading, setLoading] = useState(true)
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
            setLoading(false);
         })
  }, [itemId]);
   return Loading? <Load/> :<ItemDetail producto = {item}/>

}
export default ItemDetailContainer;