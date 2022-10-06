import { Spinner } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './load.css'
const Load = ()=>
{
    return( 
    <div className="load">
        <div>
            <img src="https://res.cloudinary.com/dvwqrbanv/image/upload/v1662583861/Logo-PhotoRoom_wfeeod.png" alt="KripperSport" />
        </div>
        <div>
            <Spinner color="warning" type="grow"/>
            <Spinner color="warning" type="grow"/>
            <Spinner color="warning" type="grow"/>
            <Spinner color="warning" type="grow"/>
            <Spinner color="warning" type="grow"/>
            <Spinner color="warning" type="grow"/>
            <Spinner color="warning" type="grow"/>
        </div>
    </div>
    )
}
export default Load;