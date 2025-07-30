// ** Style
import style from '../../style/components/cardSlider.module.css'
// ** Assets
import rightArrowIcon from '../../assets/icons/slider/rightArrowIcon.svg'
import leftArrowIcon from '../../assets/icons/slider/leftArrowIcon.svg'
import testImg from '../../assets/images/test/sellerTestImg.png'
// ** Hooks && Tools
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';



export default function CardSlider() {
    // ** Defaults
    const navigate = useNavigate();



    // ** States
    const [sliderSteps,setSliderSteps] = useState<number>(0);



    // ** Ref
    const sldierRef = useRef<HTMLDivElement>(null);



    // ** Handlers
    const sliderMoveHandler = (dir:string)=>{
        const totalCards = 9;
        const sliderBar = sldierRef.current?.parentElement;
        if (!sldierRef.current || !sliderBar) return;

        const cardWidth = 176;
        const visibleWidth = sliderBar.clientWidth;
        const cardsPerStep = Math.round(visibleWidth / cardWidth);
        const maxSteps = Math.ceil(totalCards / cardsPerStep) - 1;
        const moveBy = cardWidth * cardsPerStep;


        if (sldierRef.current)
        {
            if (dir === 'left' && sliderSteps > 0)
            {
                const newStep = sliderSteps - 1;
                sldierRef.current.style.transform = `translateX(-${newStep * moveBy}px)`
                setSliderSteps(newStep);
            }

            if (dir === 'right' && sliderSteps < maxSteps)
            {
                const newStep = sliderSteps + 1;
                sldierRef.current.style.transform = `translateX(-${newStep * moveBy}px)`
                setSliderSteps(newStep);
            }
        }
    }
    const openProductHandler = (productId:string)=>{
        navigate(`/product/${productId}`)
    }



    return (
        <>
            <div className={style.cards_slider}>
                <button onClick={()=>{sliderMoveHandler('left')}}>
                    <img src={leftArrowIcon} alt="left arrow icon" />
                </button>
                <div className={style.cards_slider_bar}>
                    <div className={style.cards} ref={sldierRef}>
                        <div className={style.card_item} onClick={()=>{openProductHandler('1')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 1</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('2')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 2</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('3')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 3</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('4')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 4</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('5')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 5</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('6')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 6</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('7')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 7</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('8')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 8</h3>
                        </div>
                        <div className={style.card_item} onClick={()=>{openProductHandler('9')}}>
                            <div className={style.card_img} style={{backgroundImage: `url(${testImg})`}}></div>
                            <h3>Smart Watch 9</h3>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{sliderMoveHandler('right')}}>
                    <img src={rightArrowIcon} alt="right arrow icon" />
                </button>
            </div>
        </>
    )
}