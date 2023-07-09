import { useContext } from "react"
import { CartContext } from '../../context/CartContext';
import trash from './assets/trash.svg'

const CartItem = ({ id, name, price, quantity }) => {
    const { removeItem } = useContext(CartContext);
  
    return (
      <div className="carrito">
        <div>
          <div>
            <h3>{name}</h3>
          </div>
          <div>
            <small>Cantidad</small>
            <p>{quantity}</p>
          </div>
          <div>
            <small>Precio</small>
            <p>${price}</p>
          </div>
          <div>
            <small>Subtotal</small>
            <p>${price * quantity}</p>
          </div>
          <button
            className="Button"
            onClick={() => removeItem(id)}
          >
            <img src={trash} alt="trash"/>
          </button>
        </div>
      </div>
    );
  };

  export default CartItem