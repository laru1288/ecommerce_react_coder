import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce</h3>
            <div>
                <button>Cafe</button>
                <button>Te</button>
                <button>Extras</button>
            </div>
            <CartWidget />
        </nav>
    );
};

export default NavBar;