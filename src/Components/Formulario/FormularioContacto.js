import './formularioContacto.css'
import { useState } from 'react'
const FormularioContacto = ()=>
{
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [comentario, setComentario] = useState('');

    const handelSumbit= (event) => 
    {
        event.preventDefault()
        console.log(nombre)
        console.log(apellido)
        console.log(mail)
        console.log(telefono)
        console.log(comentario)
        setNombre("")
        setApellido("")
        setMail("")
        setTelefono("")
        setComentario("")
    };
    const handelChangeNombre = (event) => setNombre(event.target.value);
    const handelChangeApellido = (event) =>setApellido(event.target.value);
    const handelChangeMail = (event) => setMail(event.target.value);
    const handelChangeTelefono = (event) => setTelefono(event.target.value);
    const handelChangeComentario = (event)=> setComentario(event.target.value);
    return (
        <div className="formulario">
            <h2>Contacto</h2>
            <form action="" onSubmit={handelSumbit}>
                <legend>InformacionPersonal</legend>
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
                <input type="tel" name="telefono" placeholder="+5493876123158" value={telefono} onChange={handelChangeTelefono} className="formato"/>
                <br />
                <label htmlFor="comentario">Deja tu consulta</label>
                <br/>
                <textarea name="comentario" cols="44" rows="10" value={comentario} onChange={handelChangeComentario} className="formato"></textarea>
                <br />
                <button type='sumbit' className='btnEnviar'>Enviar</button>
                <button type='reset' className='btnEnviar'>Limpiar</button>
            </form>
        </div>
    )
}
export default FormularioContacto;