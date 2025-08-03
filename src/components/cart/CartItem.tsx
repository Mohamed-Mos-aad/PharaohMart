// ** Style
import style from '../../style/pages/cart.module.css'
// ** Assets
import testImg from '../../assets/images/test/Product imgs/productImg1.png'
// ** Hooks && Tools
import { useState } from 'react'



// ** Interfacrs
interface ICartItem{
    productName: string;
    productSeller: string;
}



export default function CartItem({productName,productSeller}:ICartItem) {
    // ** States
    const [productCount,setProductCount] = useState<number>(1)



    // ** Handlers
    const changeProductCountHandler = (changeType:string)=>{
        if(changeType === '+')
        {
            setProductCount(productCount + 1);
        }
        else if(changeType === '-')
        {
            setProductCount(productCount - 1);
        }
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
                    </div>
                </div>
                <div className={style.product_count}>
                    <button onClick={()=>{changeProductCountHandler('-')}}>-</button>
                    <span>{productCount}</span>
                    <button onClick={()=>{changeProductCountHandler('+')}}>+</button>
                </div>
            </div>
        </>
    )
}