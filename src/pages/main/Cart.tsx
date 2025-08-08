// ** Style
import style from '../../style/pages/cart.module.css'
// ** Assets
import CartItem from '../../components/cart/CartItem'
import CartDetails from '../../components/cart/CartDetails'
import { useAppSelector } from '../../app/hooks'



export default function Cart() {
    // ** States
    const cart = useAppSelector(state => state.cart);



    // ** Renders
    const cartItemsRender = cart.products.map(product => 
        <CartItem key={product.productId} productId={product.productId} productName={product.name} productSeller={product.sellerName} productPrice={product.price} productQuantity={product.quantity}/>
    )


    
    return (
        <>
            <div className="global_container">
                <div className={style.cart}>
                    <h1>Shopping Cart</h1>
                    <div className={style.cart_products}>
                        {cartItemsRender}
                    </div>
                    <div className={style.cart_coupon}>
                        <input type="text" placeholder='Enter Coupon'/>
                    </div>
                    <h2>Order Summary</h2>
                    <CartDetails cartSubtotal={0} cartDelivery={5} cartDiscount={0}/>
                    <div className={style.cart_btns}>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}