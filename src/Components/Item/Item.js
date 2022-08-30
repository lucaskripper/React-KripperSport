import './item.css';
const Item = ({producto})=>
{
    return (
        <div className="contenedor" id={producto.id}>
            <div className="tarjeta">
                <img src={producto.imagen} alt={producto.nombre} />
                <h2>{producto.nombre}</h2>
                <p>${producto.precio}.-</p>
                <p>{producto.descripcion}</p>
            </div>
        </div>
    )
}
export default Item;