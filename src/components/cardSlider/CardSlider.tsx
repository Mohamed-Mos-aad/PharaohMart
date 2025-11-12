// ** Style
import style from '../../style/components/cardSlider.module.css'
// ** Assets
import rightArrowIcon from '../../assets/icons/slider/rightArrowIcon.svg'
import leftArrowIcon from '../../assets/icons/slider/leftArrowIcon.svg'
// ** Hooks && Tools
import { useRef, useState } from 'react';
import { fakeData } from '../../data/fakeData';
import ProductCard from '../product/ProductCard';



// ** Interfaces
interface ICardSlider{
    category: string;
}



export default function CardSlider({category}:ICardSlider) {
    // ** States
    const [sliderSteps,setSliderSteps] = useState<number>(0);
    const filteredData = fakeData.filter(product => product.category.toLowerCase() === category.toLowerCase());


    // ** Ref
    const sldierRef = useRef<HTMLDivElement>(null);



    // ** Handlers
    const sliderMoveHandler = (dir:string)=>{
        const totalCards = filteredData.length;
        const sliderBar = sldierRef.current?.parentElement;
        if (!sldierRef.current || !sliderBar) return;
        if (totalCards <= 0) return;

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



    // ** Renders
    const cardsRender = filteredData.map(product =>
        <ProductCard id={product.id!} name={product.name} price={product.price.productPrice} key={product.id} thumbnailImg={{src: product.mainImage, alt: product.name}}/>
    )



    return (
        <>
            <div className={style.cards_slider}>
                <button onClick={()=>{sliderMoveHandler('left')}}>
                    <img src={leftArrowIcon} alt="left arrow icon" />
                </button>
                <div className={style.cards_slider_bar}>
                    <div className={style.cards} ref={sldierRef}>
                        {cardsRender}
                    </div>
                </div>
                <button onClick={()=>{sliderMoveHandler('right')}}>
                    <img src={rightArrowIcon} alt="right arrow icon" />
                </button>
            </div>
        </>
    )
}