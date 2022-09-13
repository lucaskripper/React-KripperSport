import React,{useState} from "react";
import './itemCount.css';
const ItemCount = ()=>
{
    const [numero, setNumero] = useState(0);
    const sumar=()=>
    {
        setNumero(numero+1);
    }
    const restar=()=>
    {
        if(numero>0)
        {
            setNumero(numero-1);
        }
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
            <button disabled={habilitar()} className="btnCarrito">Agregra al Carrito</button>
        </div>
    )
}
export default ItemCount;