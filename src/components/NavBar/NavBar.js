import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = (props) => {
    return(
        <nav className = "navBar">
            <h1>{props.name}</h1>
            <button className = "buttons">
                INICIO
            </button>

            <button className = "buttons">
                PALETAS
            </button>

            <button className = "buttons">
                INDUMENTARIA
            </button>

            <button className = "buttons">
                ACCESORIOS
            </button>
            
            <CartWidget />
        </nav>
    )
}

export default NavBar;