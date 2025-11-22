// ** Style
import style from '../../style/pages/product.module.css'
// ** Assets
import starIcon from '../../assets/icons/product/starIcon.svg'
import unStarIcon from '../../assets/icons/product/unStarIcon.svg'



// ** Interfaces
import type { IReview } from '../../interfaces';
interface IOverRate{
    reviews: IReview[]
}



export default function OverRate({reviews}:IOverRate) {
    // ** States
    const totalReviews = reviews.length;



    // ** Calculating
    const oneStar = reviews.filter(r => r.userRate === 1).length;
    const twoStars = reviews.filter(r => r.userRate === 2).length;
    const threeStars = reviews.filter(r => r.userRate === 3).length;
    const fourStars = reviews.filter(r => r.userRate === 4).length;
    const fiveStars = reviews.filter(r => r.userRate === 5).length;
    const totalRating = ( oneStar * 1 + twoStars * 2 + threeStars * 3 + fourStars * 4 + fiveStars * 5 );
    const percent = {
        one: totalReviews > 0 ? (oneStar / totalReviews) * 100 : 0,
        two: totalReviews > 0 ? (twoStars / totalReviews) * 100 : 0,
        three: totalReviews > 0 ? (threeStars / totalReviews) * 100 : 0,
        four: totalReviews > 0 ? (fourStars / totalReviews) * 100 : 0,
        five: totalReviews > 0 ? (fiveStars / totalReviews) * 100 : 0,
    };
    const averageRating = totalReviews > 0 ? totalRating / totalReviews : 0;


    
    // ** Render
    const rateStarsRender = Array.from({ length: 5 }, (_, index) => {
        const rounded = Math.round(averageRating * 2) / 2;
        if (index < Math.floor(rounded)) {
            return <img key={index} src={starIcon} alt="star icon" />;
        }
        else {
            return <img key={index} src={unStarIcon} alt="unStar icon" />;
        }
    });



    return (
        <>
            <div className={style.over_rate}>
                <h2>{averageRating.toFixed(1)}</h2>
                <div className={style.over_rate_stars}>
                    {rateStarsRender}
                </div>
                <h3>{totalReviews} reviews</h3>
            </div>
            <div className={style.all_rate}>
                <div className={style.star_rate}>5<div className={style.rate_bar}><span style={{width: `${percent.five}%`}}></span></div><span>{percent.five.toFixed(1)}%</span></div>
                <div className={style.star_rate}>4<div className={style.rate_bar}><span style={{width: `${percent.four}%`}}></span></div><span>{percent.four.toFixed(1)}%</span></div>
                <div className={style.star_rate}>3<div className={style.rate_bar}><span style={{width: `${percent.three}%`}}></span></div><span>{percent.three.toFixed(1)}%</span></div>
                <div className={style.star_rate}>2<div className={style.rate_bar}><span style={{width: `${percent.two}%`}}></span></div><span>{percent.two.toFixed(1)}%</span></div>
                <div className={style.star_rate}>1<div className={style.rate_bar}><span style={{width: `${percent.one}%`}}></span></div><span>{percent.one.toFixed(1)}%</span></div>
            </div>
        </>
    )
}
