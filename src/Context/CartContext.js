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
            actualizarCantidad(item,cantidad)
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
    const fewerProducts=(item,cantidad)=>
    {
       const carritoAcutalizado = cart.map((prod)=>
       {
            if(prod.id===item.id)
            {
                const productoActualizado =
                {
                    ...prod,cantidad
                }
                return productoActualizado;
            }
            else
            {
                return prod;
            }
       })
       setCart(carritoAcutalizado)
    }
    const moreProducts=(item,cantidad)=>
    {
        const carritoAcutalizado = cart.map((prod)=>
       {
            if(prod.id===item.id)
            {
                const productoActualizado =
                {
                    ...prod,cantidad
                }
                return productoActualizado;
            }
            else
            {
                return prod;
            }
       })
       setCart(carritoAcutalizado)
    }
    const actualizarCantidad=(item,cantidad)=>
    {
        const carritoAcutalizado = cart.map((prod)=>
        {
            if(prod.id===item.id)
            {
                const productoActualizado = {...prod}
                if(productoActualizado.cantidad+cantidad<=productoActualizado.stock)
                {
                    productoActualizado.cantidad+=cantidad;
                }
                else
                {
                    productoActualizado.cantidad=productoActualizado.stock;
                }
                return productoActualizado;
            }
            else
            {
                return prod
            }
        });
        setCart(carritoAcutalizado);
    }
    useEffect(()=>
    {
        totalQuantity();
    },[cart]);
    return <CarritoContexto.Provider value={{cart,addItem,clear,removeItem,totalPrice,unidades,fewerProducts,moreProducts}}>{children}</CarritoContexto.Provider>
}

export default CartProvider;