import React,{useState} from "react";
import './itemCount.css';
const ItemCount = ({stock, onAdd})=>
{
    const [numero, setNumero] = useState(0);
    const sumar=()=>
    {
        numero < stock && setNumero(numero+1);
    }
    const restar=()=>
    {
        numero > 0 && setNumero(numero-1);
    }
    const habilitar = ()=>
    {
        if(numero>0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }

    return (
        <div className="contenedorContador">
            <section className="Contador">
                <button onClick={sumar} className="btnCarrito">+</button>
                <p>{numero}</p>
                <button onClick={restar} className="btnCarrito">-</button>
            </section>
            <button disabled={habilitar()} className="btnCarrito" onClick={()=>onAdd(numero)}>Agregra al Carrito</button>
        </div>
    )
}
export default ItemCount;