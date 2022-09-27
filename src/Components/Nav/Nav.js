import CardWidget from "./CardWidget";
import { Link, NavLink } from "react-router-dom";
import './nav.css';
import { useContext } from "react";
import { CarritoContexto } from "../../Context/CartContext";
const Nav = ()=>
{
    const {unidades}=useContext(CarritoContexto)
    return (
        <nav>
            <section> {/** Esta seccion es para poner en un lugar el logo que hace de boton de inicio */}
                <Link to ="/"><img src="https://res.cloudinary.com/dvwqrbanv/image/upload/v1662583861/Logo-PhotoRoom_wfeeod.png" alt="KripperSport" /></Link>
            </section>
            <ul>
                <li>
                    <NavLink to="/category/Boxeo" className="menu">Boxeo</NavLink>
                </li>
                <li>
                    <NavLink to="/category/MMA" className="menu">MMA</NavLink>
                </li>
                <li>
                    <NavLink to="/category/Running" className="menu">Running</NavLink>
                </li>
                <li>
                    <NavLink to="/category/Crossfit" className="menu">CrossFit</NavLink>
                </li>
                <li>
                    <NavLink to="/carrito" className="menu"><CardWidget Icon={<span className="material-symbols-outlined">shopping_cart</span>}/></NavLink> 
                </li>
                <li>
                    {unidades !== 0 && <p className="unidades">{unidades}</p>}
                </li>
            </ul>
        </nav>
        );
}

export default Nav;