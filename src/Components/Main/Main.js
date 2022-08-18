import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Main = ()=>
{
    return (
        <main>
                <ItemListContainer greeting={<h2 style={{color:"blue", textAlign:"center",}}>Bienvenidos a mi tienda</h2>}/>
        </main>
    )
}
export default Main;