// ** Style
import style from '../../style/pages/product.module.css'
// ** Assets
import productImg1 from '../../assets/images/test/Product imgs/productImg1.png'
import productImg2 from '../../assets/images/test/Product imgs/productImg2.png'
import productImg3 from '../../assets/images/test/Product imgs/productImg3.png'
import productImg4 from '../../assets/images/test/Product imgs/productImg4.png'
// ** Hooks && Tools
import { useState } from 'react'



// ** Interfaces
interface IProductItem{
    productDescription: string;
    productPrice: number;
    productDiscount: string;
    productOff: string;
}



export default function ProductItem({productDescription,productPrice,productDiscount,productOff}:IProductItem) {
    // ** States
    const [previewPhoto,setPreviewPhoto] = useState<string>(productImg1);



    // ** Handlers
    const selectPreviewPhotoHandler = (photo:string)=>{
        setPreviewPhoto(photo);
    }



    return (
        <>
            <div className={style.product_item}>
                <div className={style.product_item_photos}>
                    <div className={style.product_photos}>
                        <span onClick={()=>{selectPreviewPhotoHandler(productImg1)}}>
                            <img src={productImg1} alt="product Img1" />
                        </span>
                        <span onClick={()=>{selectPreviewPhotoHandler(productImg2)}}>
                            <img src={productImg2} alt="product Img2" />
                        </span>
                        <span onClick={()=>{selectPreviewPhotoHandler(productImg3)}}>
                            <img src={productImg3} alt="product Img3" />
                        </span>
                        <span onClick={()=>{selectPreviewPhotoHandler(productImg4)}}>
                            <img src={productImg4} alt="product Img4" />
                        </span>
                    </div>
                    <div className={style.preview} style={{backgroundImage: `url(${previewPhoto})`}}></div>
                </div>
                <div className={style.product_details}>
                    <h2>Product Details</h2>
                    <p>{productDescription}</p>
                    <h3>${productPrice}<span>{productOff}</span><span>{productDiscount}Off</span></h3>
                    <div className={style.product_btns}>
                        <button>Add to Cart</button>
                        <button>Buy Now</button>
                    </div>
                    <button>Add to Wishlist</button>
                </div>
            </div>
        </>
    )
}
