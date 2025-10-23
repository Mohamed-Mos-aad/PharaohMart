// ** Style
import style from '../../style/pages/cart.module.css'
// ** Hooks && Tools
import { useAppSelector } from '../../app/hooks'
import { useNavigate } from 'react-router'
// ** Components
import CartItem from '../../components/cart/CartItem'
import CartDetails from '../../components/cart/CartDetails'



export default function Cart() {
    // ** Default 
    const navigate = useNavigate();



    // ** States
    const cart = useAppSelector(state => state.cart);



    // ** Handlers
    const goToCheckoutHandler = ()=>{
        navigate('/checkout');
    }



    // ** Renders
    const cartItemsRender = cart.products.map(product => 
        <CartItem key={product.productId} productId={product.productId} productName={product.name} productSeller={product.sellerName} productPrice={product.price} productQuantity={product.quantity}/>
    )


    
    return (
        <>
            <div className="global_container">
                <div className={style.cart}>
                    <h1>Shopping Cart</h1>
                    {
                        cart.products.length === 0 ?
                            <h2>Your cart is empty</h2>
                        :
                        <>    
                            <div className={style.cart_products}>
                                {cartItemsRender}
                            </div>
                            <div className={style.cart_coupon}>
                                <input type="text" placeholder='Enter Coupon'/>
                            </div>
                            <h2>Order Summary</h2>
                            <CartDetails cartSubtotal={0} cartDelivery={5} cartDiscount={0}/>
                            <div className={style.cart_btns}>
                                <button onClick={goToCheckoutHandler}>Proceed to Checkout</button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}