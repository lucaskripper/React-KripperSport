import React ,{ createContext,useState} from 'react';

const contexto = createContext();

const CartProvider = ({children})=>{
    const {cart, setCart} = useState([]);
    return <contexto.Provider value={{}}>{children}</contexto.Provider>
}

export default CartProvider;