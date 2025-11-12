// ** Style
import style from "../style/pages/product.module.css";
// ** Hooks && Tools
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addProductToCart, removeProductFromCart } from "../app/features/cart/cartSlice";
import { getPharaohMartData } from "../utils/localStorage";
// ** Components
import HomeSection from "../components/HomeSection";
import ProductData from "../components/product/ProductData";
import ProductItem from "../components/product/ProductItem";
import UserReview from "../components/product/UserReview";
import OverRate from "../components/product/OverRate";
// ** Interfaces
import type { IFakeDataProduct } from "../interfaces";
// ** Data
import { fakeData } from "../data/fakeData";
import { addProductToFavourite, removeProductFromFavourite } from "../app/features/favourite/favouriteSlice";

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
  const [productData, setProductData] = useState<IFakeDataProduct>();

  // ** Handlers
  const addToCartHandler = () => {
    if (!productData) return;

    const exists = cart.products.some(
      (product) => product.productId === productData.id
    );

    if (!exists) {
      dispatch(
        addProductToCart({
          productId: productData.id!,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price.productPrice,
          imageUrl: productData.mainImage,
        })
      );
    }
  };
  const removeProductFromCartHandler = ()=>{
    if (!productData) return;

    const exists = cart.products.some(
      (product) => product.productId === productData.id
    );

    if (exists) {
      dispatch(
        removeProductFromCart({
          productId: productData.id!,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price.productPrice,
          imageUrl: productData.mainImage,
        })
      );
    }
  }
  const checkProductInCartHandler = () => {
    if (!productData) return false;

    const found = cart.products.some(
      (product: IFavouriteProduct) => product.productId === productData.id
    );
    return found;
  };
  const addToFavouriteHandler = () => {
    if (!productData) return;

    const exists = favourite.products.some(
      (product) => product.productId === productData.id
    );

    if (!exists) {
      dispatch(
        addProductToFavourite({
          productId: productData.id!,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price.productPrice,
          imageUrl: productData.mainImage,
        })
      );
    }
  };
  const removeFromFavouriteHandler = ()=>{
    if (!productData) return;

    const exists = favourite.products.some(
      (product) => product.productId === productData.id
    );

    if (exists) {
      dispatch(
        removeProductFromFavourite({
          productId: productData.id!,
          name: productData.name,
          sellerName: productData.name,
          quantity: 1,
          price: productData.price.productPrice,
          imageUrl: productData.mainImage,
        })
      );
    }
  }
  const checkProductInFavouriteHandler = () => {
    if (!productData) return false;

    const found = favouriteProducts.favourite.products.some(
      (product: IFavouriteProduct) => product.productId === productData.id
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
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const getProduct = fakeData.find((product) => product.id === id);
    setProductData(getProduct);
  }, [productData, id]);

  if (!productData) return;



  return (
    <>
      <div className="global_container">
        <div className={style.product}>
          <ProductData name={productData?.name} seller={"by Fashionista"} />
          <ProductItem
            productThumbnail={{
              src: productData.mainImage,
              alt: productData.name,
            }}
            productPhotos={productData.images}
            productDescription={productData.description}
            productPrice={productData?.price.productPrice || 0}
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
                overRate={{
                  oneStar: productData?.overRate?.oneStar || 0,
                  twoStars: productData?.overRate?.twoStars || 0,
                  threeStars: productData?.overRate?.threeStars || 0,
                  fourStars: productData?.overRate?.fourStars || 0,
                  fiveStars: productData?.overRate?.fiveStars || 0,
                }}
              />
            </div>
          </div>
          <HomeSection
            sectionTitle="Related Products"
            category={productData.category}
          />
        </div>
      </div>
    </>
  );
}
