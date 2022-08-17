const Nav = (prop)=>
{
    if(prop.menu)
    {
        return (
            <nav>
                <section> {/** Esta seccion es para poner en un lugar el logo que hace de boton de inicio */}
                    <a href="https://google.com">Logo</a>
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
                        <a href="https://google.com">Carrito de compras</a> 
                    </li>
                    <li>
                        <a href="https://google.com">Productos Favoritos</a>
                    </li>
                </ul>
            </nav>
        );
    }
    else {/** Por el momento lo hice asi, pero no se si me convence */}
    {
        return(
            <nav>
                <ul>
                    <li>
                        <a href="https://google.com">Instagram</a>
                    </li>
                    <li>
                        <a href="https://google.com">Facebook</a>
                    </li>
                </ul>
            </nav>
        );
    }
}
export default Nav;