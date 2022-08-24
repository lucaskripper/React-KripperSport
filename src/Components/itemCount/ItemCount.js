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
        <div>
            <section className="Contador">
                <button onClick={sumar}>+</button>
                <p>{numero}</p>
                <button onClick={restar}>-</button>
            </section>
            <button disabled={habilitar()} className="btnCarrito">Agregra al Carrito</button>
        </div>
    )
}
export default ItemCount;