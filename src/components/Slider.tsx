// ** Style 
import style from '../style/components/slider.module.css'
// ** Assets
import testImg from '../assets/images/test/homeSilderImg.png'



export default function Slider() {
    return (
        <>
            <div className={style.slider}>
                <div className={style.slide_bar}>
                    <div className={style.slide} style={{backgroundImage : `url(${testImg})`}}></div>
                    <div className={style.slide} style={{backgroundImage : `url(${testImg})`}}></div>
                    <div className={style.slide} style={{backgroundImage : `url(${testImg})`}}></div>
                </div>
            </div>
        </>
    )
}
