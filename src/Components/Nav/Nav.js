import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";
import './nav.css';

const Nav = ()=>
{
    return (
        <nav>
            <section> {/** Esta seccion es para poner en un lugar el logo que hace de boton de inicio */}
                <Link to ="/"><img src="https://res.cloudinary.com/dvwqrbanv/image/upload/v1662583861/Logo-PhotoRoom_wfeeod.png" alt="KripperSport" /></Link>
            </section>
            <ul>
                <li>
                    <Link to="/category/Boxeo" className="menu">Boxeo</Link>
                </li>
                <li>
                    <Link to="/category/MMA" className="menu">MMA</Link>
                </li>
                <li>
                    <Link to="/category/Running" className="menu">Running</Link>
                </li>
                <li>
                    <Link to="/category/Crossfit" className="menu">CrossFit</Link>
                </li>
            </ul>
                
            <ul> {/** La idea de esta segunda lista es la de organzar de mejor forma la Nav */}
                <li>
                    <input type="text" placeholder="Buscar Productos" />
                </li>
                <li>
                    <Link to="/carrito" className="menu"><CardWidget Icon={<span className="material-symbols-outlined">shopping_cart</span>}/></Link> 
                </li>
            </ul>
        </nav>
        );
}

export default Nav;