import './item.css'
import { Link } from 'react-router-dom';
const Item = ({producto})=>
{
    return (
            <div className="contenedor" id={producto.id}>
                <div className="tarjeta">
                    <Link to={`/item/${producto.id}`}>
                        <img src={producto.imagen} alt={producto.nombre} />
                        <h2>{producto.nombre}</h2>
                        <p>${producto.precio}.-</p>
                    </Link>
                </div>
            </div>
    )
}
export default Item;