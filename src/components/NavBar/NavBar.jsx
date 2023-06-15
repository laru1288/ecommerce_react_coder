import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css'
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'>
            <h3 className='Titulo'>Cafeteria</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/cafe`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Cafe </NavLink>
                <NavLink to={`/category/accesorios`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Accesorios </NavLink>
                <NavLink to={`/category/extras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Extras </NavLink>
            </div>
            <div className='CarritoContador'>
            <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;