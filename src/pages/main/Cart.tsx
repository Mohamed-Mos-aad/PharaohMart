// ** Assets
import testImg from '../../assets/images/test/Product imgs/productImg1.png'
// ** Style
import style from '../../style/pages/cart.module.css'



export default function Cart() {
    return (
        <>
            <div className="global_container">
                <div className={style.cart}>
                    <h1>Shopping Cart</h1>
                    <div className={style.cart_products}>
                        <div className={style.cart_item}>
                            <div className={style.product}>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test img" />
                                </div>
                                <div className={style.product_data}>
                                    <h2>Wireless Noise-Canceling Headphones</h2>
                                    <h3>Sold by: Tech Emporium</h3>
                                </div>
                            </div>
                            <div className={style.product_count}>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className={style.cart_item}>
                            <div className={style.product}>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test img" />
                                </div>
                                <div className={style.product_data}>
                                    <h2>Wireless Noise-Canceling Headphones</h2>
                                    <h3>Sold by: Tech Emporium</h3>
                                </div>
                            </div>
                            <div className={style.product_count}>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className={style.cart_item}>
                            <div className={style.product}>
                                <div className={style.product_img}>
                                    <img src={testImg} alt="test img" />
                                </div>
                                <div className={style.product_data}>
                                    <h2>Wireless Noise-Canceling Headphones</h2>
                                    <h3>Sold by: Tech Emporium</h3>
                                </div>
                            </div>
                            <div className={style.product_count}>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                    <div className={style.cart_coupon}>
                        <input type="text" placeholder='Enter Coupon'/>
                    </div>
                    <h2>Order Summary</h2>
                    <div className={style.cart_details}>
                        <ul>
                            <li>
                                <div>Subtotal</div>
                                <div>$250.00</div>
                            </li>
                            <li>
                                <div>Delivery</div>
                                <div>$5.00</div>
                            </li>
                            <li>
                                <div>Discount</div>
                                <div>-$10.00</div>
                            </li>
                        </ul>
                        <div className={style.cart_total}>
                            <ul>
                                <li>
                                    <div>Total</div>
                                    <div>$245.00</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={style.cart_btns}>
                        <button>Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}