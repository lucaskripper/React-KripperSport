import React ,{ createContext,useState} from 'react';

export const CarritoContexto = createContext();

const CartProvider = ({children})=>{
    const [cart, setCart] = useState([]);

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
    // const totalUnidades = ()=>
    // {
        
    // }
    return <CarritoContexto.Provider value={{cart,addItem,clear,removeItem}}>{children}</CarritoContexto.Provider>
}

export default CartProvider;