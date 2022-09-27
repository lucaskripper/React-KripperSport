import {addDoc,collection,doc,serverTimestamp,updateDoc} from 'firebase/firestore';
import React, { useState } from 'react';
import { bd } from '../../fireBaseConfiguraciones';

const FormularioCompra = ({ cart, total, clearCart, handleId }) => {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            buyer: { nombre: nombre, apellido: apellido },
            items: cart,
            total: total,
            date: serverTimestamp(),
        };

        const ordersCollection = collection(bd, 'orders');

        addDoc(ordersCollection, order).then((res) => {
            handleId(res.id);
            clearCart();
            updateprod();
        });
    };

    const updateprod = () => {
        const orderDoc = doc(bd, 'orders', 'A29yVRkpjasoaRfEo3G5');
        updateDoc(orderDoc, { total: 100 });
    };

    const handleChangeNombre = (event) => {
        //console.log(event.target.value);
        setNombre(event.target.value);
    };

    const handleChangeApellido = (event) => {
        setApellido(event.target.value);
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre..."
                    name="nombre"
                    value={nombre}
                    onChange={handleChangeNombre}
                />
                <input
                    type="text"
                    placeholder="Apellido..."
                    name="apellido"
                    value={apellido}
                    onChange={handleChangeApellido}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
};

export default FormularioCompra;