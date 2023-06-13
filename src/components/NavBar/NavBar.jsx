import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
            <h3 className={styles.titulo}>Ecommerce</h3>
            </Link>
            <div className={categories}>
                <NavLink to={`/category/cafe`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Cafe </NavLink>
                <NavLink to={`/category/te`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Te </NavLink>
                <NavLink to={`/category/extras`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Extras </NavLink>
            </div>
            <div className={styles.carritocontador}>
            <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;