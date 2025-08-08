// ** Style
import style from '../style/pages/product.module.css'
// ** Hooks && Tools
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { addProductToCart } from '../app/features/cart/cartSlice';
// ** Components
import HomeSection from '../components/HomeSection'
import ProductData from '../components/product/ProductData'
import ProductItem from '../components/product/ProductItem'
import UserReview from '../components/product/UserReview'
import OverRate from '../components/product/OverRate'
// ** Interfaces
import type { IProduct } from '../interfaces';
// ** Data
import { fakeData } from '../data/fakeData';
import { addProductToFavourite } from '../app/features/favourite/favouriteSlice';



export default function Product() {
    // ** Defaults
    const { id } = useParams();
    const dispatch = useAppDispatch()
    const cart = useAppSelector(state => state.cart);
    const favourite = useAppSelector(state => state.favourite);



    // ** States
    const [productData,setProductData] = useState<IProduct>();



    // ** Handlers
    const addToCartHandler = () => {
        if(!productData) return;

        const exists = cart.products.some(
            product => product.productId === productData.id
        );

        if (!exists) {
            dispatch(addProductToCart({
                productId: productData.id,
                name: productData.name,
                sellerName: productData.name,
                quantity: 1,
                price: productData.price.productPrice,
                imageUrl: productData.mainImage
            }));
        }
    }
    const addToFavouriteHandler = ()=> {
        if(!productData) return;

        const exists = favourite.products.some(
            product => product.productId === productData.id
        );

        if (!exists) {
            dispatch(addProductToFavourite({
                productId: productData.id,
                name: productData.name,
                sellerName: productData.name,
                quantity: 1,
                price: productData.price.productPrice,
                imageUrl: productData.mainImage
            }));
        }
    }



    // ** Renders
    const reviewRender = productData?.reviews.map(review => 
        <UserReview 
            key={review.userData.userName}
            userData={{ userPhoto: { src: 'https://randomuser.me/api/portraits/women/45.jpg', alt: 'User Photo' }, userName: review.userData.userName, date: review.userData.date }} 
            userRate={review.userRate} 
            userComment= {review.userComment} 
            UserSupport={{ like: review.UserSupport.like, unLike: review.UserSupport.unLike }} 
        />
    )


    // ** UseEffect
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
        const getProduct = fakeData.find(product => product.id === id);
        setProductData(getProduct);
    },[productData,id])



    return (
        <>
            <div className="global_container">
                <div className={style.product}>
                    <ProductData name={productData?.name} seller={'by Fashionista'}/>
                    <ProductItem productDescription='This elegant summer dress is perfect for any occasion. Made from lightweight, breathable fabric, it features a flattering silhouette and intricate detailing. Available in multiple sizes and colors.'
                    productPrice={productData?.price.productPrice || 0} productDiscount={productData?.price.productDiscount || ''} productOff={productData?.price.productOff || ''}
                    addToCartHandler={addToCartHandler}
                    addToFavouriteHandler={addToFavouriteHandler}/>
                    <div className={style.product_review}>
                        <div className={style.customers_reviews}>
                            {reviewRender}
                        </div>
                        <div className={style.customers_rates}>
                            <OverRate overRate={{oneStar: productData?.overRate.oneStar || 0, twoStars: productData?.overRate.twoStars || 0, threeStars: productData?.overRate.threeStars || 0, fourStars: productData?.overRate.fourStars || 0, fiveStars: productData?.overRate.fiveStars || 0}}/>
                        </div>
                    </div>
                    <HomeSection sectionTitle='Related Products' category='Kids & Toys'/>
                </div>
            </div>
        </>
    )
}
