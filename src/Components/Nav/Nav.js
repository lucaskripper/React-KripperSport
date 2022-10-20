import CardWidget from "./CardWidget";
import { Link, NavLink } from "react-router-dom";
import './nav.css';
import { useContext, useState } from "react";
import { CarritoContexto } from "../../Context/CartContext";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { bd } from "../../fireBaseConfiguraciones";
const Nav = ()=>
{
    const [categoria, setCategoria] = useState([])
    const [mostrar, setMostrar] = useState("");
    const {unidades}=useContext(CarritoContexto)
    useEffect(()=>
    {
        const colleccionCategoria = collection(bd, 'categorias');
        getDocs(colleccionCategoria)
        .then((res)=>
        {
           const cat = res.docs.map((cat)=>
           {
                return{
                    id: cat.id,
                    ...cat.data(),
                }
           })
           setCategoria(cat)
        })
        .catch((error)=>console.log(error))

    },[])
    return (
        <nav className={mostrar}>
            <section>
                <Link to ="/"><img src="https://res.cloudinary.com/dvwqrbanv/image/upload/v1662583861/Logo-PhotoRoom_wfeeod.png" alt="KripperSport" /></Link>
            </section>
            <ul>
                {categoria.map((cat)=>
                {
                    return(
                        <li key={cat.id}>
                            <NavLink to={cat.ruta} className="menu">{cat.nombre}</NavLink>
                        </li>
                    )
                })}
                <li>
                    <NavLink to="/carrito" className="menu"><CardWidget Icon={<span className="material-symbols-outlined">shopping_cart</span>}/></NavLink> 
                </li>
                <li>
                    {unidades !== 0 && <p className="unidades">{unidades}</p>}
                </li>
            </ul>
            <button className="hamburguesa " onClick={()=> mostrar === "" ? setMostrar("show") : setMostrar("")}><CardWidget Icon={<span class="material-symbols-outlined iconoHamburgesa">menu</span>}/></button>
        </nav>
        );
}

export default Nav;