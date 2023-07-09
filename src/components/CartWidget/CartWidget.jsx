import cart from './assets/cart.svg'
import './CartWidget.css'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useCart()
  
    return (
      <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}>
        <img className='CartImg' src={cart} alt='cart-widget' />
        { totalQuantity}
      </Link>
    )
  }
  
  export default CartWidget;