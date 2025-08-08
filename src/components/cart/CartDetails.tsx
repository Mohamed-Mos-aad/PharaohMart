// ** Style
import { useAppSelector } from '../../app/hooks';
import style from '../../style/pages/cart.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react';



// ** Interface
interface ICartDetails{
    cartSubtotal: number;
    cartDelivery: number;
    cartDiscount: number;
}



export default function CartDetails({cartSubtotal,cartDelivery,cartDiscount}:ICartDetails) {
    // ** States
    const cart = useAppSelector(state => state.cart)
    const [cartDetailst,setCartDetailst] = useState({
        subtotal: cartSubtotal,
        delivery: cartDelivery,
        discount: cartDiscount,
        total: 0
    })



    // ** UseEffect
    useEffect(()=>{
        const subtotal = parseFloat(cart.totalAmount.toFixed(2));
        const totalPrice = parseFloat((subtotal + cartDetailst.delivery - cartDetailst.discount).toFixed(2));
        setCartDetailst(prev => ({
            ...prev,
            total: totalPrice,
            subtotal: subtotal
        }))
    },[cartDetailst.subtotal, cartDetailst.delivery, cartDetailst.discount, cart])



    return (
        <>
            <div className={style.cart_details}>
                <ul>
                    <li>
                        <div>Subtotal</div>
                        <div>$ {cartDetailst.subtotal}</div>
                    </li>
                    <li>
                        <div>Delivery</div>
                        <div>$ {cartDetailst.delivery}</div>
                    </li>
                    <li>
                        <div>Discount</div>
                        <div>- ${cartDetailst.discount}</div>
                    </li>
                </ul>
                <div className={style.cart_total}>
                    <ul>
                        <li>
                            <div>Total</div>
                            <div>$ {cartDetailst.total}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}