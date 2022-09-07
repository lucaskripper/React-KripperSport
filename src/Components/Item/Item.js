import './item.css'
import { Link } from 'react-router-dom';
const Item = ({producto})=>
{
    return (
        <Link to={`/item/${producto.id}`}>
            <div className="contenedor" id={producto.id}>
                <div className="tarjeta">
                    <img src={producto.imagen} alt={producto.nombre} />
                    <h2>{producto.nombre}</h2>
                    <p>${producto.precio}.-</p>
                    <p>{producto.descripcion}</p>
                </div>
            </div>
        </Link>
    )
}
export default Item;