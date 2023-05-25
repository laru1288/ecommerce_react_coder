import CartWidget from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";


const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <h3 className={styles.titulo}>Ecommerce</h3>
            <div className={styles.botones}>
                <button className={styles.boton}>Cafe</button>
                <button className={styles.boton}>Te</button>
                <button className={styles.boton}>Extras</button>
            </div>
            <div className={styles.carritocontador}>
            <CartWidget />0
            </div>
        </nav>
    );
};

export default NavBar;