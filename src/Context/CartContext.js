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
        setCart( cart.filter((producto)=>producto.id!==item.id));
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
    // const fewerProducts=(item)=>
    // {
    //     const newCart = cart.map((prod)=>
    //     {
    //         if(prod.id === item.id)
    //         {
    //             prod.cantidad= prod.cantidad - 1;
    //         }
    //     })
    //     setCart(newCart);
    // }
    // const moreProducts=(item)=>
    // {
    //     const newCart = cart.map((prod)=>
    //     {
    //         if(prod.id === item.id)
    //         {
    //             prod.cantidad= prod.cantidad + 1;
    //         }
    //     })
    //     setCart(newCart);
    // }
    useEffect(()=>
    {
        totalQuantity();
    },[cart]);
    return <CarritoContexto.Provider value={{cart,addItem,clear,removeItem,totalPrice,unidades}}>{children}</CarritoContexto.Provider>
}

export default CartProvider;