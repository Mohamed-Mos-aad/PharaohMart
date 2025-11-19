// ** Style
import style from "../../style/components/review/reviewAdding.module.css";
// ** Assets
import starIcon from '../../assets/icons/product/starIcon.svg'
import unStarIcon from '../../assets/icons/product/unStarIcon.svg'
import sendIcon from "../../assets/icons/form/sendIcon.svg";
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
import { errorMsg } from "../../app/features/messagePop/messagePopSlice";
interface IReviewAdding{
    productData: IProduct;
    onSent: ()=> void;
}



export default function ReviewAdding({productData,onSent}:IReviewAdding) {
    // ** Defaults
    const { userData } = usePharaohMartData();
    const dispatch = useDispatch();


    // ** States
    const isLogin: boolean = userData ? true : false;
    const userId = userData?.id ? userData.id.toString() : '';
    const [userStarsRate, setUserStartRate] = useState<number>(0);
    const [review, setReview] = useState<INewReview>({
        user: isLogin ? userId : "",
        product: productData?.documentId ?? "",
        userComment: "",
        like: 0,
        unLike: 0,
        userRate: 0,
    });


    // ** Handlers
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
        if (!productData && !isLogin && !userData) return;

        if(userStarsRate === 0){
            dispatch(errorMsg({message: "Please Select Rate"}))
            return
        }
        await addProductReviewAction(review);
            setReview((prev) => ({ ...prev, userComment: "" }));
            onSent();
        } catch (error) {
        console.log(error);
        }
    };




    // ** Renders
    const userStarsRateRender = Array.from({ length: 5 }, (_, idx) => (
    <img 
        src={idx < userStarsRate ? starIcon : unStarIcon}
        alt="star" 
        key={idx} 
        onClick={()=>{
        let rate = idx + 1;
        if(rate === userStarsRate)
        {
            rate = 0
        }
        setUserStartRate(rate)
        setReview(prev => ({...prev,userRate: rate}))
        }}
    />
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
                        placeholder="Enter Your Review"
                        value={review.userComment || ""}
                        onChange={inputValueChangeHandler}
                    />
                </div>
                <button onClick={sentReview}>
                    <img src={sendIcon} alt="send button" />
                </button>
            </div>
        </>
    )
}