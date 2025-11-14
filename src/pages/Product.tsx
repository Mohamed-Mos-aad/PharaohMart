// ** Style
import style from "../style/pages/product.module.css";
// ** Hooks && Tools
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addProductToCart, removeProductFromCart } from "../app/features/cart/cartSlice";
import { getPharaohMartData } from "../utils/localStorage";
// ** Components
import ProductData from "../components/product/ProductData";
import ProductItem from "../components/product/ProductItem";
import UserReview from "../components/product/UserReview";
import OverRate from "../components/product/OverRate";
// ** Interfaces
import type { IProduct } from "../interfaces";
// ** Data
import { addProductToFavourite, removeProductFromFavourite } from "../app/features/favourite/favouriteSlice";
import { getSpecificProductAction } from "../api/data/productActions";

// ** Interfaces
interface IFavouriteProduct {
  productId: string;
  name: string;
  sellerName: string;
  quantity: number;
  price: number;
  imageUrl: string;
}

export default function Product() {
  // ** Defaults
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const favourite = useAppSelector((state) => state.favourite);
  const favouriteProducts = getPharaohMartData();

  // ** States
  const [productData, setProductData] = useState<IProduct>();

  // ** Handlers
  const addToCartHandler = () => {
    if (!productData) return;

    const exists = cart.products.some(
      (product) => product.productId === productData.documentId
    );

    if (!exists) {
      dispatch(
        addProductToCart({
          productId: productData.documentId!,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price,
          imageUrl: productData.mainImage.url,
        })
      );
    }
  };
  const removeProductFromCartHandler = ()=>{
    if (!productData) return;

    const exists = cart.products.some(
      (product) => product.productId === productData.documentId
    );

    if (exists) {
      dispatch(
        removeProductFromCart({
          productId: productData.documentId!,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price,
          imageUrl: productData.mainImage.url,
        })
      );
    }
  }
  const checkProductInCartHandler = () => {
    if (!productData) return false;

    const found = cart.products.some(
      (product: IFavouriteProduct) => product.productId === productData.documentId
    );
    return found;
  };
  const addToFavouriteHandler = () => {
    if (!productData) return;

    const exists = favourite.products.some(
      (product) => product.productId === productData.documentId
    );

    if (!exists) {
      dispatch(
        addProductToFavourite({
          productId: productData.documentId!,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price,
          imageUrl: productData.mainImage.url,
        })
      );
    }
  };
  const removeFromFavouriteHandler = ()=>{
    if (!productData) return;

    const exists = favourite.products.some(
      (product) => product.productId === productData.documentId
    );

    if (exists) {
      dispatch(
        removeProductFromFavourite({
          productId: productData.documentId,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price,
          imageUrl: productData.mainImage.url,
        })
      );
    }
  }
  const checkProductInFavouriteHandler = () => {
    if (!productData) return false;

    const found = favouriteProducts.favourite.products.some(
      (product: IFavouriteProduct) => product.productId === productData.documentId
    );
    return found;
  };



  // ** Renders
  const reviewRender = productData?.reviews?.map((review) => (
    <UserReview
      key={review.userData.userName}
      userData={{
        userPhoto: {
          src: "https://randomuser.me/api/portraits/women/45.jpg",
          alt: "User Photo",
        },
        userName: review.userData.userName,
        date: review.userData.date,
      }}
      userRate={review.userRate}
      userComment={review.userComment}
      UserSupport={{
        like: review.UserSupport.like,
        unLike: review.UserSupport.unLike,
      }}
    />
  ));



  // ** UseEffect
  useEffect(()=>{
    const getProductDataHandler = async ()=>{
      try{
        if(id)
        {
          const result = await getSpecificProductAction(id)
          setProductData(result)
        }
      }catch(error){
        console.log(error)
      }
    }
    getProductDataHandler()
  },[id])

  if (!productData) return;



  return (
    <>
      <div className="global_container">
        <div className={style.product}>
          <ProductData name={productData?.name} category={productData.categories[0].title} seller={productData.owner.storeName} />
          <ProductItem
            productThumbnail={{
              src: productData.mainImage.url,
              alt: productData.name,
            }}
            productPhotos={productData.images}
            productDescription={productData.description}
            productPrice={productData?.price || 0}
            productDiscount={""}
            productOff={""}
            addToCartHandler={addToCartHandler}
            addToFavouriteHandler={addToFavouriteHandler}
            removeFromFavouriteHandler={removeFromFavouriteHandler}
            removeProductFromCartHandler={removeProductFromCartHandler}
            addedToWishList={checkProductInFavouriteHandler()}
            addedToCart={checkProductInCartHandler()}
          />
          <div className={style.product_review}>
            <div className={style.customers_reviews}>{reviewRender}</div>
            <div className={style.customers_rates}>
              <OverRate
                reviews={productData?.reviews}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
