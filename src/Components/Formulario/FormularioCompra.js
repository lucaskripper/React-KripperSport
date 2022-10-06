import './formularioContacto.css'
import { useState } from 'react'
import { useContext } from 'react';
import { CarritoContexto } from "../../Context/CartContext";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {bd} from '../../fireBaseConfiguraciones'
import { Link } from "react-router-dom";
import Load from "../Load/Load";
import { Alert } from 'reactstrap';
const FormularioCompra=()=>
{
    const [Loading, setLoading] = useState(false)
    const {cart,totalPrice,clear,unidades}=useContext(CarritoContexto);
    const [idCompra, setIdCompra]=useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [mailRepetido, setMailRepetido]=useState("");
    const [telefono, setTelefono]=useState('');
    const handelSumbit= (event) => 
    {
        event.preventDefault()
        setLoading(true);
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
            setLoading(false);
        })
    };
    const handelId=(id)=>
    {
        setIdCompra(id);
    }
    const handelChangeNombre = (event) => setNombre(event.target.value);
    const handelChangeApellido = (event) =>setApellido(event.target.value);
    const handelChangeMail = (event) => setMail(event.target.value);
    const handelChangeMailRepetido = (event) => setMailRepetido(event.target.value);
    const handelChangeTelefono = (event) => setTelefono(event.target.value);
    if(Loading)
    {
        return <Load/>
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
            <h1>Finaliza tu compra</h1>
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
                <label htmlFor="mailRepetido">Repeti tu Mail</label>
                <br/>
                <input type="email" name="mailRepetido" placeholder="Fulano@contacto.com" value={mailRepetido} onChange={handelChangeMailRepetido} className="formato"/>
                <br/>
                {mail!== mailRepetido &&  <Alert color="danger" className='alerta'>Los mail no son iguales</Alert>}
                <label htmlFor='telefono'>Telefono</label>
                <br />
                <input type="tel" name='telefono' className='formato' pattern='[0-9]{10}' value={telefono} onChange={handelChangeTelefono}/>
                <br />
                <small> Ingrese con el codigo de area y sin el 15</small>
                <br />
                {nombre !== "" && apellido !== "" && mail !== "" && telefono !== "" && mail === mailRepetido ? <button type='sumbit' className='btnEnviar'>Comprar</button>: <Alert color="danger" className='alerta'>Debe llenar todos los campos</Alert>}
            </form>
        </>
    )
}
export default FormularioCompra;