// ** Style
import style from '../style/pages/product.module.css'
// ** Assets
import productImg1 from '../assets/images/test/Product imgs/productImg1.png'
import productImg2 from '../assets/images/test/Product imgs/productImg2.png'
import productImg3 from '../assets/images/test/Product imgs/productImg3.png'
import productImg4 from '../assets/images/test/Product imgs/productImg4.png'
import starIcon from '../assets/icons/product/starIcon.svg'
import unStarIcon from '../assets/icons/product/unStarIcon.svg'
import likeIcon from '../assets/icons/product/likeIcon.svg'
import unLikeIcon from '../assets/icons/product/unLikeIcon.svg'
// ** Hooks && Tools
import { useEffect, useState } from 'react';
import { useParams } from "react-router";
import HomeSection from '../components/HomeSection'



export default function Product() {
    // ** Defaults
    const { id } = useParams();



    // ** States
    const [previewPhoto,setPreviewPhoto] = useState<string>(productImg1);



    // ** Handlers
    const selectPreviewPhotoHandler = (photo:string)=>{
        setPreviewPhoto(photo);
    }



    // ** UseEffect
    useEffect(()=>{
        window.scrollTo({top: 0, behavior: 'smooth'});
    },[])



    return (
        <>
            <div className="global_container">
                <div className={style.product}>
                    <div className={style.product_data}>
                        <h3>Home <span>/</span> Clothing <span>/</span> <div>Women's Dresses</div></h3>
                        <h2>Product {id}</h2>
                        <h4>by Fashionista</h4>
                    </div>
                    <div className={style.product_item}>
                        <div className={style.product_item_photos}>
                            <div className={style.product_photos}>
                                <span style={{backgroundImage: `url(${productImg1})`}} onClick={()=>{selectPreviewPhotoHandler(productImg1)}}></span>
                                <span style={{backgroundImage: `url(${productImg2})`}} onClick={()=>{selectPreviewPhotoHandler(productImg2)}}></span>
                                <span style={{backgroundImage: `url(${productImg3})`}} onClick={()=>{selectPreviewPhotoHandler(productImg3)}}></span>
                                <span style={{backgroundImage: `url(${productImg4})`}} onClick={()=>{selectPreviewPhotoHandler(productImg4)}}></span>
                            </div>
                            <div className={style.preview} style={{backgroundImage: `url(${previewPhoto})`}}></div>
                        </div>
                        <div className={style.product_details}>
                            <h2>Product Details</h2>
                            <p>This elegant summer dress is perfect for any occasion. Made from lightweight, breathable fabric, it features a flattering silhouette and intricate detailing. Available in multiple sizes and colors.</p>
                            <h3>$79.99<span>$100</span><span>20% off</span></h3>
                            <div className={style.product_btns}>
                                <button>Add to Cart</button>
                                <button>Buy Now</button>
                            </div>
                            <button>Add to Wishlist</button>
                        </div>
                    </div>
                    <div className={style.product_review}>
                        <div className={style.customers_reviews}>
                            <div className={style.review}>
                            <div className={style.user_review}>
                                <div className={style.userPhoto}>
                                        <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="User Photo" />
                                    </div>
                                    <div className={style.user_review_data}>
                                        <h3>Emily Johnson</h3>
                                        <h5>March 10, 2024</h5>
                                    </div>
                                </div>
                                <div className={style.user_star_rate}>
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                </div>
                                <p>This product exceeded my expectations! The quality is excellent, and it arrived earlier than expected. Highly recommend to everyone!</p>
                                <div className={style.review_btns}>
                                    <button>
                                        <img src={likeIcon} alt="like icon" />
                                        <span>34</span>
                                    </button>
                                    <button>
                                        <img src={unLikeIcon} alt="unLike icon" />
                                        <span>3</span>
                                    </button>
                                </div>
                            </div>
                            <div className={style.review}>
                                <div className={style.user_review}>
                                    <div className={style.userPhoto}>
                                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User Photo" />
                                    </div>
                                    <div className={style.user_review_data}>
                                        <h3>Michael Lee</h3>
                                        <h5>April 22, 2024</h5>
                                    </div>
                                </div>
                                <div className={style.user_star_rate}>
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                </div>
                                <p>Very comfortable and stylish! I get compliments every time I wear it. Will buy again!</p>
                                <div className={style.review_btns}>
                                    <button>
                                        <img src={likeIcon} alt="like icon" />
                                        <span>20</span>
                                    </button>
                                    <button>
                                        <img src={unLikeIcon} alt="unLike icon" />
                                        <span>1</span>
                                    </button>
                                </div>
                            </div>
                            <div className={style.review}>
                                <div className={style.user_review}>
                                    <div className={style.userPhoto}>
                                        <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="User Photo" />
                                    </div>
                                    <div className={style.user_review_data}>
                                        <h3>Olivia Martinez</h3>
                                        <h5>May 5, 2024</h5>
                                    </div>
                                </div>
                                <div className={style.user_star_rate}>
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={unStarIcon} alt="unstar icon" />
                                </div>
                                <p>Good quality for the price. The material feels nice and durable. Will purchase again!</p>
                                <div className={style.review_btns}>
                                    <button>
                                        <img src={likeIcon} alt="like icon" />
                                        <span>15</span>
                                    </button>
                                    <button>
                                        <img src={unLikeIcon} alt="unLike icon" />
                                        <span>0</span>
                                    </button>
                                </div>
                            </div>
                            <div className={style.review}>
                                <div className={style.user_review}>
                                    <div className={style.userPhoto}>
                                        <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="User Photo" />
                                    </div>
                                    <div className={style.user_review_data}>
                                        <h3>James Wilson</h3>
                                        <h5>June 2, 2024</h5>
                                    </div>
                                </div>
                                <div className={style.user_star_rate}>
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={unStarIcon} alt="unstar icon" />
                                    <img src={unStarIcon} alt="unstar icon" />
                                </div>
                                <p>Not bad, but could be better. The color faded after a few washes.</p>
                                <div className={style.review_btns}>
                                    <button>
                                        <img src={likeIcon} alt="like icon" />
                                        <span>8</span>
                                    </button>
                                    <button>
                                        <img src={unLikeIcon} alt="unLike icon" />
                                        <span>4</span>
                                    </button>
                                </div>
                            </div>
                            <div className={style.review}>
                                <div className={style.user_review}>
                                    <div className={style.userPhoto}>
                                        <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="User Photo" />
                                    </div>
                                    <div className={style.user_review_data}>
                                        <h3>Sophia Patel</h3>
                                        <h5>July 12, 2024</h5>
                                    </div>
                                </div>
                                <div className={style.user_star_rate}>
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                </div>
                                <p>Absolutely love this dress! The fabric is so soft and comfortable, and the fit is perfect. I received so many compliments when I wore it to a summer party.</p>
                                <div className={style.review_btns}>
                                    <button>
                                        <img src={likeIcon} alt="like icon" />
                                        <span>25</span>
                                    </button>
                                    <button>
                                        <img src={unLikeIcon} alt="unLike icon" />
                                        <span>2</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={style.customers_rates}>
                            <div className={style.over_rate}>
                                <h2>4.5</h2>
                                <div className={style.over_rate_stars}>
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={starIcon} alt="star icon" />
                                    <img src={unStarIcon} alt="unStar icon" />
                                </div>
                                <h3>125 reviews</h3>
                            </div>
                            <div className={style.all_rate}>
                                <div className={style.star_rate}>5<div className={style.rate_bar}><span style={{width: `${40}%`}}></span></div><span>40%</span></div>
                                <div className={style.star_rate}>4<div className={style.rate_bar}><span style={{width: `${30}%`}}></span></div><span>30%</span></div>
                                <div className={style.star_rate}>3<div className={style.rate_bar}><span style={{width: `${15}%`}}></span></div><span>15%</span></div>
                                <div className={style.star_rate}>2<div className={style.rate_bar}><span style={{width: `${10}%`}}></span></div><span>10%</span></div>
                                <div className={style.star_rate}>1<div className={style.rate_bar}><span style={{width: `${5}%`}}></span></div><span>5%</span></div>
                            </div>
                        </div>
                    </div>
                    <HomeSection sectionTitle='Related Products'/>
                </div>
            </div>
        </>
    )
}
