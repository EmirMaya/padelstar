import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
const NavBar = (props) => {
    return (
        <nav className="nav-bar">
            <h1>{props.name}</h1>
            <div className='button-container'>
                <button className="buttons">
                    INICIO
                </button>

                <button className="buttons">
                    <NavLink className={({isActive}) => isActive ? 'paletas-link' : 'nav-link'} to='/List'>PALETAS</NavLink>
                </button>

                <button className="buttons">
                    INDUMENTARIA
                </button>

                <button className="buttons">
                    ACCESORIOS
                </button>
            </div>

            <CartWidget />
        </nav>
    )
}

export default NavBar;