// ** Style
import style from '../../style/pages/cart.module.css'
// ** Assets
import CartItem from '../../components/cart/CartItem'
import CartDetails from '../../components/cart/CartDetails'



export default function Cart() {
    return (
        <>
            <div className="global_container">
                <div className={style.cart}>
                    <h1>Shopping Cart</h1>
                    <div className={style.cart_products}>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className={style.cart_coupon}>
                        <input type="text" placeholder='Enter Coupon'/>
                    </div>
                    <h2>Order Summary</h2>
                    <CartDetails />
                    <div className={style.cart_btns}>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}