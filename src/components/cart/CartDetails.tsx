// ** Style
import style from '../../style/pages/cart.module.css'



export default function CartDetails() {
    return (
        <>
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
        </>
    )
}