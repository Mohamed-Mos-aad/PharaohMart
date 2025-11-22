// ** Style
import style from "../../style/components/review/reviewAdding.module.css";
// ** Assets
import starIcon from '../../assets/icons/product/starIcon.svg'
import unStarIcon from '../../assets/icons/product/unStarIcon.svg'
import sendIcon from "../../assets/icons/form/sendIcon.svg";
import loadingIcon from "../../assets/icons/ui/loadingIcon.svg";
// ** Hooks && Tools
import { useState } from "react";
import { useDispatch } from 'react-redux';
// ** Components
import TextAreaInputElement from "../../components/ui/TextAreaInputElement";
// ** Utils
import { usePharaohMartData } from "../../hooks/usePharaoMartData";
// ** Actions
import { addProductReviewAction } from "../../api/data/reviewsActions";
// ** Interfaces
import type { INewReview, IProduct } from "../../interfaces";
import { errorMsg, successMsg } from "../../app/features/messagePop/messagePopSlice";
interface IReviewAdding{
    productData: IProduct;
    onSent: ()=> void;
}



export default function ReviewAdding({productData,onSent}:IReviewAdding) {
    // ** Defaults
    const { userData } = usePharaohMartData();
    const isLogin: boolean = userData ? true : false;
    const userId = userData?.id ? userData.id.toString() : '';
    const reviewData:INewReview = {
        user: isLogin ? userId : "",
        product: productData?.documentId ?? "",
        userComment: "",
        like: 0,
        unLike: 0,
        userRate: 0,
    }
    const dispatch = useDispatch();


    // ** States
    const [isLoading, setIsLoading] = useState(false);
    const [review, setReview] = useState<INewReview>(reviewData);
    const [error, setError] = useState("");



    // ** Handlers
    const inputValueChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.currentTarget;
        setError("");
        setReview((prev) => ({
            ...prev,
            userComment: value,
        }));
    };
    const sentReview = async () => {
        try {
            if (!productData) return;

            if(!isLogin || !userData){
                dispatch(errorMsg({message: "Please Log in First"}))
                return
            }

            if(review.userRate === 0){
                dispatch(errorMsg({message: "Please Select Rate"}))
                return
            }


            if(review.userComment.trim().length < 10){
                setError("Review must be at least 10 characters")
                return
            }

            if(review.userComment.trim().length > 500){
                setError("Review is too long (max 500 characters)")
                return
            }

            setIsLoading(true);
            await addProductReviewAction(review);
            dispatch(successMsg({message: "Review added successfully!"}));
            setReview(reviewData);
            setError("");
            onSent();
        } catch (error) {
            console.log(error);
            dispatch(errorMsg({message: "Failed to add review"}));
        } finally {
            setIsLoading(false);
        }
    };




    // ** Renders
    const userStarsRateRender = Array.from({ length: 5 }, (_, idx) => (
        <img 
            src={idx < review.userRate ? starIcon : unStarIcon}
            alt="star" 
            key={idx} 
            onClick={()=>{
                let rate = idx + 1;
                if(rate === review.userRate){
                    rate = 0
                }
                setReview(prev => ({...prev,userRate: rate}))
            }}/>
    ));



    return (
        <>
            <div className={style.add_review}>
                <div className={style.review}>
                    <div className={style.stars_rate}>
                        {userStarsRateRender}
                    </div>
                    <TextAreaInputElement
                        id="review"
                        label="Review"
                        name="review"
                        error={error}
                        placeholder="Enter Your Review"
                        value={review.userComment || ""}
                        onChange={inputValueChangeHandler}
                    />
                </div>
                <button onClick={sentReview} disabled={isLoading}>
                    <img src={isLoading ? loadingIcon : sendIcon} alt="send button" className={isLoading ? style.loading_spinner : ''}/>
                </button>
            </div>
        </>
    )
}