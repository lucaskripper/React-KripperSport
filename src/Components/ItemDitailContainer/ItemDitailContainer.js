import React, {useEffect,useState} from "react"
import products from '../../Mock/products.data.json'
import ItemDital from '../ItemDital/ItemDital'
const ItemDitailContainer = ()=>
{
   const getProduct = new Promise((res, rej)=>
   {
    setTimeout(()=>res(products),2000);
   });
   const [item, setItem]= useState([]);
   useEffect(()=>
   {
        getProduct.then(products=>setItem(products[0]))
        .catch(()=>console.log("Error"));
   },[])
   return <ItemDital producto = {item}/>

}
export default ItemDitailContainer;