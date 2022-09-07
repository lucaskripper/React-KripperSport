import { useState } from "react";
import { createContext } from "react";

const contexto = createContext();

const CartProvider = ({hijos})=>{
    const {cart, setCart} = useState([]);
    return <contexto.Provider value={{}}>{hijos}</contexto.Provider>
}

export default CartProvider;