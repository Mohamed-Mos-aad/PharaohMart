// ** Style
import style from '../../style/pages/cart.module.css'
// ** Hooks && Tools
import { useAppDispatch } from '../../app/hooks';
import { removeProductFromCart, updateQuantity } from '../../app/features/cart/cartSlice';



// ** Interfacrs
interface ICartItem{
    productId: string;
    productName: string;
    productSeller: string;
    productPrice: number;
    productQuantity: number;
    productImage: string;
}



export default function CartItem({productId,productName,productSeller,productPrice,productQuantity,productImage}:ICartItem) {
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
    const removeProductFromCartHandler = ()=>{
        dispatch(
            removeProductFromCart({
            productId: productId,
            name: productName,
            sellerName: productSeller,
            quantity: 1,
            price: productPrice,
            imageUrl: productImage,
            })
        );
    }



    return (
        <>
            <div className={style.cart_item}>
                <div className={style.product}>
                    <div className={style.product_img}>
                        <img src={productImage} alt={productName} />
                    </div>
                    <div className={style.product_data}>
                        <h2>{productName}</h2>
                        <h3>{productSeller}</h3>
                        <h4>${productPrice}</h4>
                    </div>
                </div>
                <div className={style.product_count}>
                    {
                        productQuantity === 1 ? 
                        <button onClick={removeProductFromCartHandler}>x</button>
                        :
                        <button onClick={()=>{changeProductCountHandler('-')}}>-</button>
                    }
                    <span>{productQuantity}</span>
                    <button onClick={()=>{changeProductCountHandler('+')}}>+</button>
                </div>
            </div>
        </>
    )
}