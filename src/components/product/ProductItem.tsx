// ** Style
import style from '../../style/pages/product.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react'



// ** Interfaces
import type { IImage } from '../../interfaces';
interface IProductItem{
    productThumbnail: {
        src: string;
        alt: string
    };
    productPhotos: IImage[];
    productDescription: string;
    productPrice: number;
    productDiscount: string;
    productOff: string;
    addToCartHandler: ()=> void;
    addToFavouriteHandler: ()=> void;
    removeFromFavouriteHandler: ()=> void;
    removeProductFromCartHandler: ()=> void;
    addedToWishList: boolean;
    addedToCart: boolean;
}



export default function ProductItem({productThumbnail, productPhotos, productDescription, productPrice, productDiscount, productOff, addToCartHandler, removeProductFromCartHandler, addToFavouriteHandler, removeFromFavouriteHandler, addedToWishList, addedToCart }:IProductItem) {
    // ** States
    const [previewPhoto,setPreviewPhoto] = useState<string>(productThumbnail.src);
    const [zooming,setZooming] = useState<boolean>(false);
    const [zoomPosition,setZoomPosition] = useState<{x: number,y:number}>({x: 0, y: 0})
    


    // ** Handlers
    const selectPreviewPhotoHandler = (photo:IImage)=>{
        setPreviewPhoto(photo.url);
    }
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setZoomPosition({ x, y });
    };



    // ** Render
    const productPhotosRender = productPhotos.map(photo => 
        <span onClick={()=>{selectPreviewPhotoHandler(photo)}} key={`${photo.name}`}>
            <img src={photo.url} alt={productDescription} />
        </span>
    )



    // ** UseEffect
    useEffect(()=>{
        setPreviewPhoto(productThumbnail.src);
    },[productThumbnail])



    return (
        <>
            <div className={style.product_item}>
                <div className={style.product_item_photos}>
                    <div className={style.product_photos}>
                        {productPhotosRender}
                    </div>
                    <div className={style.preview}
                        style={{backgroundImage: `url(${previewPhoto})`}} onMouseMove={handleMouseMove}
                        onMouseEnter={() => setZooming(true)}
                        onMouseLeave={() => setZooming(false)}>
                        {
                            zooming && 
                            <div className={style.zoom} style={{
                                left: `calc(${zoomPosition.x}% - 100px)`, 
                                top: `calc(${zoomPosition.y}% - 100px)`,
                                backgroundImage: `url(${previewPhoto})`,
                                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`}}>
                            </div>
                        }
                    </div>
                </div>
                <div className={style.product_details}>
                    <h2>Product Details</h2>
                    <p>{productDescription}</p>
                    <h3>${productPrice}<span>{productOff}</span><span>{productDiscount}Off</span></h3>
                    <div className={style.product_btns}>
                        {
                            addedToCart ?
                            <button onClick={removeProductFromCartHandler}>Remove from Cart</button>
                            :
                            <button onClick={addToCartHandler}>Add to Cart</button>
                        }
                        <button>Buy Now</button>
                    </div>
                    {
                        addedToWishList ? 
                            <button onClick={removeFromFavouriteHandler}>remove from Wishlist</button>
                            :
                            <button onClick={addToFavouriteHandler}>Add to Wishlist</button>
                    }
                </div>
            </div>
        </>
    )
}
