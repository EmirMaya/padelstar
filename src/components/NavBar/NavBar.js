import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = (props) => {
    return(
        <nav class = "navBar">
            <h1>{props.name}</h1>
            <button class = "buttons">
                INICIO
            </button>

            <button class = "buttons">
                PALETAS
            </button>

            <button class = "buttons">
                INDUMENTARIA
            </button>

            <button class = "buttons">
                ACCESORIOS
            </button>
            
            <CartWidget />
        </nav>
    )
}

export default NavBar;