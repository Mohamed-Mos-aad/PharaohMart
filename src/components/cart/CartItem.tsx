// ** Style
import style from '../../style/pages/cart.module.css'
// ** Assets
import testImg from '../../assets/images/test/Product imgs/productImg1.png'
// ** Hooks && Tools
import { useAppDispatch } from '../../app/hooks';
import { updateQuantity } from '../../app/features/cart/cartSlice';



// ** Interfacrs
interface ICartItem{
    productId: string;
    productName: string;
    productSeller: string;
    productPrice: number;
    productQuantity: number;
}



export default function CartItem({productId,productName,productSeller,productPrice,productQuantity}:ICartItem) {
    // ** Defaults
    const dispatch = useAppDispatch();



    // ** Handlers
    const changeProductCountHandler = (changeType:string)=>{
        let newQuantity = productQuantity;
        if(changeType === '+')
        {
            newQuantity = productQuantity + 1;
        }
        else if(changeType === '-')
        {
            if(productQuantity > 1)
            {
                newQuantity = productQuantity - 1;
            }
        }

        dispatch(updateQuantity({ productId, quantity: newQuantity }));
    } 




    return (
        <>
            <div className={style.cart_item}>
                <div className={style.product}>
                    <div className={style.product_img}>
                        <img src={testImg} alt="test img" />
                    </div>
                    <div className={style.product_data}>
                        <h2>{productName}</h2>
                        <h3>{productSeller}</h3>
                        <h4>${productPrice}</h4>
                    </div>
                </div>
                <div className={style.product_count}>
                    <button onClick={()=>{changeProductCountHandler('-')}}>-</button>
                    <span>{productQuantity}</span>
                    <button onClick={()=>{changeProductCountHandler('+')}}>+</button>
                </div>
            </div>
        </>
    )
}