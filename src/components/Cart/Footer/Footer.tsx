import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import { calculateTotal } from '../../../helpers/calculate';
import './styles.css';

const Footer = () => {
    const { cartItems } = useContext(CartContext);
    return (
        <div className='shopping-cart-footer'>
            <div className="cart-summary">
                <div className="cart-summary-row">
                    <div className='label'>Total</div>
                    <div className='value'>R$ { calculateTotal(cartItems).toFixed(2) }</div>
                </div>
            </div>
            <div className="d-grid gap-2">
                <Link className='btn btn-primary' to='/checkout'>Continuar para o pagamento</Link>
            </div>     
        </div>
    )
}

export default Footer;
