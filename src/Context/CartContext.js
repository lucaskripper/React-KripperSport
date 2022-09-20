import React ,{ createContext,useState} from 'react';
import { useEffect } from 'react';

export const CarritoContexto = createContext();

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    const [unidades, setUnidades] = useState(0);

    const addItem=(item, cantidad)=>
    {
        if(isInCart(item))
        {
            (item.cantidad + cantidad) <= item.stock 
            ? item.cantidad += cantidad 
            : item.cantidad = item.stock;
        }
        else
        {
            setCart([...cart,{...item, cantidad}])
        }
    }
    const clear=()=>
    {
        setCart([]);
    }
    const removeItem=(item)=>
    {
        const cartFiltrada = cart.filter((producto)=>producto.id!==item.id)
        setCart(cartFiltrada);
    }
    const isInCart=(item)=>
    {
        let esta = cart.some((producto)=>producto.id===item.id)
        return esta;
    }
    const totalPrice=()=>
    {
        const total = cart.map((producto)=>producto.precio*producto.cantidad).reduce((acum, item)=> acum + item, 0);
        return total;
    }
    const totalQuantity = () => {
        let acumulador = 0;
        cart.forEach((prod) => {
            acumulador += prod.cantidad;
        });
        setUnidades(acumulador);
    };
    useEffect(()=>
    {
        totalQuantity();
    },[cart]);
    return <CarritoContexto.Provider value={{cart,addItem,clear,removeItem,totalPrice,unidades}}>{children}</CarritoContexto.Provider>
}

export default CartProvider;