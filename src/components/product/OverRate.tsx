// ** Style
import style from '../../style/pages/product.module.css'
// ** Assets
import starIcon from '../../assets/icons/product/starIcon.svg'
import unStarIcon from '../../assets/icons/product/unStarIcon.svg'



// ** Interfaces
interface IOverRate{
    overRate: {
        oneStar: number,
        twoStars: number,
        threeStars: number,
        fourStars: number,
        fiveStars: number
    }
}



export default function OverRate({overRate}:IOverRate) {
    // ** States
    const totalReviews = overRate.oneStar + overRate.twoStars + overRate.threeStars + overRate.fourStars + overRate.fiveStars;


    if (totalReviews === 0) {
        return (
            <div className={style.over_rate}>
                <h2>0.0</h2>
                <div className={style.over_rate_stars}>
                    {Array.from({ length: 5 }, (_, i) => (
                        <img key={i} src={unStarIcon} alt="unStar icon" />
                    ))}
                </div>
                <h3>0 reviews</h3>
            </div>
        );
    }



    // ** Calculating
    const totalRating = (
        overRate.oneStar * 1 +
        overRate.twoStars * 2 +
        overRate.threeStars * 3 +
        overRate.fourStars * 4 +
        overRate.fiveStars * 5
    );
    const percent = {
        one: (overRate.oneStar / totalReviews) * 100,
        two: (overRate.twoStars / totalReviews) * 100,
        three: (overRate.threeStars / totalReviews) * 100,
        four: (overRate.fourStars / totalReviews) * 100,
        five: (overRate.fiveStars / totalReviews) * 100,
    };
    const averageRating = totalRating / totalReviews;


    
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
