// ** Style
import style from '../../style/pages/product.module.css'
// ** Assets
import starIcon from '../../assets/icons/product/starIcon.svg'
import unStarIcon from '../../assets/icons/product/unStarIcon.svg'
import likeIcon from '../../assets/icons/product/likeIcon.svg'
import unLikeIcon from '../../assets/icons/product/unLikeIcon.svg'



// ** Interfaces
interface IUserReview{
    userData: {
        userPhoto: {
            src: string,
            alt: string
        },
        userName: string,
        date: string
    };
    userRate: number;
    userComment: string;
    UserSupport: {
        like: number,
        unLike: number
    }
}



export default function UserReview({userData,userRate,userComment,UserSupport}:IUserReview) {
    // ** Render
    const rateStarsRender = Array.from({ length: 5 }, (_, index) => {
        if (index < userRate) {
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
                        <img src={userData.userPhoto.src} alt={userData.userPhoto.alt} />
                    </div>
                    <div className={style.user_review_data}>
                        <h3>{userData.userName}</h3>
                        <h5>{userData.date}</h5>
                    </div>
                </div>
                <div className={style.user_star_rate}>
                    {rateStarsRender}
                </div>
                <p>{userComment}</p>
                <div className={style.review_btns}>
                    <button>
                        <img src={likeIcon} alt="like icon" />
                        <span>{UserSupport.like}</span>
                    </button>
                    <button>
                        <img src={unLikeIcon} alt="unLike icon" />
                        <span>{UserSupport.like}</span>
                    </button>
                </div>
            </div>
        </>
    )
}
