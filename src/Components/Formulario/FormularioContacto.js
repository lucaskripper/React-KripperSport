import './formularioContacto.css'
import { useState } from 'react'
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import {bd} from '../../fireBaseConfiguraciones'
const FormularioContacto = ()=>
{
    const [idContacto, setIdContacto] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [comentario, setComentario] = useState('');
    const handelSumbit= (event) => 
    {
        event.preventDefault()
        const consulta =
        {
            cliente:{nombre,apellido,mail,telefono},
            comentario: comentario,
            fecha:serverTimestamp()
        }
        const collecionConsultas = collection(bd, 'consultas')
        addDoc(collecionConsultas, consulta)
        .then((res)=>setIdContacto(res.id));
    };
    const handelChangeNombre = (event) => setNombre(event.target.value);
    const handelChangeApellido = (event) =>setApellido(event.target.value);
    const handelChangeMail = (event) => setMail(event.target.value);
    const handelChangeTelefono = (event) => setTelefono(event.target.value);
    const handelChangeComentario = (event)=> setComentario(event.target.value);
    if(idContacto)
    {
        <>
        <h1>Tu consulta fue enviada!</h1>
        <h3>Tu codigo de consulta es:{idContacto}</h3>
        <h3>Un representante se comunicara a la brevedad</h3>
        {setIdContacto('')}
        </>
    }
    return (
        <div className="formulario">
            <h2>Contacto</h2>
            <form action="" onSubmit={handelSumbit}>
                <h3>InformacionPersonal</h3>
                <label htmlFor="nombreYApellido">Nombre y Apellido</label>
                <br />
                <input type="text" name="nombreYApellido" placeholder="Fulano" value={nombre} onChange={handelChangeNombre} className="formato" />
                <input type="text" name="nombreYApellido" placeholder="Lopez" value={apellido} onChange={handelChangeApellido} className="formato"/>
                <br />
                <label htmlFor="mail">Mail</label>
                <br/>
                <input type="email" name="mail" placeholder="Fulano@contacto.com" value={mail} onChange={handelChangeMail} className="formato"/>
                <br/>
                <label htmlFor="Telefono">Telefono</label>
                <br />
                <input type="tel" name="telefono" placeholder="+5493876123158" value={telefono} onChange={handelChangeTelefono} className="formato" pattern='[0-9]{10}'/>
                <br />
                <small> Ingrese con el codigo de area y sin el 15</small>
                <br />
                <label htmlFor="comentario">Deja tu consulta</label>
                <br/>
                <textarea name="comentario" cols="44" rows="10" value={comentario} onChange={handelChangeComentario} className="formato"></textarea>
                <br />
                <button type='sumbit' className='btnEnviar'>Enviar</button>
            </form>
        </div>
    )
}
export default FormularioContacto;