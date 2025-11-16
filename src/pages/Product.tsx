// ** Style
import style from "../style/pages/product.module.css";
// ** Assets
import sendIcon from "../assets/icons/form/sendIcon.svg";
// ** Hooks && Tools
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addProductToCart,
  removeProductFromCart,
} from "../app/features/cart/cartSlice";
import { getPharaohMartData } from "../utils/localStorage";
// ** Components
import ProductData from "../components/product/ProductData";
import ProductItem from "../components/product/ProductItem";
import UserReview from "../components/product/UserReview";
import OverRate from "../components/product/OverRate";
import TextAreaInputElement from "../components/ui/TextAreaInputElement";
// ** Data
import {
  addProductToFavourite,
  removeProductFromFavourite,
} from "../app/features/favourite/favouriteSlice";
// ** Actions
import { getSpecificProductAction } from "../api/data/productActions";
import {
  addProductReviewAction,
  getSpecificProductReviewsAction,
} from "../api/data/reviewsActions";
// ** Utils
import { formatDate } from "./../utils/date";
// ** Interfaces
import type { IProduct, INewReview, IReview, IImage } from "../interfaces";
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
  const data = JSON.parse(localStorage.getItem("userData") || "null");

  // ** States
  const [productData, setProductData] = useState<IProduct>();
  const isLogin: boolean = data ? true : false;
  const [review, setReview] = useState<INewReview>({
    user: isLogin ? data.id : "",
    product: productData?.documentId ?? "",
    userComment: "",
    like: 0,
    unLike: 0,
    userRate: 0,
  });
  const [reviews, setReviews] = useState<IReview[]>([]);

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
  const removeProductFromCartHandler = () => {
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
  };
  const checkProductInCartHandler = () => {
    if (!productData) return false;

    const found = cart.products.some(
      (product: IFavouriteProduct) =>
        product.productId === productData.documentId
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
  const removeFromFavouriteHandler = () => {
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
  };
  const checkProductInFavouriteHandler = () => {
    if (!productData) return false;

    const found = favouriteProducts.favourite.products.some(
      (product: IFavouriteProduct) =>
        product.productId === productData.documentId
    );
    return found;
  };
  const inputValueChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = e.currentTarget;
    setReview((prev) => ({
      ...prev,
      userComment: value,
    }));
  };
  const sentReview = async () => {
    try {
      if (!productData && !isLogin) return;
      console.log(review);
      await addProductReviewAction(review);
      setReview((prev) => ({ ...prev, userComment: "" }));
    } catch (error) {
      console.log(error);
    }
  };

  // ** Renders
  const reviewRender = reviews.map((review) => (
    <UserReview
      key={review.documentId}
      userData={{
        userPhoto: (review.user.logo as IImage) ?? "",
        userName: review.user.username,
        date: formatDate(review.publishedAt),
      }}
      userRate={review.userRate}
      userComment={review.userComment}
      UserSupport={{
        like: review.like,
        unLike: review.unLike,
      }}
    />
  ));

  // ** UseEffect
  useEffect(() => {
    const getProductDataHandler = async () => {
      try {
        if (id) {
          const result = await getSpecificProductAction(id);
          setProductData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProductDataHandler();
  }, [id]);
  useEffect(() => {
    if (productData) {
      const getProductReviewsDataHandler = async () => {
        try {
          if (id) {
            const result = await getSpecificProductReviewsAction(id);
            setReviews(result);
          }
        } catch (error) {
          console.log(error);
        }
      };
      getProductReviewsDataHandler();
      setReview((prev) => ({
        ...prev,
        product: productData.documentId,
      }));
    }
  }, [productData, id]);

  if (!productData) return <></>;

  return (
    <>
      <div className="global_container">
        <div className={style.product}>
          <ProductData
            name={productData?.name}
            category={productData.categories[0].title}
            seller={productData.owner.storeName}
          />
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
            <div className={style.customers_reviews}>
              <div className={style.add_review}>
                <TextAreaInputElement
                  id="review"
                  label="Review"
                  name="review"
                  placeholder="Enter Your Review"
                  value={review.userComment || ""}
                  onChange={inputValueChangeHandler}
                />
                <button onClick={sentReview}>
                  <img src={sendIcon} alt="send button" />
                </button>
              </div>
              {reviewRender}
            </div>
            <div className={style.customers_rates}>
              <OverRate reviews={productData?.reviews} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
