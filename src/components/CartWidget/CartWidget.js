import { useContext } from 'react'
import cart from './assets/cart.png'
import './CartWidget.css'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom' 

const CartWidget = () => {
    const {totalQuanitity}= useContext(CartContext)

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuanitity > 0 ? 'block': 'none'}}>
            <img className='CartImg' src={cart} alt='cart-wdiget'/>
            { totalQuanitity }
        </Link>
    )
}

export default CartWidget