import cart from './assets/cart.png'
import './CartWidget.css'

const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-wdiget" className="cart-img"/>
            0
        </div>
    )
}

export default CartWidget