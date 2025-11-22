// ** Style
import style from '../../style/pages/product.module.css'
// ** Assets
import starIcon from '../../assets/icons/product/starIcon.svg'
import unStarIcon from '../../assets/icons/product/unStarIcon.svg'
import likeIcon from '../../assets/icons/product/likeIcon.svg'
import likedIcon from '../../assets/icons/reviews/likedIcon.svg'
import unLikeIcon from '../../assets/icons/product/unLikeIcon.svg'
import unLikedIcon from '../../assets/icons/reviews/unLikedIcon.svg'
// ** Utils
import { formatDate } from "../../utils/date";
// ** Actions
import { updateSpecificProductReviewAction } from '../../api/data/reviewsActions'
// ** Hooks && Tools
import { usePharaohMartData } from '../../hooks/usePharaoMartData'
import { useDispatch } from 'react-redux'
// ** Interfaces
import type { IReview } from '../../interfaces'
import { errorMsg } from '../../app/features/messagePop/messagePopSlice'
interface IUserReview{
    review: IReview,
    reviewsUpdated: ()=> void,
    userLiked: boolean,
    userUnLiked: boolean
}



export default function UserReview({review,reviewsUpdated, userLiked, userUnLiked}:IUserReview) {
    // ** Defaults
    const dispatch = useDispatch();



    // ** States
    const { userData } = usePharaohMartData();



    // ** Handlers
    const likeReviewHandler = async ()=>{
        if (!userData) {
            dispatch(errorMsg({message: "Please Log in First"}))
            return
        };
        let updatedLikes = []
        if (!userLiked && !userUnLiked) {
            updatedLikes = [
                ...(review.likes?.map(u => typeof u === "string" ? u : u.documentId) ?? []),
                userData.documentId
            ];
        } else {
            updatedLikes = (
                review.likes?.map(u => typeof u === "string" ? u : u.documentId) ?? []
            ).filter(id => id !== userData.documentId);
        }

        try {
            await updateSpecificProductReviewAction(review.documentId, {
                like: updatedLikes.length,
                likes: updatedLikes
            });
            reviewsUpdated();
        } catch (error) {
            console.log(error);
        }
    }

    const unlikeReviewHandler = async ()=>{
        if (!userData) {
            dispatch(errorMsg({message: "Please Log in First"}))
            return
        };
        let updatedUnLikes = []
        if (!userUnLiked && !userLiked) {
            updatedUnLikes = [
                ...(review.unLikes?.map(u => typeof u === "string" ? u : u.documentId) ?? []),
                userData.documentId
            ];
        } else {
            updatedUnLikes = (
                review.likes?.map(u => typeof u === "string" ? u : u.documentId) ?? []
            ).filter(id => id !== userData.documentId);
        }

        try{
            await updateSpecificProductReviewAction(review.documentId,{unLike: updatedUnLikes.length, unLikes: updatedUnLikes});
            reviewsUpdated();
        }catch(error){
            console.log(error)
        }
    }



    // ** Render
    const rateStarsRender = Array.from({ length: 5 }, (_, index) => {
        if (index < review.userRate) {
        return <img key={index} src={starIcon} alt="star icon" />;
        } else {
        return <img key={index} src={unStarIcon} alt="unStar icon" />;
        }
    });


    
    return (
        <>
            <div className={style.review}>
                <div className={style.user_review}>
                    <div className={style.userPhoto}>
                        {
                            typeof review.user.logo === "object" && review.user.logo?.url ? (
                                <img src={review.user.logo.url} alt={review.user.username} />
                            ) : (
                                <div>{review.user.username[0]}</div>
                            )
                        }
                    </div>
                    <div className={style.user_review_data}>
                        <h3>{review.user.username}</h3>
                        <h4>{formatDate(review.publishedAt)}</h4>
                    </div>
                </div>
                <div className={style.user_star_rate}>
                    {rateStarsRender}
                </div>
                <p>{review.userComment}</p>
                <div className={style.review_btns}>
                    <button onClick={likeReviewHandler}>
                        {
                            userLiked ? 
                            <img src={likedIcon} alt="liked icon" />
                            :
                            <img src={likeIcon} alt="like icon" />
                        }
                        <span>{review.like}</span>
                    </button>
                    <button onClick={unlikeReviewHandler}>
                        {
                            userUnLiked ? 
                            <img src={unLikedIcon} alt="unLiked icon" />
                            :
                            <img src={unLikeIcon} alt="unLike icon" />
                        }
                        <span>{review.unLike}</span>
                    </button>
                </div>
            </div>
        </>
    )
}
