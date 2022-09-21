import { Link } from "react-router-dom";
import './footer.css';
const Footer = ()=>
{
    return (
        <footer>
            <ul>
                <li><a href="https://web.facebook.com/krippersport">Facebook</a></li>
                <li><a href="https://www.instagram.com/krippersport/">Instagram</a></li>
                <li><Link to ="/contacto">Contacto</Link></li>
            </ul>
        </footer>
    );
}
export default Footer;