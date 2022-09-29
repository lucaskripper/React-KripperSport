import './formularioContacto.css'
import { useState } from 'react'
import { useContext } from 'react';
import { CarritoContexto } from "../../Context/CartContext";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {bd} from '../../fireBaseConfiguraciones'
import { Link } from "react-router-dom";
import Carga from "../Carga/Carga";
const FormularioCompra=()=>
{
    const [cargando, setCargando] = useState(false)
    const {cart,totalPrice,clear,unidades}=useContext(CarritoContexto);
    const [idCompra, setIdCompra]=useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono]=useState('');
    const handelSumbit= (event) => 
    {
        event.preventDefault()
        setCargando(true);
        const orden =
        {
            buyer:{nombre: nombre, apellido: apellido, telefono:telefono, mail: mail},
            items:cart,
            total:totalPrice(),
            fecha:serverTimestamp()
        };
        const collecionOrdenes = collection(bd, 'ordenes')
        addDoc(collecionOrdenes, orden)
        .then((res)=>{
            handelId(res.id)
            clear();
        })
        .finally(()=>{
            setCargando(false);
        })
    };
    const handelId=(id)=>
    {
        setIdCompra(id);
    }
    const handelChangeNombre = (event) => setNombre(event.target.value);
    const handelChangeApellido = (event) =>setApellido(event.target.value);
    const handelChangeMail = (event) => setMail(event.target.value);
    const handelChangeTelefono = (event) => setTelefono(event.target.value);
    if(cargando)
    {
        return <Carga/>
    }
    if(idCompra)
    {
        return(
        <>
        <h1>Gracias por tu compra</h1>
        <h3>Tu codigo de compra es: {idCompra}</h3>
        <Link to='/'><button className="btnCarrito">Seguir Comprando</button></Link>
        </>
        )
    }
    return(
        <>
            <h2>Finaliza tu compra</h2>
            <div className='detalleCompra'>        
                <h3>Detalle</h3>
                <p>Cantidad de productos: {unidades}</p>
                <p>Total a pagar: ${totalPrice()}-.</p>
            </div>
            <form action="" onSubmit={handelSumbit} className="fromularioCompra">
                <label htmlFor="nombreYApellido">Nombre y Apellido</label>
                <br />
                <input type="text" name="nombreYApellido" placeholder="Fulano" value={nombre} onChange={handelChangeNombre} className="formato" />
                <input type="text" name="nombreYApellido" placeholder="Lopez" value={apellido} onChange={handelChangeApellido} className="formato"/>
                <br />
                <label htmlFor="mail">Mail</label>
                <br/>
                <input type="email" name="mail" placeholder="Fulano@contacto.com" value={mail} onChange={handelChangeMail} className="formato"/>
                <br/>
                <label htmlFor='telefono'>Telefono</label>
                <br />
                <input type="tel" name='telefono' className='formato' pattern='[0-9]{10}' value={telefono} onChange={handelChangeTelefono}/>
                <br />
                <small> Ingrese con el codigo de area y sin el 15</small>
                <br />
                <button type='sumbit' className='btnEnviar'>Comprar</button>
            </form>
        </>
    )
}
export default FormularioCompra;