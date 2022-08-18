import CardWidget from "./CardWidget";

const Nav = ()=>
{
    return (
        <nav>
            <section> {/** Esta seccion es para poner en un lugar el logo que hace de boton de inicio */}
                <a href="https://google.com">KripperSport</a>
            </section>
            <ul>
                <li>
                    <a href="https://google.com">Boxeo</a>
                </li>
                <li>
                    <a href="https://google.com">MMA</a>
                </li>
                <li>
                    <a href="https://google.com">Gym | Funcional</a>
                </li>
                <li>
                    <a href="https://google.com">Suplementación</a>
                </li>
            </ul>
                
            <ul> {/** La idea de esta segunda lista es la de organzar de mejor forma la Nav */}
                <li>
                    <input type="text" placeholder="Buscar Productos" />
                </li>
                <li>
                    <a href="https://google.com"><CardWidget Icon={<span className="material-symbols-outlined">shopping_cart</span>}/></a> 
                </li>
                <li>
                    <a href="https://google.com"><CardWidget Icon={<span className="material-symbols-outlined">favorite</span>}/></a>
                </li>
            </ul>
        </nav>
        );
}

export default Nav;