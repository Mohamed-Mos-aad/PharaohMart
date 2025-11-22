// ** Style
import style from "../style/pages/product.module.css";
// ** Hooks && Tools
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addProductToCart, removeProductFromCart } from "../app/features/cart/cartSlice";
import { addProductToFavourite, removeProductFromFavourite } from "../app/features/favourite/favouriteSlice";
// ** Components
import ProductData from "../components/product/ProductData";
import ProductItem from "../components/product/ProductItem";
import UserReview from "../components/reviews/UserReview";
import OverRate from "../components/reviews/OverRate";
import ReviewAdding from "../components/reviews/ReviewAdding";
// ** Actions
import { getSpecificProductAction } from "../api/data/productActions";
import { getSpecificProductReviewsAction } from "../api/data/reviewsActions";
// ** Interfaces
import type { IProduct, IReview } from "../interfaces";
import { usePharaohMartData } from "../hooks/usePharaoMartData";
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
  const favouriteProducts = useAppSelector((state) => state.favourite);
  const { userData } = usePharaohMartData()
  const navigate = useNavigate();


  // ** States
  const [productData, setProductData] = useState<IProduct>();
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

    const exists = favouriteProducts.products.some(
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

    const exists = favouriteProducts.products.some(
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

    const found = favouriteProducts.products.some(
      (product: IFavouriteProduct) =>
        product.productId === productData.documentId
    );
    return found;
  };
  const checkReviewLikedHandler = (review: IReview)=>{
      if (!userData || !review.likes) return false;
      return review.likes.some(u => u.documentId === userData.documentId);
  }
  const checkReviewUnLikedHandler = (review: IReview)=>{
      if (!userData || !review.unLikes) return false;
      return review.unLikes.some(u => u.documentId === userData.documentId);
  }
  const getProductReviewsDataHandler = async () => {
    try {
      if (id) {
        const result = await getSpecificProductReviewsAction(id);

        const sorted = [...result].sort(
          (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setReviews(sorted);
      }
    } catch (error) {
      console.log(error);
    }
  };



  // ** Renders
  const reviewsRender = reviews.map((review) => (
    <UserReview
      key={review.documentId}
      reviewsUpdated={getProductReviewsDataHandler}
      review={review}
      userLiked={checkReviewLikedHandler(review)}
      userUnLiked={checkReviewUnLikedHandler(review)}
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
      getProductReviewsDataHandler();
    }
  }, [productData, id]);

  if (!productData) return <></>;
  if (!productData.isPublished) navigate('/');


  
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
            productPrice={productData?.salePrice || 0}
            addToCartHandler={addToCartHandler}
            addToFavouriteHandler={addToFavouriteHandler}
            removeFromFavouriteHandler={removeFromFavouriteHandler}
            removeProductFromCartHandler={removeProductFromCartHandler}
            addedToWishList={checkProductInFavouriteHandler()}
            addedToCart={checkProductInCartHandler()}
          />
          <div className={style.product_review}>
            <div className={style.customers_reviews}>
              <ReviewAdding productData={productData} onSent={getProductReviewsDataHandler}/>
              {reviewsRender}
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
