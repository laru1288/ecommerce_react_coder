import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div className="NoItem">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className="Option">Ver productos</Link>
            </div>
        )
    }

    return (
        <div className='cartItems'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Button">Vaciar carrito</button>
            <Link to='/checkout' className="Option">Checkout</Link>
        </div>
    )
}

export default Cart