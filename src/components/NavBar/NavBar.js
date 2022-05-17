import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom'
const NavBar = (props) => {
    return (
        <nav className="nav-bar">
            <h1>{props.name}</h1>
            <div className='button-container'>
                <button className="buttons">
                    <NavLink className={({ isActive }) => isActive ? 'paletas-link' : 'nav-link'} to='/'>INICIO</NavLink>
                </button>

                <button className="buttons">
                    <NavLink className={({ isActive }) => isActive ? 'paletas-link' : 'nav-link'} to='/List'>PRODUCTOS</NavLink>
                </button>

            </div>
            <CartWidget />


        </nav>
    )
}

export default NavBar;