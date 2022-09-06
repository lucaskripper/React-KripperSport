import React, {useEffect,useState} from "react"
import products from '../../Mock/products.data.json'
import ItemDetail from '../ItemDital/ItemDetail'
import { useParams } from "react-router-dom"
const ItemDetailContainer = ()=>
{
   const {itemId} = useParams();
   const [item, setItem]= useState([]);
   useEffect(()=>
   {
      const getProduct = new Promise((res)=>
      {
         const product = products.find((product)=> product.id === parseInt(itemId)) 
         setTimeout(()=>res(itemId ? product : null),2000);
      });
      getProduct
      .then(product=>setItem(product))
      .catch(()=>console.log("Error"));
   },[itemId])
   return <ItemDetail producto = {item}/>

}
export default ItemDetailContainer;