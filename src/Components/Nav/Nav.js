import CardWidget from "./CardWidget";
import { Link } from "react-router-dom";

const Nav = ()=>
{
    return (
        <nav>
            <section> {/** Esta seccion es para poner en un lugar el logo que hace de boton de inicio */}
                <Link to ="/">KripperSport</Link>
            </section>
            <ul>
                <li>
                    <Link to="/category/Boxeo">Boxeo</Link>
                </li>
                <li>
                    <Link to="/category/MMA">MMA</Link>
                </li>
                <li>
                    <Link to="/category/Running">Running</Link>
                </li>
                <li>
                    <Link to="/category/Crossfit">CrossFit</Link>
                </li>
            </ul>
                
            <ul> {/** La idea de esta segunda lista es la de organzar de mejor forma la Nav */}
                <li>
                    <input type="text" placeholder="Buscar Productos" />
                </li>
                <li>
                    <Link to="/carrito"><CardWidget Icon={<span className="material-symbols-outlined">shopping_cart</span>}/></Link> 
                </li>
                <li>
                    <Link to="/favoritos"><CardWidget Icon={<span className="material-symbols-outlined">favorite</span>}/></Link>
                </li>
            </ul>
        </nav>
        );
}

export default Nav;